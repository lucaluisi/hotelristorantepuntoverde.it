"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/ui/sections/Hero/Hero";
import Pool from "@/components/ui/sections/Pool/Pool";
import RoomsRestaurant from "@/components/ui/sections/RoomsRestaurant/RoomsRestaurant";
import Lenis from "lenis";
import Bho from "@/components/ui/sections/Bho/Bho";
import Form from "@/components/ui/sections/Form/Form";
import Footer from "@/components/ui/sections/Footer/Footer";
import { SplashScreen } from "@/components/ui/SplashScreen";

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

  // splash screen
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (isLoading) {
      return;
    }
  }, [isLoading]);

  return (
    <main>
      {isLoading ? (
        <SplashScreen finishLoading={() => setIsLoading(false)} />
      ) : (
        <>
          <Hero />
          <Bho />
          <RoomsRestaurant />
          <Pool />
          <Form />
          <Footer />
        </>
      )}
    </main>
  );
}
