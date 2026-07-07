"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/constants";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useActiveSection } from "@/hooks/useActiveSection";

const SECTION_IDS = SITE.nav.map((item) => item.href.replace("#", ""));

export function Navbar() {
  const { scrolled, progress } = useScrollProgress();
  const activeId = useActiveSection(SECTION_IDS);
  const [open, setOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-6"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <nav
          aria-label="Primary"
          className={cn(
            "flex w-full items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-500",
            scrolled
              ? "border-white/10 bg-base-950/70 shadow-card backdrop-blur-xl"
              : "border-transparent bg-transparent"
          )}
        >
          <a
            href="#top"
            onClick={(e) => handleNavClick(e, "#top")}
            className="group flex items-center gap-2.5"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 text-sm font-semibold text-white shadow-glow transition-transform duration-300 group-hover:scale-105">
              {SITE.name[0]}
            </span>
            <span className="hidden text-sm font-semibold tracking-tight text-base-50 sm:inline">
              {SITE.name}
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {SITE.nav.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeId === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                    isActive
                      ? "text-white"
                      : "text-base-400 hover:text-base-100"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/[0.07]"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </a>
              );
            })}
          </div>

          <div className="hidden md:block">
            <a
              href={SITE.socials.email}
              className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-base-100 transition-all duration-300 hover:border-white/25 hover:bg-white/5"
            >
              Let&apos;s talk
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-full text-base-200 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-accent-500 to-emerald-glow transition-[width] duration-150"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            id="mobile-menu"
            className="mx-6 mt-3 flex flex-col gap-1 rounded-2xl border border-white/10 bg-base-950/95 p-3 backdrop-blur-xl md:hidden"
          >
            {SITE.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-base-200 transition-colors hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href={SITE.socials.email}
              className="mt-1 rounded-xl bg-white/5 px-4 py-3 text-sm font-medium text-white"
            >
              Let&apos;s talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
