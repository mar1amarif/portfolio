"use client";

import { useState, type FormEvent } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  CheckCircle2,
  Send,
  type LucideIcon,
} from "lucide-react";
import { SITE } from "@/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Reveal } from "@/components/ui/Reveal";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
}

const LINKS: ContactLink[] = [
  SITE.socials.github
    ? {
        label: "GitHub",
        value: "View repositories",
        href: SITE.socials.github,
        icon: Github,
      }
    : null,
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: SITE.socials.linkedin,
    icon: Linkedin,
  },
  {
    label: "Email",
    value: SITE.email,
    href: SITE.socials.email,
    icon: Mail,
  },
].filter((item): item is ContactLink => item !== null);

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Project inquiry from ${form.name || "your site"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `${SITE.socials.email}?subject=${subject}&body=${body}`;

    setStatus("sent");
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something durable."
          description="Open to senior frontend and platform-engineering roles, plus select high-scope freelance builds."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <GlassPanel className="p-8 sm:p-10">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-medium text-base-400">
                      Name
                    </label>
                    <Input
                      id="name"
                      required
                      placeholder="Jane Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-medium text-base-400">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-medium text-base-400">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell me a bit about the project or role..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="mt-2 self-start"
                  icon={status === "sent" ? <CheckCircle2 className="h-4 w-4" /> : <Send className="h-4 w-4" />}
                >
                  {status === "sent" ? "Opening your mail client…" : "Send message"}
                </Button>
              </form>
            </GlassPanel>
          </Reveal>

          <div className="flex flex-col gap-5 lg:col-span-2">
            {LINKS.map((link, index) => (
              <Reveal key={link.label} delay={0.08 + index * 0.06}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <GlassPanel
                    hover
                    className="flex items-center justify-between gap-4 p-6"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-300 transition-colors duration-300 group-hover:border-accent-400/40 group-hover:bg-accent-500/10">
                        <link.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-base-50">
                          {link.label}
                        </p>
                        <p className="text-xs text-base-500">{link.value}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-base-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-300" />
                  </GlassPanel>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
