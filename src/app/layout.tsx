import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://opticore.solution"),
  title: {
    default: "Opticore Solutions | Smart Digital Solutions",
    template: "%s | Opticore Solutions",
  },
  description:
    "Opticore Solutions builds premium web development, business automation, inventory, CRM/SFA, billing, hosting, and API integration solutions.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/brand/op-core-logo.png", type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple: "/brand/op-core-logo.png",
  },
  keywords: [
    "Opticore Solutions",
    "business automation",
    "inventory management software",
    "CRM",
    "SFA",
    "billing software",
    "web development",
  ],
  openGraph: {
    title: "Opticore Solutions",
    description: "Building smart digital solutions for modern businesses.",
    siteName: "Opticore Solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
