"use client";

import React, { createContext, useContext, useCallback } from "react";
import { translations as en } from "@/i18n/en";

interface LanguageContextType {
  locale: "en";
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const t = useCallback((key: string): string => {
    return en[key] ?? key;
  }, []);

  return (
    <LanguageContext.Provider value={{ locale: "en", t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
