import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sanket.aryanshrivastava.dev"),
  title: "Sanket Docs — Indian Railways Automatic Block Planning & Corridor Operations",
  description:
    "Comprehensive technical documentation for Sanket: Smart Indian Railways Traffic, AI-Powered Block Planning Engine, Monolith Backend, and Corridor Cockpit.",
  keywords: [
    "Sanket",
    "Indian Railways",
    "Automatic Block Planning",
    "Train Traffic Management",
    "OR-Tools CP-SAT",
    "SIH 2026",
    "Corridor Cockpit",
  ],
  authors: [{ name: "Aryan Shrivastava & Team" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Sanket Docs — Indian Railways Block Planning Engine",
    description:
      "Full technical docs: In-memory CP-SAT block scheduling, live train telemetry, Monolith NestJS architecture, and real-time operations cockpit.",
    siteName: "Sanket Documentation",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sanket — Indian Railways Automatic Block Planning & Operations",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanket Docs — Indian Railways Block Planning Engine",
    description:
      "Comprehensive technical documentation for Sanket Smart Indian Railways Traffic & Corridor Operations.",
    images: ["/og-image.png"],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth overflow-x-hidden">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-full flex flex-col bg-brand-tertiary text-brand-secondary antialiased overflow-x-hidden w-full max-w-full selection:bg-brand-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
