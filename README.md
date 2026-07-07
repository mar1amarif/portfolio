# Personal Portfolio

A hyper-polished personal portfolio site built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- **Next.js 14** (App Router, RSC)
- **TypeScript** (strict mode)
- **Tailwind CSS** for styling
- **Framer Motion** for scroll reveals and micro-interactions
- **Lucide React** for icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run the TypeScript compiler in check-only mode |

## Editing Content

All copy lives in `/constants` so you can update it without touching component code:

- `constants/site.ts` — name, headline, bio, education, social links, nav
- `constants/experience.ts` — companies and nested projects
- `constants/skills.ts` — tech stack categories

Before deploying, update the placeholder values in `constants/site.ts` (name, email, GitHub/LinkedIn URLs) and the `siteUrl` in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts`.

## Project Structure

```
app/                  Routes, layout, metadata, global styles
components/ui/        Primitive, reusable components (Button, Badge, GlassPanel, etc.)
components/sections/  Page-level layout blocks (Hero, Experience, TechStack, About, Contact)
hooks/                Shared interaction hooks (scroll spy, scroll progress, mouse position)
constants/            All static content/data
lib/                  Shared utilities
```

## Deployment

This project deploys to Vercel or Netlify with zero configuration:

```bash
npm run build
```

### Vercel

Push to a Git repository and import it at [vercel.com/new](https://vercel.com/new) — no custom build settings required.

### Netlify

Set the build command to `npm run build` and the publish directory to `.next` (or use the official [Next.js Runtime](https://docs.netlify.com/frameworks/next-js/overview/) plugin, which is auto-detected).
