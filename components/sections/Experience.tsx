"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { EXPERIENCE } from "@/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function Experience() {
  const [activeId, setActiveId] = useState(EXPERIENCE[0]?.id ?? "");
  const active = EXPERIENCE.find((c) => c.id === activeId) ?? EXPERIENCE[0];

  if (!active) return null;

  return (
    <section id="experience" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where the systems got built."
          description="Six years across SaaS, real-time, and enterprise products — each role nested with the projects that shaped it."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr]">
          <div
            role="tablist"
            aria-label="Companies"
            className="relative flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
          >
            <div className="absolute left-0 top-0 hidden h-full w-px bg-white/[0.07] lg:block" />
            {EXPERIENCE.map((entry) => {
              const isActive = entry.id === activeId;
              return (
                <button
                  key={entry.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${entry.id}`}
                  id={`tab-${entry.id}`}
                  onClick={() => setActiveId(entry.id)}
                  className={cn(
                    "relative shrink-0 rounded-xl px-5 py-4 text-left transition-all duration-300 lg:pl-8",
                    isActive
                      ? "bg-white/[0.04] text-white"
                      : "text-base-400 hover:bg-white/[0.02] hover:text-base-200"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="experience-indicator"
                      className="absolute left-0 top-1/2 hidden h-6 w-px -translate-y-1/2 bg-accent-400 lg:block"
                      style={{ boxShadow: "0 0 12px 1px rgba(99,102,241,0.8)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="block whitespace-nowrap font-semibold tracking-tight sm:whitespace-normal">
                    {entry.company}
                  </span>
                  <span className="mt-1 block text-xs text-base-500">
                    {entry.period}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                role="tabpanel"
                id={`panel-${active.id}`}
                aria-labelledby={`tab-${active.id}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="mb-8 flex flex-col gap-3 border-b border-white/[0.06] pb-8 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white sm:text-2xl">
                      {active.role}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-base-400">
                      {active.summary}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-col gap-2 text-sm text-base-400 sm:items-end">
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase className="h-3.5 w-3.5" />
                      {active.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      {active.location}
                    </span>
                  </div>
                </div>

                <div className="columns-1 gap-5 md:columns-2">
                  {active.projects.map((project, index) => (
                    <ProjectCard
                      key={project.name}
                      project={project}
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
