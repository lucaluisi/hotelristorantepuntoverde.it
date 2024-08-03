"use client";
import Image2 from "../../../public/rooms/2.jpg";
import Image3 from "../../../public/rooms/3.jpg";
import Image4 from "../../../public/rooms/4.jpg";
import Image5 from "../../../public/rooms/5.jpg";
import Image6 from "../../../public/rooms/6.jpg";
import Image7 from "../../../public/rooms/7.jpg";
import PoolImage from "../../../public/pool/piscina.jpg";

import styles from "./style.module.scss";
import Image from "next/image";
import { useScroll, useTransform, motion, circOut } from "framer-motion";
import { useEffect, useRef } from "react";
import { playfair } from "@/app/ui/fonts";
import Lenis from "@studio-freight/lenis";

export default function bo() {
  // smooth scroll
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  const container = useRef(null);
  const { scrollYProgress: scrollYProgressImages } = useScroll({
    target: container,
    offset: ["start", "end"],
  });
  const { scrollYProgress: scrollYProgressText } = useScroll({
    target: container,
    offset: ["start", "30%"],
  });

  const scale4 = useTransform(scrollYProgressImages, [0, 1], [1, 1 / 4]);
  const scale5 = useTransform(scrollYProgressImages, [0, 1], [5, 1]);
  const scale6 = useTransform(scrollYProgressImages, [0, 1], [6, 1]);
  const scale8 = useTransform(scrollYProgressImages, [0, 1], [8, 1]);
  const scale9 = useTransform(scrollYProgressImages, [0, 1], [9, 1]);
  const textParallax = useTransform(
    scrollYProgressText,
    [0, 1],
    ["80vh", "100vh"],
    { ease: circOut }
  );

  const pictures = [
    {
      src: (
        <video
          loop
          autoPlay
          muted
          className="w-auto min-w-full min-h-full h-full max-w-none"
        >
          <source src="video.webm" type="video/webm" />
          <source src="video.mp4" type="video/mp4" />
        </video>
      ),
      scale: scale4,
    },
    {
      src: <Image src={Image2} fill alt="image" placeholder="blur" />,
      scale: scale5,
    },
    {
      src: <Image src={Image3} fill alt="image" placeholder="blur" />,
      scale: scale6,
    },
    {
      src: <Image src={Image4} fill alt="image" placeholder="blur" />,
      scale: scale5,
    },
    {
      src: <Image src={Image5} fill alt="image" placeholder="blur" />,
      scale: scale6,
    },
    {
      src: <Image src={Image6} fill alt="image" placeholder="blur" />,
      scale: scale8,
    },
    {
      src: <Image src={Image7} fill alt="image" placeholder="blur" />,
      scale: scale9,
    },
  ];

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div
              style={{ scale: scale }}
              className={styles.el}
              key={index}
            >
              <div className={styles.imageContainer}>{src}</div>
            </motion.div>
          );
        })}
        <motion.h2
          style={{ y: textParallax }}
          initial={{ y: "100vh" }}
          animate={{ y: "80vh" }}
          className={`text-5xl lg:text-[10rem] text-center ${playfair.className} z-40`}
        >
          Hotel Ristorante Punto Verde
        </motion.h2>
      </div>
    </div>
  );
}
