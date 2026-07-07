export interface Project {
  name: string;
  description: string;
  link?: string;
  highlights: string[];
  tags: string[];
}

export interface Company {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  projects: Project[];
}

export const EXPERIENCE: Company[] = [
  {
    id: "codefulcrum",
    company: "Codefulcrum",
    role: "Senior Software Engineer",
    period: "06/2022 — Present",
    location: "Lahore, Pakistan",
    summary:
      "Primary frontend engineer across a portfolio of SaaS, real-time, and enterprise products — from greenfield builds to platform-wide technical SEO overhauls.",
    projects: [
      {
        name: "AI-U",
        description:
          "AI-Powered Product Discovery & Management Platform",
        link: "https://ai-u.com/en",
        tags: ["React", "Next.js", "i18n", "Technical SEO", "JSON-LD"],
        highlights: [
          "Led frontend development as the primary engineer, taking the platform from greenfield setup to a production-ready multi-language SaaS application.",
          "Built an internationalization (i18n) system supporting 7 languages with lazy-loaded translation splitting to optimize bundle size and performance.",
          "Collaborated with backend engineers to design API contracts and JSON structures, improving data handling efficiency on the client side.",
          "Implemented technical SEO foundations including localized routing (/en), metadata handling, and structured JSON-LD schema support.",
          "Developed a multi-tier category management interface using React, custom hooks, and Tailwind CSS, supporting real-time filtering across complex datasets.",
        ],
      },
      {
        name: "HiringAI",
        description: "AI Business Agents & Recruitment Platform",
        link: "https://manxmachina.com/",
        tags: ["Daily.js", "WebRTC", "Real-time", "Kanban"],
        highlights: [
          "Built real-time video interview workflows using Daily.js/WebRTC, handling connection state management and session stability.",
          "Developed a drag-and-drop Kanban board for candidate pipeline tracking and recruitment workflow management.",
          "Implemented scheduling and calendar coordination features with multi-timezone support for global users.",
        ],
      },
      {
        name: "Flux & OneValley",
        description: "Leave Management & Entrepreneurship Platforms",
        tags: ["Vue.js", "White-label", "Dynamic Theming"],
        highlights: [
          "Developed responsive enterprise dashboards using Vue.js for leave management and platform workflows.",
          "Built reusable white-label Vue components to support faster delivery across multiple client implementations.",
          "Implemented runtime styling mechanisms enabling dynamic branding and layout customization without redeployment.",
        ],
      },
      {
        name: "Trackhero & Strada.AI",
        description: "Fleet & Property Management Systems",
        tags: ["Web Workers", "RBAC", "Maps", "Real-time"],
        highlights: [
          "Built real-time fleet tracking interfaces with map integrations and optimized polling strategies for performance efficiency.",
          "Implemented background data processing using Web Workers to handle large batch uploads (5,000+ records) without UI blocking.",
          "Developed RBAC-based frontend guards to enforce secure access control across multi-tenant systems.",
        ],
      },
      {
        name: "Codefulcrum Corporate Platform",
        description: "Corporate Marketing Platform",
        link: "https://www.codefulcrum.com",
        tags: ["Webflow", "Technical SEO", "Open Graph"],
        highlights: [
          "Architected technical SEO and UX improvements by restructuring URL hierarchies, optimizing navigation flow for crawlability, and injecting dynamic JSON-LD and Open Graph metadata across CMS-driven pages.",
          "Enhanced user engagement by implementing smooth, interactive Webflow animations optimized for high-performance rendering.",
        ],
      },
    ],
  },
  {
    id: "hyfatech",
    company: "Hyfatech",
    role: "Software Engineer",
    period: "10/2020 — 06/2022",
    location: "Lahore, Pakistan",
    summary:
      "Built Web3 and healthcare-grade platforms, focused on reactive state architecture and precise cross-region data handling.",
    projects: [
      {
        name: "Ferrum Gateway",
        description: "DeFi Banking-as-a-Service Platform",
        tags: ["Web3.js", "Web3-React", "Multi-chain"],
        highlights: [
          "Developed Web3-based wallet connection flows using Web3-React for multi-chain interactions.",
          "Built real-time UI layers for staking and reward calculations with reactive state updates.",
        ],
      },
      {
        name: "MNCAR & VirtualMD",
        description: "Commercial Real Estate & Telehealth Platforms",
        tags: ["Redux", "Selectors", "Timezone Logic"],
        highlights: [
          "Optimized Redux state management using selectors to reduce unnecessary re-renders in high-density listing interfaces.",
          "Implemented timezone normalization logic to ensure accurate cross-region appointment scheduling in healthcare workflows.",
        ],
      },
    ],
  },
];
