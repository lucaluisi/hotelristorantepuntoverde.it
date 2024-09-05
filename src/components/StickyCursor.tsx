"use client";

import React, { use, useEffect } from "react";
import {
  SpringOptions,
  motion,
  animate,
  transform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { usePathname } from "next/navigation";

const SPRING_OPTIONS: SpringOptions = {
  damping: 20,
  stiffness: 300,
  mass: 0.5,
};

const UNSTICK_THRESHOLD_DISTANCE = 120;

const SHADOW_SIZE = 20;
const SHADOW_SIZE_ON_HOVER = 50;

const getDistanceFromRect = (rect: DOMRect, x: number, y: number) => {
  const { top, left, width, height } = rect;
  const right = left + width;
  const bottom = top + height;
  const nearestX = Math.max(left, Math.min(x, right));
  const nearestY = Math.max(top, Math.min(y, bottom));
  const dx = x - nearestX;
  const dy = y - nearestY;

  return Math.sqrt(dx * dx + dy * dy);
};

export default function StickyCursor({ isMobile }: { isMobile: boolean }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const hoveredElementRef = React.useRef<HTMLElement | null>(null);

  const mouse = { x: useMotionValue(0), y: useMotionValue(0) };
  const pointerShadow = { x: useMotionValue(0), y: useMotionValue(0) };
  const pointerShadowScale = { x: useMotionValue(1), y: useMotionValue(1) };
  const smoothPointerShadow = {
    x: useSpring(pointerShadow.x, SPRING_OPTIONS),
    y: useSpring(pointerShadow.y, SPRING_OPTIONS),
  };
  const pointerShadowAngle = useMotionValue(`0rad`);

  const cursorSize = isHovered ? SHADOW_SIZE_ON_HOVER : SHADOW_SIZE;

  useEffect(() => {
    if (!isMobile) {
      const manageMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;

        // animate pointer
        mouse.x.set(clientX);
        mouse.y.set(clientY);

        // animate pointerShadow
        if (isHovered && hoveredElementRef.current) {
          const { top, left, width, height } =
            hoveredElementRef.current.getBoundingClientRect();
          const center = { x: left + width / 2, y: top + height / 2 };
          const r = { x: clientX - center.x, y: clientY - center.y };

          const distance = getDistanceFromRect(
            hoveredElementRef.current.getBoundingClientRect(),
            clientX,
            clientY
          );

          const newScaleX = transform(
            distance,
            [0, UNSTICK_THRESHOLD_DISTANCE],
            [1, 1.2]
          );
          const newScaleY = transform(
            distance,
            [0, UNSTICK_THRESHOLD_DISTANCE],
            [1, 0.8]
          );
          pointerShadowScale.x.set(newScaleX);
          pointerShadowScale.y.set(newScaleY);

          pointerShadowAngle.set(`${Math.atan2(r.y, r.x)}rad`);

          pointerShadow.x.set(center.x + r.x * 0.12);
          pointerShadow.y.set(center.y + r.y * 0.12);

          animate(
            hoveredElementRef.current,
            { x: r.x * 0.1, y: r.y * 0.1 },
            { duration: 0 }
          );

          if (distance > UNSTICK_THRESHOLD_DISTANCE) {
            setIsHovered(false);
            animate(
              hoveredElementRef.current,
              { x: 0, y: 0 },
              { type: "spring", stiffness: 300, damping: 10, mass: 1 }
            );
            hoveredElementRef.current = null;
          }
        } else {
          pointerShadow.x.set(clientX);
          pointerShadow.y.set(clientY);
          pointerShadowScale.x.set(1);
          pointerShadowScale.y.set(1);
        }
      };
      const manageMouseOver = (e: MouseEvent) => {
        setIsHovered(true);
        hoveredElementRef.current = e.target as HTMLElement;
      };

      window.addEventListener("mousemove", manageMouseMove);
      document
        .querySelectorAll<HTMLDivElement>("[data-sticky]")
        .forEach((el) => {
          el.addEventListener("mouseenter", manageMouseOver);
        });

      document.body.style.setProperty("cursor", "none");

      return () => {
        window.removeEventListener("mousemove", manageMouseMove);
        document
          .querySelectorAll<HTMLDivElement>("[data-sticky]")
          .forEach((el) => {
            el.removeEventListener("mouseenter", manageMouseOver);
          });
        document.body.style.setProperty("cursor", null);
      };
    }
  }, [isHovered]);

  // per colpa della splash screen non trovava gli oggetti con data-sticky e non funzionava
  // mo sì
  const pathname = usePathname();
  useEffect(() => {
    console.log("sono dentro");
    if (isMobile || pathname !== "/") {
      return;
    }
    const timeout = setTimeout(() => setIsHovered(true), 2200);
    const timeout2 = setTimeout(() => setIsHovered(false), 2400);
    return () => {
      clearTimeout(timeout);
      clearTimeout(timeout2);
    };
  }, []);

  if (!isMobile) {
    return (
      <>
        <motion.div
          transformTemplate={({
            translateX,
            translateY,
            rotate,
            scaleX,
            scaleY,
          }) =>
            `translateX(${translateX}) translateY(${translateY}) rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`
          }
          style={{
            left: smoothPointerShadow.x,
            top: smoothPointerShadow.y,
            translateX: "-50%",
            translateY: "-50%",
            scaleX: pointerShadowScale.x,
            scaleY: pointerShadowScale.y,
            rotate: pointerShadowAngle,
          }}
          className="z-10 w-5 h-5 fixed bg-white rounded-full pointer-events-none"
          animate={{
            width: cursorSize,
            height: cursorSize,
          }}
        />

        <motion.div
          style={{ left: mouse.x, top: mouse.y }}
          className="z-10 w-2 h-2 fixed bg-black border-white -translate-x-1/2 -translate-y-1/2 border rounded-full pointer-events-none"
        />
      </>
    );
  }

  return null;
}
