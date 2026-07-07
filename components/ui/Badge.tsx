import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "accent";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide",
        variant === "default" &&
          "border-white/10 bg-white/[0.03] text-base-300",
        variant === "accent" &&
          "border-accent-500/30 bg-accent-500/10 text-accent-200",
        className
      )}
    >
      {children}
    </span>
  );
}
