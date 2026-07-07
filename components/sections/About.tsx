"use client";

import { GraduationCap, MapPin, Sparkle } from "lucide-react";
import { SITE } from "@/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Reveal } from "@/components/ui/Reveal";

const PRINCIPLES = [
  {
    title: "Architecture as leverage",
    body: "Frontend structure is a business lever, not an afterthought — every hook, boundary, and route is designed to reduce future cost.",
  },
  {
    title: "Real-time, done right",
    body: "Connection state, session stability, and reactive updates are treated as first-class problems, not edge cases.",
  },
  {
    title: "Clean under the hood",
    body: "Interfaces that feel effortless to users are backed by state trees and data flows that are just as effortless to maintain.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title="The engineer behind the systems."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <GlassPanel className="flex h-full flex-col justify-between gap-8 p-8 sm:p-10">
              <div className="flex flex-col gap-6">
                <p className="text-balance text-xl leading-relaxed text-base-200 sm:text-2xl">
                  {SITE.about}
                </p>
              </div>

              <div className="flex flex-wrap gap-6 border-t border-white/[0.06] pt-6 text-sm text-base-400">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent-400" />
                  {SITE.location}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Sparkle className="h-4 w-4 text-accent-400" />
                  {SITE.yearsExperience}+ years in production
                </span>
              </div>
            </GlassPanel>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-2">
            <GlassPanel className="flex h-full flex-col gap-5 p-8 sm:p-10">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-300">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-base-50">
                  {SITE.education.degree}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-base-400">
                  {SITE.education.school}
                </p>
              </div>
              <div className="mt-auto flex flex-col gap-1 border-t border-white/[0.06] pt-5 text-sm text-base-500">
                <span>{SITE.education.period}</span>
                <span>{SITE.education.gpa}</span>
              </div>
            </GlassPanel>
          </Reveal>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {PRINCIPLES.map((principle, index) => (
            <Reveal key={principle.title} delay={0.12 + index * 0.06}>
              <GlassPanel hover className="flex h-full flex-col gap-3 p-6">
                <span className="font-mono text-xs text-accent-400">
                  0{index + 1}
                </span>
                <h4 className="font-semibold text-base-50">
                  {principle.title}
                </h4>
                <p className="text-sm leading-relaxed text-base-400">
                  {principle.body}
                </p>
              </GlassPanel>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
