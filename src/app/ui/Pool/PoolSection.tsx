"use client";

import Image2 from "../../../../public/rooms/2.jpg";
import Image3 from "../../../../public/rooms/3.jpg";
import Image4 from "../../../../public/rooms/4.jpg";
import Image5 from "../../../../public/rooms/5.jpg";
import Image6 from "../../../../public/rooms/6.jpg";
import Image7 from "../../../../public/rooms/7.jpg";
import PoolImage from "../../../../public/pool/piscina.jpg";

import styles from "./style.module.scss";
import Image from "next/image";
import { useScroll, useTransform, motion, circOut } from "framer-motion";
import { useRef } from "react";
import { playfair } from "../fonts";

export default function PoolSection() {
  const container = useRef(null);
  const { scrollYProgress: scrollYProgressImages } = useScroll({
    target: container,
    offset: ["start", "60%"],
  });
  const { scrollYProgress: scrollYProgressText } = useScroll({
    target: container,
    offset: ["40%", "60%"],
  });

  const scale4 = useTransform(scrollYProgressImages, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgressImages, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgressImages, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgressImages, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgressImages, [0, 1], [1, 9]);
  const textParallax = useTransform(
    scrollYProgressText,
    [1, 0],
    ["80vh", "100vh"],
    { ease: circOut }
  );

  const pictures = [
    {
      src: <Image src={PoolImage} fill alt="image" placeholder="blur" />,
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
          className={`${playfair.className} text-8xl text-center z-40`}
        >
          Concediti un momento di puro piacere
          <br />
          nella nostra piscina salata
        </motion.h2>
      </div>
    </div>
  );
}
