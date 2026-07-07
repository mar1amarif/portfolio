import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://portfolio-nine-swart-cyrbo2rzdi.vercel.app/sitemap.xml",
  };
}
