"use client";

import { useEffect } from "react";
import HeroSection from "./ui/Hero/HeroSection";
import PoolSection from "./ui/Pool/PoolSection";
import RoomsSection from "./ui/Rooms/RoomsSection";
import Lenis from "@studio-freight/lenis";


export default function Home() {
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
      <HeroSection />
      <RoomsSection />
      <PoolSection />
      <div className="h-[100vh]"></div>
    </main>
  );
}
