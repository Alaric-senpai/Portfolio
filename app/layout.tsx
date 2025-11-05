import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from '@/components/footer';
import Header from '@/components/header';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DevCharles | Full-Stack Web & Mobile Developer",
    template: "%s | DevCharles"
  },
  description:
    "Portfolio of Charles Kahuho (DevCharles) — Full-stack web & mobile developer specializing in Next.js, React Native, Appwrite, and cross-platform solutions. Explore projects, case studies, and insights.",
  keywords: [
    "DevCharles",
    "Charles Kahuho",
    "web developer",
    "mobile developer",
    "Next.js",
    "React Native",
    "Appwrite",
    "TypeScript",
    "full-stack",
    "cross-platform apps",
    "developer portfolio"
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
    title: "DevCharles | Full-Stack Web & Mobile Developer",
    description:
      "Explore the projects and portfolio of Charles Kahuho (DevCharles). Building modern, scalable apps with Next.js, React Native, and Appwrite.",
    siteName: "DevCharles",
    locale: "en_US",
    images: [
      {
        url: "https://devcharles.me/profile.ppg",
        width: 1200,
        height: 630,
        alt: "DevCharles Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    // site: "@devcharles", // if you have a Twitter handle
    // creator: "@devcharles",
    title: "DevCharles | Full-Stack Web & Mobile Developer",
    description:
      "Building modern web & mobile experiences with Next.js, React Native & Appwrite.",
    images: ["https://devcharles.me/profile.png"],
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-void-900 via-midnight-900 to-shadow-900 `}
      >
      <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
