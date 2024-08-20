import React from "react";
import { motion } from "framer-motion";
import { playfair } from "@/app/ui/fonts";

interface HeadingProps {
  className?: string;
  children?: string;
}

const H1: React.FC<HeadingProps> = (props) => {
  return (
    <motion.h1
      initial="initial"
      whileInView="animate"
      transition={{ staggerChildren: 0.05, delay: 0.2 }}
      viewport={{ once: true }}
      className={`text-5xl lg:text-[10rem] overflow-hidden ${playfair.className} ${props.className}`}
    >
      {props.children?.split("").map((letter, i) => (
        <motion.span
          key={i}
          variants={{ initial: { y: "120%" }, animate: { y: 0 } }}
          transition={{ delay: i * 0.02, duration: 0.5, type: "spring" }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default H1;
