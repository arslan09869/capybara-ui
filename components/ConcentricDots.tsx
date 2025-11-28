"use client";

import { useEffect, useRef } from "react";

export default function ConcentricDots() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const rings = 7;
    const radiusStep = 33;

    // center dot
    const center = document.createElement("div");
    center.className = "cd-dot";
    center.style.width = "4px";
    center.style.height = "4px";
    center.style.left = "calc(50% - 2px)";
    center.style.top = "calc(50% - 2px)";
    center.style.opacity = "0.85";
    center.style.animationDelay = "0s";
    container.appendChild(center);

    // Create rings + dots
    for (let r = 0; r < rings; r++) {
      const radius = 28 + r * radiusStep;
      const dots = 31 + r * 5;

      for (let i = 0; i < dots; i++) {
        const angle = (2 * Math.PI * i) / dots;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        const dot = document.createElement("div");
        dot.className = "cd-dot";

        dot.style.left = `calc(50% + ${x}px - 1.5px)`;
        dot.style.top = `calc(50% + ${y}px - 1.5px)`;
        dot.style.opacity = `${0.58 - r * 0.045}`;
        dot.style.animationDelay = `${(r * 0.13 + i * 0.08) % 2.2}s`;

        container.appendChild(dot);
      }
    }

    return () => {
      container.querySelectorAll(".cd-dot").forEach((el) => el.remove());
    };
  }, []);

  return <div className="cd-container" ref={containerRef}></div>;
}
