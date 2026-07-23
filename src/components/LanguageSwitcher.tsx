"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  const toggle = () => {
    setLocale(locale === "en" ? "pl" : "en");
  };

  return (
    <button
      onClick={toggle}
      aria-label={`Switch language to ${locale === "en" ? "Polish" : "English"}`}
      className="px-2.5 py-1.5 rounded-lg border border-border text-xs font-medium
                 text-text-secondary hover:text-accent hover:border-accent/30
                 transition-colors duration-200 uppercase tracking-wide"
    >
      {locale === "en" ? "PL" : "EN"}
    </button>
  );
}
