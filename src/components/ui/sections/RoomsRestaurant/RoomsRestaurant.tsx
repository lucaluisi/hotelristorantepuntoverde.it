import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import { roomsImages, restaurantImages } from "./data";
import CustomCard from "@/components/ui/customCard";

export default function RoomsRestaurant() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start", "end"],
  });

  const cards = [
    {
      text: "Coccola te stesso in camere luminose e accoglienti dopo un'emozionante giornata di esplorazione locale",
      images: roomsImages,
    },
    {
      text: "Coccola te stesso in camere luminose e accoglienti dopo un'emozionante giornata di esplorazione locale",
      images: restaurantImages,
    },
  ];

  return (
    <div ref={container} className="relative">
      {cards.map((card, index) => {
        const targetScale = 1 - (cards.length - index) * 0.05;
        return (
          <CustomCard
            key={index}
            images={card.images}
            i={index}
            progress={scrollYProgress}
            range={[index * 0.25, 1]}
            targetScale={targetScale}
          >
            {card.text}
          </CustomCard>
        );
      })}
    </div>
  );
}
