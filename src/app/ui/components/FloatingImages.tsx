"use client";

import Image, { StaticImageData } from "next/image";
import { useRef, MouseEvent } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

export default function FloatingImages({
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  children,
}: {
  img1: StaticImageData;
  img2: StaticImageData;
  img3: StaticImageData;
  img4: StaticImageData;
  img5: StaticImageData;
  img6: StaticImageData;
  img7: StaticImageData;
  img8: StaticImageData;
  children: React.ReactNode;
}) {
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
      className="min-h-full min-w-full overflow-hidden relative flex items-center justify-center"
    >
      <div
        ref={plane1}
        className={`w-full h-full absolute brightness-[85%] z-30`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
        >
          <Image
            alt="image"
            src={img1}
            className="w-[23rem] absolute left-[75%] top-[70%]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
        >
          <Image
            alt="image"
            src={img2}
            className="w-[23rem] absolute left-[8%] top-[65%]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
        >
          <Image
            alt="image"
            src={img3}
            className="w-[23rem] absolute left-[28%] top-[9%]"
          />
        </motion.div>
      </div>
      <div
        ref={plane2}
        className={`w-full h-full absolute brightness-[70%] z-20`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
        >
          <Image
            alt="image"
            src={img4}
            className="w-[23rem] absolute left-[5%] top-[15%]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
        >
          <Image
            alt="image"
            src={img5}
            className="w-[23rem] absolute left-[70%] top-[20%]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
        >
          <Image
            alt="image"
            src={img6}
            className="w-[23rem] absolute left-[55%] top-[60%]"
          />
        </motion.div>
      </div>
      <div ref={plane3} className={`w-full h-full absolute brightness-50 z-10`}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
        >
          <Image
            alt="image"
            src={img7}
            className="w-[23rem] absolute left-[55%] top-[5%]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
        >
          <Image
            alt="image"
            src={img8}
            className="w-[23rem] absolute left-[30%] top-[75%]"
          />
        </motion.div>
      </div>
      {children}
    </div>
  );
}
