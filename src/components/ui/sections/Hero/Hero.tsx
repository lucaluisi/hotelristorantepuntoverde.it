import { H1 } from "@/components/ui/text";
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
        <H1 className="absolute bottom-10 z-20 text-center">
          Hotel Ristorante Punto Verde
        </H1>
        <video
          autoPlay
          muted
          loop
          className="-z-50 absolute w-auto min-w-full min-h-full max-w-none brightness-75"
        >
          <source src="video.webm" type="video/webm" />
          <source src="video.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </div>
  );
}
