"use client";

import { useEffect } from "react";
import Lenis from "lenis";

import { Hero } from "@/components/menu/Hero";
import { menu } from "@/lib/menu";
import { SectionCard } from "@/components/menu/SectionCard";
import Footer from "@/components/ui/sections/Footer/Footer";

export default function HomePage() {
  // smooth scroll
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  return (
    <main>
      <Hero />
      <section className="pb-20 gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {menu.map((section) => (
          <SectionCard key={section.href} title={section.title} href={`/menu/${section.href}`} image={section.image} />
        ))}
      </section>
      <Footer />
    </main>
  );
}
