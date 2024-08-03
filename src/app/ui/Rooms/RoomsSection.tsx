"use client";

import Image1 from "../../../../public/rooms/1.jpg";
import Image2 from "../../../../public/rooms/2.jpg";
import Image3 from "../../../../public/rooms/3.jpg";
import Image4 from "../../../../public/rooms/4.jpg";
import Image5 from "../../../../public/rooms/5.jpg";
import Image6 from "../../../../public/rooms/6.jpg";
import Image7 from "../../../../public/rooms/7.jpg";
import Image8 from "../../../../public/rooms/8.jpg";

import Image from "next/image";
import style from "./style.module.scss";
import { useRef, MouseEvent } from "react";
import gsap from "gsap";
import { playfair } from "../fonts";

export default function RoomsSection() {
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  const speed = 0.03;
  let xForce = 0;
  let yForce = 0;
  let requestAnimationFrameId: number;
  const easing = 0.095;

  const manageMouseMove = (e: MouseEvent) => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;

    if (!requestAnimationFrameId) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start: number, end: number, amount: number) =>
    start * (1 - amount) + end * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane1.current, {
      x: `+=${xForce}`,
      y: `+=${yForce}`,
    });
    gsap.set(plane2.current, {
      x: `+=${xForce * 0.5}`,
      y: `+=${yForce * 0.5}`,
    });
    gsap.set(plane3.current, {
      x: `+=${xForce * 0.25}`,
      y: `+=${yForce * 0.25}`,
    });

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce != 0 || yForce != 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = 0;
    }
  };

  return (
    <div
      onMouseMove={(e: MouseEvent) => {
        manageMouseMove(e);
      }}
      className="min-h-dvh min-w-full overflow-hidden relative flex items-center justify-center my-[20vh]"
    >
      <div ref={plane1} className={`${style.plane} brightness-[70%] z-30`}>
        <Image alt="image" src={Image1} className="left-[90%] top-[70%]" />
        <Image alt="image" src={Image2} className="left-[5%] top-[65%]" />
        <Image alt="image" src={Image3} className="left-[35%] top-0" />
      </div>
      <div ref={plane2} className={`${style.plane} brightness-[60%] z-20`}>
        <Image alt="image" src={Image4} className="left-[5%] top-[10%]" />
        <Image alt="image" src={Image5} className="left-[80%] top-[5%]" />
        <Image alt="image" src={Image6} className="left-[60%] top-[60%]" />
      </div>
      <div ref={plane3} className={`${style.plane} brightness-50 z-10`}>
        <Image alt="image" src={Image7} className="left-[65%] top-[2.5%]" />
        <Image alt="image" src={Image8} className="left-[40%] top-[75%]" />
      </div>
      <h2 className={`${playfair.className} text-8xl text-center z-40`}>
        Coccola te stesso in camere luminose e
        <br />
        accoglienti dopo un'emozionante giornata di
        <br />
        esplorazione locale
      </h2>
    </div>
  );
}
