"use client";

import { useEffect, useRef } from "react";

export default function GlobeLines() {
  const globeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const globe = globeRef.current;
    if (!globe) return;

    const N = 440;
    const R = 140;

    const positions: { x: number; y: number; z: number }[] = [];
    const baseRotations: number[] = [];
    const lines: HTMLDivElement[] = [];

    // ------------------------------
    // CREATE LINES (React-safe)
    // ------------------------------
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = Math.PI * (3 - Math.sqrt(5)) * i;
      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius;

      positions.push({ x, y, z });

      const tangentAngle = (Math.atan2(z, x) * 180) / Math.PI;
      baseRotations.push(tangentAngle + 45);

      const line = document.createElement("div");
      line.className = "globe-line";
      globe.appendChild(line);

      lines.push(line);
    }

    // ------------------------------
    // Breathing Random Activation
    // ------------------------------
    function randomBreathing() {
      lines.forEach((l) => l.classList.remove("active"));

      const n = Math.floor(N / 5 + Math.random() * (N / 8));
      const indices = Array.from({ length: N }, (_, i) => i);

      for (let i = 0; i < n; i++) {
        const idx = indices.splice(
          Math.floor(Math.random() * indices.length),
          1
        )[0];
        lines[idx].classList.add("active");
      }
    }

    randomBreathing();
    const breathingInterval = setInterval(randomBreathing, 1400);

    // ------------------------------
    // Animation Loop
    // ------------------------------
    let start: number | null = null;
    let frameId: number;

    const animate = (ts: number) => {
      if (!start) start = ts;
      const t = (ts - start) / 1400;

      const ry = t * 0.44;
      const rx = Math.sin(t * 0.35) * 0.28;

      const sinRy = Math.sin(ry);
      const cosRy = Math.cos(ry);
      const sinRx = Math.sin(rx);
      const cosRx = Math.cos(rx);

      const syncAngle = 90 * Math.sin(ts * 0.00085);
      const lineScale = 1 + 0.7 * Math.abs(Math.sin(ts * 0.0012));

      for (let i = 0; i < N; i++) {
        const { x, y, z } = positions[i];

        // rotation Y
        let x1 = cosRy * x - sinRy * z;
        let z1 = sinRy * x + cosRy * z;

        // rotation X
        let y1 = cosRx * y - sinRx * z1;
        let z2 = sinRx * y + cosRx * z1;

        const persp = 350 / (350 + z2 * R);
        const px = x1 * R * persp;
        const py = y1 * R * persp;

        let scaleY = 1;
        if (lines[i].classList.contains("active")) {
          scaleY = 1.6 + 0.1 * Math.sin(ts / 420 + i);
        }

        const angle = baseRotations[i] + syncAngle;

        lines[i].style.transform =
          `translate(-50%, -50%) translate(${px}px, ${py}px) ` +
          `scale(${lineScale}, ${scaleY}) rotate(${angle}deg)`;

        lines[i].style.zIndex = String(100 + Math.round(z2 * 100));
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      clearInterval(breathingInterval);
      cancelAnimationFrame(frameId);
      lines.forEach((l) => l.remove());
    };
  }, []);

  return (
    <div className="globe-container" ref={globeRef}></div>
  );
}
