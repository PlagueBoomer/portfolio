"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/personal";
import { useLanguage } from "@/context/LanguageContext";
import ThemeSwitcher from "./ThemeSwitcher";
import Terminal from "./Terminal";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-text-primary font-semibold text-lg hover:text-accent transition-colors">
            <span className="font-mono text-accent">~/</span>maciejbledowski
          </Link>

        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    pathname === item.href ? "text-accent" : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {t(item.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 ml-4 pl-4 border-l border-border">
            <button
              onClick={() => setTerminalOpen(true)}
              className="p-2 rounded-lg border border-border text-text-secondary hover:text-accent hover:border-accent transition-colors duration-200"
              title="Open terminal"
              aria-label="Open terminal"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="4 17 10 11 4 5" />
                <line x1="12" y1="19" x2="20" y2="19" />
              </svg>
            </button>
            <ThemeSwitcher />
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setTerminalOpen(true)}
            className="p-2 rounded-lg border border-border text-text-secondary hover:text-accent hover:border-accent transition-colors duration-200"
            title="Open terminal"
            aria-label="Open terminal"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="4 17 10 11 4 5" />
              <line x1="12" y1="19" x2="20" y2="19" />
            </svg>
          </button>
          <ThemeSwitcher />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-text-secondary hover:text-text-primary transition-colors p-1"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-surface border-b border-border animate-fade-in">
          <ul className="px-6 py-4 space-y-3">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-sm font-medium py-2 transition-colors ${
                    pathname === item.href ? "text-accent" : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {t(item.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>

      {terminalOpen && <Terminal onClose={() => setTerminalOpen(false)} />}
    </>
  );
}
