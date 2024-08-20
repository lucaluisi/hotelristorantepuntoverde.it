import React from "react";
import { motion, MotionProps } from "framer-motion";
import { playfair } from "@/app/ui/fonts";

const ANIMATION_START_DELAY = 0.2;
const LETTER_DELAY = 0.02;
const LETTER_DURATION = 0.5;

const SPACE_UNICODE = "\u00A0";

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
    {letter === " " ? SPACE_UNICODE : letter}
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
      className={`text-5xl lg:text-[10rem] overflow-hidden ${playfair.className} ${props.className}`}
    >
      {props.children?.split("").map((letter, i) => animateLetter(letter, i))}
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
      className={`text-8xl overflow-hidden ${playfair.className} ${props.className}`}
    >
      {props.children?.split("").map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.2,
            delay: i * LETTER_DELAY,
          }}
          className="inline-block"
        >
          {letter === " " ? SPACE_UNICODE : letter}
        </motion.span>
      ))}
    </motion.h2>
  );
};

const H3: React.FC<HeadingProps> = (props) => {
  return (
    <motion.h2
      {...props}
      initial="initial"
      whileInView="animate"
      transition={{ delay: ANIMATION_START_DELAY }}
      viewport={{ once: true }}
      className={`text-7xl overflow-hidden ${playfair.className} ${props.className}`}
    >
      {props.children?.split("").map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.2,
            delay: i * LETTER_DELAY,
          }}
          className="inline-block"
        >
          {letter === " " ? SPACE_UNICODE : letter}
        </motion.span>
      ))}
    </motion.h2>
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
      {props.children?.split("").map((letter, i) => animateLetter(letter, i))}
    </motion.h4>
  );
};

const P: React.FC<HeadingProps> = (props) => {
  return (
    <motion.p
      initial="initial"
      whileInView="animate"
      transition={{ delay: ANIMATION_START_DELAY }}
      viewport={{ once: true }}
      className={`overflow-hidden ${props.className}`}
    >
      {props.children?.split("").map((letter, i) => animateLetter(letter, i))}
    </motion.p>
  );
};

export { H1, H2, H3, H4, P };
