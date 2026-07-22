"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/personal";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-text-primary font-semibold text-lg hover:text-accent transition-colors">
          <span className="font-mono text-accent">~/</span>maciejbledowski
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === item.href ? "text-accent" : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-text-secondary hover:text-text-primary transition-colors"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
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
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
