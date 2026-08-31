"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import type { Content, Lang } from "./content";
import { content as enContent } from "./content.en";
import { content as taContent } from "./content.ta";

const STORAGE_KEY = "retirement-lang";

const contentByLang: Record<Lang, Content> = {
  en: enContent,
  ta: taContent,
};

interface LanguageContextValue {
  lang: Lang | null;
  setLang: (lang: Lang) => void;
  content: Content;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang | null>(null);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      stored = null;
    }
    if (stored === "en" || stored === "ta") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLangState(stored);
    }
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore storage failures (private browsing, etc.)
    }
  }, []);

  const active = lang ?? "en";

  return (
    <LanguageContext.Provider value={{ lang, setLang, content: contentByLang[active] }}>
      {children}
    </LanguageContext.Provider>
  );
}

function useLanguageContext() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}

export function useLanguage() {
  const { lang, setLang } = useLanguageContext();
  return { lang, setLang };
}

export function useContent(): Content {
  return useLanguageContext().content;
}
