"use client";

import {
  Layers,
  Database,
  Radio,
  Gauge,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { SKILLS, type SkillCategory } from "@/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Reveal } from "@/components/ui/Reveal";

const ICONS: Record<SkillCategory["icon"], LucideIcon> = {
  frontend: Layers,
  data: Database,
  protocols: Radio,
  optimization: Gauge,
  tooling: Wrench,
};

export function TechStack() {
  return (
    <section id="stack" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools that carry real production weight."
          description="Not a buzzword list — every category below maps to shipped, load-bearing code across the platforms above."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((category, index) => {
            const Icon = ICONS[category.icon];
            const isLast = index === SKILLS.length - 1 && SKILLS.length % 3 !== 0;
            return (
              <Reveal
                key={category.title}
                delay={index * 0.07}
                className={isLast ? "sm:col-span-2 lg:col-span-1" : undefined}
              >
                <GlassPanel
                  hover
                  className="group flex h-full flex-col gap-5 p-6 sm:p-7"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-300 transition-colors duration-300 group-hover:border-accent-400/40 group-hover:bg-accent-500/10">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base-50">
                        {category.title}
                      </h3>
                      <p className="text-xs text-base-500">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-2.5 py-1.5 text-xs font-medium text-base-300 transition-colors duration-300 group-hover:border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </GlassPanel>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
