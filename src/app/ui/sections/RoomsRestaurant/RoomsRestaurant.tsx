import React, { useRef } from "react";
import { playfair } from "@/app/ui/fonts";
import { useScroll } from "framer-motion";
import Card from "../../components/Card";
import FloatingImages from "../../components/FloatingImages";
import { roomsImages, restaurantImages } from "./data";
import { H2, H3 } from "@/components/ui/text";

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
          <div className="z-40">
            <H3 className="text-center">
              Coccola te stesso in camere luminose e
            </H3>
            <H3 className="text-center">
              accoglienti dopo un'emozionante giornata di
            </H3>
            <H3 className="text-center">esplorazione locale</H3>
          </div>
        </FloatingImages>
      ),
      color: "black",
    },
    {
      content: (
        <FloatingImages {...restaurantImages}>
          <div className="z-40">
            <H3 className="text-center">
              Coccola te stesso in camere luminose e
            </H3>
            <H3 className="text-center">
              accoglienti dopo un'emozionante giornata di
            </H3>
            <H3 className="text-center">esplorazione locale</H3>
          </div>
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
