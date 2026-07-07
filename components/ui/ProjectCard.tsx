"use client";

import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { GlassPanel } from "./GlassPanel";
import { Badge } from "./Badge";
import { Reveal } from "./Reveal";
import type { Project } from "@/constants/experience";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Reveal
      delay={index * 0.08}
      className="mb-5 block break-inside-avoid-column"
    >
      <GlassPanel hover className="group flex flex-col gap-5 p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h4 className="text-lg font-semibold text-base-50">
              {project.name}
            </h4>
            <p className="mt-1 text-sm text-base-400">{project.description}</p>
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.name}`}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-base-300 transition-all duration-300 group-hover:border-accent-400/40 group-hover:text-accent-300 hover:bg-white/5"
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>

        <ul className="flex flex-col gap-3">
          {project.highlights.map((point) => (
            <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-base-300">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-400/70" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 border-t border-white/[0.06] pt-4">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </GlassPanel>
    </Reveal>
  );
}
