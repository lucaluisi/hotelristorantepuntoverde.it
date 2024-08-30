"use client";

import styles from "./style.module.scss";
import { useScroll, useTransform, motion, circOut } from "framer-motion";
import { useRef } from "react";
import { H2 } from "@/components/ui/text";
import { CustomImage } from "@/components/ui/image";

export default function Pool() {
  const container = useRef(null);
  const { scrollYProgress: scrollYProgressImages } = useScroll({
    target: container,
    offset: ["start", "80%"],
  });
  const { scrollYProgress: scrollYProgressText } = useScroll({
    target: container,
    offset: ["40%", "80%"],
  });

  const scale4 = useTransform(scrollYProgressImages, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgressImages, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgressImages, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgressImages, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgressImages, [0, 1], [1, 9]);
  const textParallax = useTransform(
    scrollYProgressText,
    [0, 1],
    ["105vh", "0.01vh"],
    { ease: circOut }
  );

  const pictures = [
    {
      src: <CustomImage src="pool/piscina.webp" />,
      scale: scale4,
    },
    {
      src: <CustomImage src="rooms/1.jpg" />,
      scale: scale5,
    },
    {
      src: <CustomImage src="rooms/2.jpg" />,
      scale: scale6,
    },
    {
      src: <CustomImage src="rooms/3.jpg" />,
      scale: scale5,
    },
    {
      src: <CustomImage src="rooms/4.jpg" />,
      scale: scale6,
    },
    {
      src: <CustomImage src="rooms/5.jpg" />,
      scale: scale8,
    },
    {
      src: <CustomImage src="rooms/6.jpg" />,
      scale: scale9,
    },
  ];

  return (
    <div ref={container} className={styles.container}>
      <div className={`${styles.sticky} flex items-center xl:items-end xl:pb-20`}>
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.1,
              }}
              style={{ scale: scale }}
              className={styles.el}
              key={index}
            >
              <div className={styles.imageContainer}>{src}</div>
            </motion.div>
          );
        })}
        <motion.div style={{ y: textParallax }}>
          <H2 className="text-center z-40 px-5 xl:px-20">
            Concediti un momento di puro piacere nella nostra piscina salata
          </H2>
        </motion.div>
      </div>
    </div>
  );
}
