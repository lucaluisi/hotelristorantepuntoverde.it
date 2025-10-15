"use client";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="mb-20 flex flex-col justify-center items-center text-center">
      <motion.h2
        className="text-6xl font-bold tracking-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Menù
      </motion.h2>
      <motion.p
        className="mt-4 text-gray-400 text-xl max-w-xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Service: €2.00 per person
      </motion.p>
    </section>
  );
}
