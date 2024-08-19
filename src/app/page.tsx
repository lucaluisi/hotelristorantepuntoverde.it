"use client";

import { useEffect } from "react";
import Hero from "./ui/sections/Hero/Hero";
import Pool from "./ui/sections/Pool/Pool";
import RoomsRestaurant from "./ui/sections/RoomsRestaurant/RoomsRestaurant";
import Lenis from "lenis";
import Bho from "./ui/sections/Bho/Bho";
import Form from "./ui/sections/Form/Form";
import Footer from "./ui/sections/Footer/Footer";

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
      <Hero />
      <Bho />
      <RoomsRestaurant />
      <Pool />
      <Form />
      <Footer />
    </main>
  );
}
