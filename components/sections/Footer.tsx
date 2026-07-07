import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react";
import { SITE } from "@/constants";

interface SocialIcon {
  icon: LucideIcon;
  href: string;
  label: string;
}

const SOCIAL_ICONS: SocialIcon[] = [
  SITE.socials.github
    ? { icon: Github, href: SITE.socials.github, label: "GitHub" }
    : null,
  { icon: Linkedin, href: SITE.socials.linkedin, label: "LinkedIn" },
  { icon: Mail, href: SITE.socials.email, label: "Email" },
].filter((item): item is SocialIcon => item !== null);

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-sm font-semibold text-base-100">
            {SITE.name}
          </span>
          <span className="text-xs text-base-500">
            {SITE.role} · {SITE.location}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {SOCIAL_ICONS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-base-400 transition-all duration-300 hover:border-accent-400/40 hover:text-accent-300"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <p className="text-xs text-base-500">
          &copy; {new Date().getFullYear()} {SITE.name}. Built with Next.js &amp; Framer Motion.
        </p>
      </div>
    </footer>
  );
}
