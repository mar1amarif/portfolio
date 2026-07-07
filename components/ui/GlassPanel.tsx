import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export const GlassPanel = forwardRef<HTMLDivElement, GlassPanelProps>(
  ({ className, hover = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl",
          "shadow-card",
          hover &&
            "transition-all duration-500 ease-out-expo hover:border-white/[0.14] hover:bg-white/[0.04]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassPanel.displayName = "GlassPanel";
