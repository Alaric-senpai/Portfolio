// @ts-nocheck
import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Footer from '@/components/footer';
import Header from '@/components/header';

const dmSerif = DM_Serif_Display({
  variable: "--font-sans",
  weight: "400",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Kahuho Charles | Full-Stack Web & Mobile Developer in Makueni, Kenya",
    template: "%s | Kahuho Charles"
  },
  description:
    "Charles Kahuho (Charles Kahuho) is a full-stack developer in Makueni, Kenya, building web and mobile apps with Next.js, React Native, and Node.js.",
  keywords: [
    "Charles Kahuho",
    "Charles Kahuho",
    "web developer",
    "mobile developer",
    "Next.js",
    "React Native",
    "Node.js",
    "TypeScript",
    "full-stack",
    "cross-platform apps",
    "developer portfolio Makueni",
    "Kenya"
  ],
  authors: [{ name: "Charles Kahuho", url: "https://thecharles.tech" }],
  creator: "Charles Mbithi Kahuho",
  publisher: "Charles",
  metadataBase: new URL("https://thecharles.tech"),
  alternates: {
    canonical: "https://thecharles.tech",
  },
  openGraph: {
    type: "website",
    url: "https://thecharles.tech",
    title: "Charles Kahuho | Full-Stack Web & Mobile Developer in Makueni, Kenya",
    description:
      "Charles Kahuho (Charles Kahuho) is a full-stack developer in Makueni, Kenya, building web and mobile apps with Next.js, React Native, and Node.js.",
    siteName: "Charles Kahuho",
    locale: "en_US",
    images: [
      {
        url: "https://thecharles.tech/assets/projects/profile.png",
        width: 1200,
        height: 630,
        alt: "Charles Kahuho Portfolio - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    // site: "@devcharles", // if you have a Twitter handle
    // creator: "@devcharles",
    title: "Charles Kahuho | Full-Stack Web & Mobile Developer in Makueni, Kenya",
    description:
      "Charles Kahuho (Charles Kahuho) is a full-stack developer in Makueni, Kenya, building web and mobile apps with Next.js, React Native, and Node.js.",
    images: ["https://thecharles.tech/assets/projects/echoplain-base.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body
        className={`${dmSerif.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-body antialiased bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Charles Kahuho",
              url: "https://thecharles.tech",
              jobTitle: "Full-Stack Developer",
              address: {
                "@type": "PostalAddress",
                "addressLocality": "Makueni County",
                "addressCountry": "Kenya"
              },
              sameAs: [
                "https://github.com/alaric-senpai",
                "https://linkedin.com/in/charles-kahuho", 
                "https://twitter.com/devcharles"
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance"
              }
            }),
          }}
        />
      <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
