// src/app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Define fonts with local imports and variables
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap", // Adds font-display to improve performance
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap", // Adds font-display to improve performance
});

export const metadata: Metadata = {
  title: "SellCRE.ai - Accelerate Real Estate Sales with AI",
  description:
    "Create beautiful Commercial Real Estate Offering Memorandums and Ads in minutes with our AI-powered platform.",
  openGraph: {
    title: "SellCRE.ai",
    description: "Create and manage real estate listings with ease.",
    url: "https://sellcre.ai",
    siteName: "SellCRE.ai",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SellCRE.ai - AI-powered real estate solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@sellcre",
    title: "SellCRE.ai",
    description: "Create and manage real estate listings with ease.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
