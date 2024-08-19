import { playfair } from "@/app/ui/fonts";
import { motion, useScroll, useTransform, circIn } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef(null);
  const { scrollYProgress: scrollYProgressOpacity } = useScroll({
    target: container,
    offset: ["10%", "end"],
  });

  const opacity = useTransform(scrollYProgressOpacity, [0, 1], [1, 0], {
    ease: circIn,
  });

  return (
    <div ref={container} className="h-[200vh] relative">
      <motion.div
        style={{ opacity: opacity }}
        className="sticky top-0 h-[100vh] min-h-dvh overflow-hidden flex justify-center"
      >
        <motion.h1
          initial={{ y: "100vh" }}
          animate={{ y: "85vh" }}
          className={`relative z-30 text-5xl lg:text-[10rem] text-center ${playfair.className}`}
        >
          Hotel Ristorante Punto Verde
        </motion.h1>
        <video
          autoPlay
          muted
          loop
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none brightness-75"
        >
          <source src="video.webm" type="video/webm" />
          <source src="video.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </div>
  );
}
