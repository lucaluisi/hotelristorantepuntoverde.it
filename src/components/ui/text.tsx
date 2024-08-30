import React from "react";
import { motion, MotionProps } from "framer-motion";
import { playfair } from "@/components/ui/fonts";

const ANIMATION_START_DELAY = 0.2;
const LETTER_DELAY = 0.02;
const LETTER_DURATION = 0.5;

const animationVariants = { initial: { y: "100%" }, animate: { y: 0 } };
const animationTransition = (index: number) => ({
  delay: index * LETTER_DELAY,
  duration: LETTER_DURATION,
  type: "spring",
});

const animateLetter = (letter: string, index: number) => (
  <motion.span
    key={index}
    variants={animationVariants}
    transition={animationTransition(index)}
    className="inline-block"
  >
    {letter}
  </motion.span>
);

interface HeadingProps extends MotionProps {
  className?: string;
  children?: string;
}

const H1: React.FC<HeadingProps> = (props) => {
  return (
    <motion.h1
      initial="initial"
      whileInView="animate"
      transition={{ delay: ANIMATION_START_DELAY }}
      viewport={{ once: true }}
      className={`text-7xl sm:text-6xl lg:text-[10rem] overflow-hidden flex flex-wrap gap-x-4 lg:gap-x-7 justify-center ${playfair.className} ${props.className}`}
    >
      {props.children?.split(" ").map((word, i) => (
        <div key={i} className="inline-block overflow-hidden">
          {word
            .split("")
            .map((letter, j) => animateLetter(letter, (i * (i + 1)) / 2 + j))}
        </div>
      ))}
    </motion.h1>
  );
};

const H2: React.FC<HeadingProps> = (props) => {
  return (
    <motion.h2
      {...props}
      initial="initial"
      whileInView="animate"
      transition={{ delay: ANIMATION_START_DELAY }}
      viewport={{ once: true }}
      className={`text-8xl overflow-hidden flex flex-wrap gap-x-5 justify-center ${playfair.className} ${props.className}`}
    >
      {props.children?.split(" ").map((word, i) => (
        <div key={i} className="inline-block overflow-hidden">
          {word.split("").map((letter, j) => animateLetter(letter, (i * (i + 1)) / 2 + j))}
        </div>
      ))}
    </motion.h2>
  );
};

const H3: React.FC<HeadingProps> = (props) => {
  return (
    <motion.h3
      {...props}
      initial="initial"
      whileInView="animate"
      transition={{ delay: ANIMATION_START_DELAY }}
      viewport={{ once: true }}
      className={`text-7xl overflow-hidden flex flex-wrap gap-x-5 justify-center ${playfair.className} ${props.className}`}
    >
      {props.children?.split(" ").map((word, i) => (
        <div key={i} className="inline-block overflow-hidden">
          {word.split("").map((letter, j) => animateLetter(letter, (i * (i + 1)) / 2 + j))}
        </div>
      ))}
    </motion.h3>
  );
};

const H4: React.FC<HeadingProps> = (props) => {
  return (
    <motion.h4
      initial="initial"
      whileInView="animate"
      transition={{ delay: ANIMATION_START_DELAY }}
      viewport={{ once: true }}
      className={`text-4xl overflow-hidden ${playfair.className} ${props.className}`}
    >
      {props.children?.split(" ").map((word, i) => (
        <div key={i} className="inline-block overflow-hidden">
          {word
            .split("")
            .map((letter, j) => animateLetter(letter, (i * (i + 1)) / 2 + j))}
        </div>
      ))}
    </motion.h4>
  );
};

export { H1, H2, H3, H4 };
