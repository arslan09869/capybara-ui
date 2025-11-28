"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ChevronDown } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      q: <>What is Capybara UI?</>,
      a: "Capybara is a modern UI component library built using Tailwind CSS + ShadCN + Motion.",
    },
    {
      q: "Does it include templates?",
      a: "Yes! It includes production-ready templates for dashboards, landing pages & more.",
    },
    {
      q: "Is dark mode supported?",
      a: "Of course — everything adapts beautifully to dark mode.",
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto mt-6 space-y-10">
      {faqs.map((item, i) => (
        <AnimatedFAQCard key={i} q={item.q} a={item.a} index={i} />
      ))}
    </div>
  );
}

function AnimatedFAQCard({
  q,
  a,
  index,
}: {
  q: string;
  a: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      onClick={() => setOpen(!open)}
      className="
        relative w-full max-w-3xl mx-auto cursor-pointer
        border border-zinc-500/50 bg-transparent backdrop-blur-sm
        transition-all duration-300
        hover:border-zinc-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]
        p-6 group/canvas-card
      "
    >
      {/* Corner + icons */}
      <CornerPlus pos="top-left" open={open} />
      <CornerPlus pos="top-right" open={open} />
      <CornerPlus pos="bottom-left" open={open} />
      <CornerPlus pos="bottom-right" open={open} />

      {/* Header */}
      <div className="flex justify-between items-center select-none">
        <h3 className="text-lg text-zinc-800 dark:text-zinc-200">{q}</h3>

        <motion.div
          animate={{ rotate: open ? 180 : 0, scale: open ? 1.1 : 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 text-zinc-700 dark:text-zinc-300" />
        </motion.div>
      </div>

      {/* Animated Answer */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                opacity: { duration: 0.25, delay: 0.1 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.3, ease: "easeInOut" },
                opacity: { duration: 0.25 },
              },
            }}
            className="overflow-hidden"
          >
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="text-zinc-600 dark:text-zinc-400 mt-4 leading-relaxed"
            >
              {a}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function CornerPlus({ pos, open }: { pos: string; open: boolean }) {
  const base =
    "absolute w-4 h-4 text-zinc-600 dark:text-zinc-300 transition-transform duration-300";
  const positions: Record<string, string> = {
    "top-left": "-top-3 -left-3",
    "top-right": "-top-3 -right-3",
    "bottom-left": "-bottom-3 -left-3",
    "bottom-right": "-bottom-3 -right-3",
  };

  return (
    <Plus
      className={`${base} ${positions[pos]} ${
        open ? "rotate-90" : "rotate-0"
      }`}
    />
  );
}
