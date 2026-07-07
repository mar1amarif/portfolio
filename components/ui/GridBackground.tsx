"use client";

import { motion } from "framer-motion";

export function GridBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_10%,transparent_75%)]" />

      <motion.div
        className="absolute -top-40 left-1/2 h-[560px] w-[860px] -translate-x-1/2 rounded-full bg-accent-500/20 blur-[120px]"
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute right-[8%] top-[18%] h-64 w-64 rounded-full bg-emerald-glow/10 blur-[100px]"
        animate={{ opacity: [0.3, 0.55, 0.3], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-[0.03]" />

      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-base-950 to-transparent" />
    </div>
  );
}
