"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ThreeDCarousel() {
  const cards = [
    {
      name: "Sofia Alvarez",
      role: "Growth Lead",
      img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=1200&q=80&auto=format&fit=crop",
    },
    {
      name: "Jackson Mitchel",
      role: "AI Lead",
      img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=1200&q=80&auto=format&fit=crop",
    },
    {
      name: "John Doe",
      role: "Product Head",
      img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=1200&q=80&auto=format&fit=crop",
    },
    {
      name: "Armenia Sean",
      role: "Social Media Head",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80&auto=format&fit=crop",
    },
    {
      name: "Maya Patel",
      role: "Design Lead",
      img: "https://images.unsplash.com/photo-1763152496539-302ef51ef66f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Liam Becker",
      role: "Platform Engineer",
      img: "https://images.unsplash.com/photo-1763386840769-8484a2a02442?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(2);

  const positions = [
    {
      x: -360,
      scale: 0.85,
      rotate: 20,
      opacity: 0.4,
      z: 2,
      brightness: 0.6,
    },
    {
      x: -180,
      scale: 0.9,
      rotate: 10,
      opacity: 0.6,
      z: 5,
      brightness: 0.75,
    },
    {
      x: 0,
      scale: 1,
      rotate: 0,
      opacity: 1,
      z: 10,
      brightness: 1,
    },
    {
      x: 180,
      scale: 0.9,
      rotate: -10,
      opacity: 0.6,
      z: 5,
      brightness: 0.75,
    },
    {
      x: 360,
      scale: 0.85,
      rotate: -20,
      opacity: 0.4,
      z: 2,
      brightness: 0.6,
    },
  ];

  const shiftLeft = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const shiftRight = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const getPos = (i) => {
    const diff = (i - currentIndex + cards.length) % cards.length;
    if (diff < 5) return positions[diff];
    return positions[4]; // default offscreen
  };

  return (
    <section className="sm:py-24 pt-16 pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <h2 className="sm:text-5xl text-4xl font-semibold mt-4">
            Meet the team that talks about Capybara
          </h2>

          <p className="mt-3 text-neutral-300 max-w-2xl mx-auto">
            The humans behind the models — builders, dreamers, and delightful nerds.
          </p>
        </div>

        {/* Carousel */}
        <div className="flex mt-16 items-center justify-center relative" style={{ perspective: "1200px" }}>

          {/* Prev Button */}
          <button
            onClick={shiftLeft}
            className="absolute left-4 h-12 w-12 z-20 flex items-center justify-center rounded-full bg-black/50 ring-1 ring-white/10 hover:bg-white/5"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Cards */}
          <div className="relative w-full max-w-md h-[500px] flex items-center justify-center">
            {cards.map((card, i) => {
              const pos = getPos(i);

              return (
                <div
                  key={i}
                  className="absolute w-80 h-[460px] rounded-2xl overflow-hidden ring-1 ring-white/10 transition-all duration-500"
                  style={{
                    transform: `translateX(${pos.x}px) scale(${pos.scale}) rotateY(${pos.rotate}deg)`,
                    opacity: pos.opacity,
                    filter: `brightness(${pos.brightness})`,
                    zIndex: pos.z,
                  }}
                >
                  <Image
                    src={card.img}
                    alt={card.name}
                    fill
                    className="object-cover"
                  />

                  {/* Dark Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                  {/* Name & Role */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/20 mb-3">
                      <span className="text-white">{card.role}</span>
                    </div>

                    <p className="text-xl font-semibold text-white tracking-tight">
                      {card.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            onClick={shiftRight}
            className="absolute right-4 h-12 w-12 z-20 flex items-center justify-center rounded-full bg-black/50 ring-1 ring-white/10 hover:bg-white/5"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>
      </div>
    </section>
  );
}
