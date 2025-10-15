"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 w-full z-30 px-10 py-6 backdrop-blur-md bg-black/50"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Image
        src="/logo/logo.svg"
        width={1000}
        height={1000}
        className="w-2/5 landscape:w-[calc(1/8*100%)] h-auto mx-auto"
        alt="logo"
      />
    </motion.nav>
  );
}
