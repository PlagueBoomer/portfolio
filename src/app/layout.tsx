import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { personalInfo } from "@/data/personal";

export const metadata: Metadata = {
  title: `${personalInfo.displayName} | ${personalInfo.role}`,
  description: `${personalInfo.displayName} - ${personalInfo.role}. ${personalInfo.tagline}`,
  keywords: ["IT Support", "Linux", "Homelab", "Proxmox", "Networking", "Docker", "Portfolio"],
  authors: [{ name: personalInfo.displayName }],
  openGraph: {
    title: `${personalInfo.displayName} | ${personalInfo.role}`,
    description: `${personalInfo.role}. ${personalInfo.tagline}`,
    url: "https://maciejbledowski.pl",
    siteName: personalInfo.displayName,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
