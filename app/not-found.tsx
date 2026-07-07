import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { GridBackground } from "@/components/ui/GridBackground";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-base-950 px-6">
      <GridBackground />
      <div className="relative flex flex-col items-center gap-6 text-center">
        <span className="font-mono text-sm uppercase tracking-[0.3em] text-accent-400">
          404
        </span>
        <h1 className="text-3xl font-semibold text-base-50 sm:text-4xl">
          This page went missing.
        </h1>
        <p className="max-w-md text-base-400">
          The route you&apos;re looking for doesn&apos;t exist, or has moved.
        </p>
        <Link
          href="/"
          className="mt-2 inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-base-100 transition-all duration-300 hover:border-white/25 hover:bg-white/5"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </div>
    </main>
  );
}
