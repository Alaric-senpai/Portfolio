import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Footer from '@/components/footer';
import Header from '@/components/header';

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans", /* Display font mapping */
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DevCharles | Full-Stack Web & Mobile Developer in Makueni, Kenya",
    template: "%s | DevCharles"
  },
  description:
    "Charles Kahuho (DevCharles) is a full-stack developer in Makueni, Kenya, building web and mobile apps with Next.js, React Native, and Node.js.",
  keywords: [
    "DevCharles",
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
  authors: [{ name: "Charles Kahuho", url: "https://devcharles.me" }],
  creator: "Charles Kahuho",
  publisher: "DevCharles",
  metadataBase: new URL("https://devcharles.me"),
  alternates: {
    canonical: "https://devcharles.me",
  },
  openGraph: {
    type: "website",
    url: "https://devcharles.me",
    title: "DevCharles | Full-Stack Web & Mobile Developer in Makueni, Kenya",
    description:
      "Charles Kahuho (DevCharles) is a full-stack developer in Makueni, Kenya, building web and mobile apps with Next.js, React Native, and Node.js.",
    siteName: "DevCharles",
    locale: "en_US",
    images: [
      {
        url: "https://devcharles.me/assets/projects/echoplain-base.png",
        width: 1200,
        height: 630,
        alt: "DevCharles Portfolio - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    // site: "@devcharles", // if you have a Twitter handle
    // creator: "@devcharles",
    title: "DevCharles | Full-Stack Web & Mobile Developer in Makueni, Kenya",
    description:
      "Charles Kahuho (DevCharles) is a full-stack developer in Makueni, Kenya, building web and mobile apps with Next.js, React Native, and Node.js.",
    images: ["https://devcharles.me/assets/projects/echoplain-base.png"],
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
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body antialiased bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Charles Kahuho",
              url: "https://devcharles.me",
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
