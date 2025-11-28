import { Plus } from "lucide-react";

export function BorderButton({ title }: { title: string }) {
  return (
    <button
      className="
        relative group 
        px-6 py-3 sm:px-10 sm:py-4 
        border border-zinc-500/50 
        bg-transparent backdrop-blur-sm
        text-sm sm:text-base
        text-zinc-800 dark:text-zinc-200
        font-medium tracking-wide
        transition-all duration-300
        hover:border-zinc-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]
        w-fit
      "
    >
      {/* Top Left */}
      <Plus className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-3 h-3 sm:w-4 sm:h-4 text-zinc-600 dark:text-zinc-300 group-hover:rotate-90 transition-transform" />

      {/* Top Right */}
      <Plus className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-3 h-3 sm:w-4 sm:h-4 text-zinc-600 dark:text-zinc-300 group-hover:rotate-90 transition-transform" />

      {/* Bottom Left */}
      <Plus className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-3 h-3 sm:w-4 sm:h-4 text-zinc-600 dark:text-zinc-300 group-hover:-rotate-90 transition-transform" />

      {/* Bottom Right */}
      <Plus className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-3 h-3 sm:w-4 sm:h-4 text-zinc-600 dark:text-zinc-300 group-hover:-rotate-90 transition-transform" />

      {title}
    </button>
  );
}
