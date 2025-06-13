import { Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function Logo({ className, size = "md", showText = true }: LogoProps) {
  const iconSize = {
    sm: 20,
    md: 24,
    lg: 32,
  }[size];

  const textClass = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  }[size];

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative">
        <Terminal
          size={iconSize}
          className="text-white relative z-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-400 rounded-full blur-[8px] opacity-60 scale-125" />
      </div>
      {showText && (
        <span className={cn("font-bold tracking-tighter", textClass)}>
          vibe.rodeo
        </span>
      )}
    </div>
  );
}