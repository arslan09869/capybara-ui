"use client";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Playwrite_DE_SAS } from "next/font/google";

const font = Playwrite_DE_SAS({
  weight: ["400"],
});

export default function Footer() {
  const links = [
    { name: "Components", href: "#" },
    { name: "Templates", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Docs", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <footer className="relative mt-24 border-t border-zinc-600/20 dark:border-white/10 py-16 px-6">
      {/* Glow Effect */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-transparent to-white/5 dark:to-white/10" />

      <div className="max-w-full mx-auto flex flex-col sm:flex-row justify-between items-start gap-12 relative z-10">
        {/* Brand */}
        <div className="space-y-2">
          <h2 className="text-2xl bg-clip-text text-transparent bg-gradient-to-b from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
            Capybara UI
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xs">
            Build premium quality interfaces with ease — Tailwind + Motion +
            ShadCN.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
          {links.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="
                relative group 
                text-zinc-700 dark:text-zinc-300 
                hover:text-zinc-900 dark:hover:text-white 
                transition
                w-fit
              "
            >
              {item.name}

              {/* Hover underline */}
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-zinc-900 dark:bg-white group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-16 pt-6 border-t border-zinc-600/20 dark:border-white/10 text-center text-sm text-zinc-600 dark:text-zinc-400 relative">
        © {new Date().getFullYear()} Capybara UI. All rights reserved.
      </div>

      {/* Plus Corner Icons */}
      <FooterCornerPlus pos="top-left" />
      <FooterCornerPlus pos="top-right" />
      <FooterCornerPlus pos="bottom-left" />
      <FooterCornerPlus pos="bottom-right" />
    </footer>
  );
}

function FooterCornerPlus({ pos }: { pos: string }) {
  const base =
    "absolute w-4 h-4 text-zinc-600 dark:text-zinc-300 transition-transform";
  const positions: Record<string, string> = {
    "top-left": "-top-3 -left-3",
    "top-right": "-top-3 -right-3",
    "bottom-left": "-bottom-3 -left-3",
    "bottom-right": "-bottom-3 -right-3",
  };

  return <Plus className={`${base} ${positions[pos]}`} />;
}
