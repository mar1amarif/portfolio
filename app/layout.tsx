import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { SITE } from "@/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500", "600"],
});

const siteUrl = "https://portfolio-nine-swart-cyrbo2rzdi.vercel.app";
const title = `${SITE.name} — ${SITE.role}`;
const description = SITE.headline;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s — ${SITE.name}`,
  },
  description,
  keywords: [
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "SaaS Engineer",
    "TypeScript",
    "WebRTC",
    "Web3",
    SITE.name,
  ],
  authors: [{ name: SITE.name, url: siteUrl }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  jobTitle: SITE.role,
  description: SITE.headline,
  url: siteUrl,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.location,
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: SITE.education.school,
  },
  sameAs: [SITE.socials.linkedin, SITE.socials.github].filter(
    (url): url is string => Boolean(url)
  ),
};

export const viewport: Viewport = {
  themeColor: "#050507",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-base-950 font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}
