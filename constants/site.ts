export const SITE = {
  name: "Maryam Arif",
  role: "Senior Frontend Engineer",
  location: "Lahore, Pakistan",
  yearsExperience: 6,
  email: "mariamarif998@gmail.com",
  headline:
    "Senior Frontend Engineer specializing in scaling SaaS, real-time architectures, and high-performance web systems.",
  subheadline:
    "Nearly 6 years shipping production-grade SaaS and enterprise platforms — from multi-language i18n architecture to real-time WebRTC pipelines and RBAC-guarded data systems that hold up under real load.",
  about:
    "Frontend Engineer with nearly 6 years of experience shipping scalable SaaS and enterprise applications. Driven by a pragmatic approach that treats frontend architecture as a core business driver. Thrives on building complex UI systems and real-time features that are as clean under the hood as they are seamless for the user.",
  education: {
    degree: "BS Software Engineering",
    school:
      "Punjab University College of Information and Technology, University of the Punjab",
    location: "Lahore",
    period: "10/2016 – 08/2020",
    gpa: "CGPA: 3.43",
  },
  socials: {
    // No public GitHub profile yet — add it back once there's a project to showcase.
    github: null as string | null,
    linkedin: "https://www.linkedin.com/in/maryam-arif-1317511b0/",
    email: "mailto:mariamarif998@gmail.com",
  },
  nav: [
    { label: "Work", href: "#experience" },
    { label: "Stack", href: "#stack" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
