"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface SectionProps {
  title: string;
  href: string;
  image: string | null;
}

export function SectionCard({ title, href, image }: SectionProps) {
  return (
    <Link href={href}>
      <motion.div
        className="overflow-hidden border border-white/20 rounded-2xl hover:border-white/40 transition-colors h-min flex justify-between items-center flex-col"
        whileHover={{ scale: 1.03 }}
      >
        {image &&
          <div className="size-full relative aspect-[4/3] overflow-hidden">
            <Image src={image} fill alt="image" className="object-cover" />
          </div>
        }
        <h1 className="text-2xl font-bold py-5">
          {title}
          {/* <span className="hover:pl-10 pl-5">→</span> */}
        </h1>
      </motion.div>
    </Link>
  );
}
