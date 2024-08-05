"use client";

import { useEffect } from "react";
import HeroSection from "./ui/Hero/HeroSection";
import PoolSection from "./ui/Pool/PoolSection";
import RoomsRestaurantSection from "./ui/RoomsRestaurant/RoomsRestaurantSection";
import Lenis from "@studio-freight/lenis";
import BhoSection from "./ui/Bho/BhoSection";


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
      <BhoSection />
      <RoomsRestaurantSection />
      <PoolSection />
      <div className="h-[100vh]"></div>
    </main>
  );
}
