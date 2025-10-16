"use client";

import { DishCard } from "@/components/menu/DishCard";
import { menu } from "@/lib/menu";
import Footer from "@/components/ui/sections/Footer/Footer";
import { useEffect } from "react";
import Lenis from "lenis";
import React from "react";
import Link from "next/link";

export default function SectionPage({ params }: { params: Promise<{ section: string }> }) {
    // smooth scroll
    useEffect(() => {
        const lenis = new Lenis();
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    });

    const { section } = React.use(params);

    const selectedSection = menu.find(
        (s) => s.href.toLowerCase() === decodeURIComponent(section.toLowerCase())
    );

    if (!selectedSection) {
        return (
            <main className="min-h-screen bg-black text-white p-10">
                <p className="text-gray-400">Sezione non trovata.</p>
            </main>
        );
    }

    return (
        <>
            <h1 className="font-bold mb-8 text-4xl">{selectedSection.title}</h1>

            {selectedSection.items.map((category, i) => (
                <span key={i}>
                    {category.category && <h2 className="text-2xl font-bold mb-8">{category.category}</h2>}
                    <section className="pb-20 gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {category.dishes.map((dish) => (
                            <DishCard key={dish.name} name={dish.name} price={dish.price} desc={dish.desc} image={dish.image} />
                        ))}
                    </section>
                </span>
            ))}
            <Footer />
        </>
    );
}
