export interface SkillCategory {
  title: string;
  description: string;
  icon: "frontend" | "data" | "protocols" | "optimization" | "tooling";
  skills: string[];
}

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend Core",
    description: "Component architecture across every major framework.",
    icon: "frontend",
    skills: [
      "React.js",
      "Next.js",
      "Vue.js",
      "Angular",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5 / CSS3 / SCSS",
    ],
  },
  {
    title: "State & Data",
    description: "Predictable state trees at enterprise scale.",
    icon: "data",
    skills: [
      "Redux Toolkit",
      "Context API",
      "State Tree Optimization",
      "Web Workers",
      "SQL",
      "JSON Data Structures",
    ],
  },
  {
    title: "Protocols & Integrations",
    description: "Real-time and decentralized system integrations.",
    icon: "protocols",
    skills: [
      "WebRTC (Daily.js)",
      "Web3.js",
      "RESTful APIs",
      "WebSockets",
      "Multi-chain Wallets",
    ],
  },
  {
    title: "Optimization",
    description: "Systems tuned for crawlability and scale.",
    icon: "optimization",
    skills: [
      "Technical SEO",
      "JSON-LD Schema",
      "Component-Driven Development",
      "System Localization (i18n)",
      "Open Graph Metadata",
    ],
  },
  {
    title: "Tooling & Workflow",
    description: "The processes and platforms behind shipping fast.",
    icon: "tooling",
    skills: [
      "Git",
      "GitHub Actions",
      "Agile / Scrum",
      "Material UI",
      "Styled Components",
      "AI-assisted Dev (Cursor, Lovable)",
    ],
  },
];
