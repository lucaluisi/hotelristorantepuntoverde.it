import React, { useRef } from "react";
import { playfair } from "@/app/ui/fonts";
import { useScroll } from "framer-motion";
import Card from "../../components/Card";
import FloatingImages from "../../components/FloatingImages";
import { roomsImages, restaurantImages } from "./data";

export default function RoomsRestaurant() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start", "end"],
  });

  const cards = [
    {
      content: (
        <FloatingImages {...roomsImages}>
          <h2 className={`${playfair.className} text-7xl text-center z-40`}>
            Coccola te stesso in camere luminose e
            <br />
            accoglienti dopo un'emozionante giornata di
            <br />
            esplorazione locale
          </h2>
        </FloatingImages>
      ),
      color: "black",
    },
    {
      content: (
        <FloatingImages {...restaurantImages}>
          <h2 className={`${playfair.className} text-7xl text-center z-40`}>
            Coccola te stesso in camere luminose e
            <br />
            accoglienti dopo un'emozionante giornata di
            <br />
            esplorazione locale
          </h2>
        </FloatingImages>
      ),
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
