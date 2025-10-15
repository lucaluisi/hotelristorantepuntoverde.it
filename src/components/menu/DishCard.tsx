"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface DishProps {
  name: string;
  price: number;
  desc: string | null;
  image: string | null;
}

export function DishCard({ name, price, desc, image }: DishProps) {
  return (
    <motion.div
      className="overflow-hidden border border-white/20 rounded-2xl hover:border-white/40 transition-colors h-min"
      whileHover={{ scale: 1.03 }}
    >
      {image && <Image src={image} width={1000} height={1000} alt="image" className="w-full h-auto aspect-[3/2]" />}
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-medium">{name}</h3>
          <span className="text-gray-400">€ {price}</span>
        </div>
        {desc && <p className="text-gray-500 text-sm">{desc}</p>}
      </div>
    </motion.div>
  );
}
