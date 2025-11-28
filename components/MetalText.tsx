import { Playwrite_DE_SAS } from "next/font/google";
import React from "react";

const font = Playwrite_DE_SAS({
  weight: ["400"],
});

interface MetalTextProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
}

export function MetalText({ children, size = "md" }: MetalTextProps) {
  const sizeClasses = {
    sm: "text-xs sm:text-sm",
    md: "text-base sm:text-xl",
    lg: "text-xl sm:text-2xl",
    xl: "text-3xl sm:text-5xl",
  };

  return (
    <span
      className={`
        ${font.className}
        ${sizeClasses[size]}
        leading-tight 
        bg-gradient-to-r
        from-[#dcdcdc] via-[#ffffff] to-[#4c4c4c]
        dark:from-[#ffffff] dark:via-[#9f9f9f] dark:to-[#2a2a2a]
        bg-clip-text text-transparent
        drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]
        dark:drop-shadow-[0_1px_1px_rgba(255,255,255,0.2)]
      `}
    >
      {children}
    </span>
  );
}
