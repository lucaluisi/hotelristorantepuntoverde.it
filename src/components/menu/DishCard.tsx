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
      {image &&
        <div className="size-full relative aspect-[4/3] overflow-hidden">
          <Image src={image} fill alt="image" className="object-cover" />
        </div>
      }
      <div className="p-5">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">{name}</h3>
          <span className="text-gray-400">€ {price}</span>
        </div>
        {desc && <p className="text-gray-500 text-sm mt-2">{desc}</p>}
      </div>
    </motion.div>
  );
}
