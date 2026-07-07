"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GridBackground } from "@/components/ui/GridBackground";
import { SITE } from "@/constants";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const STATS = [
  { label: "Years Shipping Production SaaS", value: "6+" },
  { label: "Languages in i18n Architecture", value: "7" },
  { label: "Records Processed via Web Workers", value: "5K+" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex items-center overflow-hidden pt-32 pb-16 sm:pb-20 sm:min-h-[100svh]"
    >
      <GridBackground />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex max-w-4xl flex-col gap-8"
        >
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-base-300">
              <Sparkles className="h-3.5 w-3.5 text-accent-400" />
              Available for select senior frontend roles
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-base-50 sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          >
            {SITE.headline.split(", ").map((part, i, arr) => (
              <span key={part}>
                {i === 0 ? (
                  <span className="bg-gradient-to-br from-white via-white to-base-300 bg-clip-text text-transparent">
                    {part}
                  </span>
                ) : (
                  <span className="text-base-400">{part}</span>
                )}
                {i < arr.length - 1 && ", "}
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-2xl text-balance text-lg leading-relaxed text-base-400 sm:text-xl"
          >
            {SITE.subheadline}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4">
            <Button href="#experience" icon={<ArrowRight className="h-4 w-4" />} size="lg">
              View my work
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              Get in touch
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
          className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-3"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-1.5 bg-base-950/90 px-6 py-6 backdrop-blur-xl"
            >
              <span className="font-mono text-2xl font-semibold text-white sm:text-3xl">
                {stat.value}
              </span>
              <span className="text-sm text-base-400">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
