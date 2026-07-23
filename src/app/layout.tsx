import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Maciej Błędowski | IT | Help Desk | System Administration",
  description: "Maciej Błędowski - IT Support Specialist. Portfolio, projects, homelab, and career.",
  keywords: ["IT Support", "Linux", "Homelab", "Proxmox", "Networking", "Docker", "Portfolio"],
  authors: [{ name: "Maciej Błędowski" }],
  openGraph: {
    title: "Maciej Błędowski | IT Support",
    description: "IT | Help Desk | System Administration",
    url: "https://maciejbledowski.pl",
    siteName: "Maciej Błędowski",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            var theme = localStorage.getItem('theme');
            var isDark = theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches) || theme === null;
            if (theme === 'light') isDark = false;
            if (isDark) document.documentElement.classList.add('dark');
          })();
        `}} />
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
