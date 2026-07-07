import { type TextareaHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "w-full resize-none rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-base-50",
        "placeholder:text-base-500 transition-all duration-300",
        "focus:border-accent-400/50 focus:bg-white/[0.04] focus:outline-none focus:ring-4 focus:ring-accent-500/10",
        className
      )}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";
