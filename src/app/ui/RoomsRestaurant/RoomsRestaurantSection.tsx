import { useEffect, useRef } from "react";
import { playfair } from "../fonts";
import styles from "./style.module.scss";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

function Card({
  i,
  text,
  color,
  progress,
  range,
  targetScale,
}: {
  i: number;
  text: string;
  color: string;
  progress: MotionValue;
  range: number[];
  targetScale: number;
}) {
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div className={styles.cardContainer}>
      <motion.div
        style={{
          scale: scale,
          backgroundColor: color,
          top: `calc(-5% + ${i * 5}rem)`,
          border: "2px solid white",
        }}
        className={`${styles.card}`}
      >
        <h2 className={`${playfair.className} text-8xl text-center z-40`}>
          {text}
        </h2>
      </motion.div>
    </div>
  );
}

export default function RoomsRestaurantSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start", "end"],
  });

  const cards = [
    {
      text: "Coccola te stesso in camere luminose e accoglienti dopo un'emozionante giornata di esplorazione locale",
      color: "black",
    },
    {
      text: "Coccola te stesso in camere luminose e accoglienti dopo un'emozionante giornata di esplorazione locale",
      color: "black",
    },
  ];

  return (
    <div ref={container} className="relative">
      {cards.map((card, index) => {
        const targetScale = 1 - (cards.length - index) * 0.05;
        return (
          <Card
            key={index}
            {...card}
            i={index}
            progress={scrollYProgress}
            range={[index * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
}
