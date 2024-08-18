import { MotionValue, useTransform, motion } from "framer-motion";
import { ReactNode } from "react";

export default function Card({
  i,
  content,
  color,
  progress,
  range,
  targetScale,
}: {
  i: number;
  text: string;
  content: ReactNode;
  color: string;
  progress: MotionValue;
  range: number[];
  targetScale: number;
}) {
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{
          scale: scale,
          backgroundColor: color,
          top: `calc(-5% + ${i * 5}rem)`,
          border: "2px solid white",
        }}
        className="h-[80vh] w-[80vw] relative -top-[5%]"
      >
        {content}
      </motion.div>
    </div>
  );
}
