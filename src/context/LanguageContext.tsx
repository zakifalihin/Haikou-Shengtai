"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import {
  PAGES_TRANSLATIONS,
  type PagesDictionary,
} from "@/lib/pageTranslations";
import {
  TRANSLATIONS,
  type Dictionary,
  type Locale,
} from "@/lib/translations";

const STORAGE_KEY = "haikoushengtai-lang";

const HTML_LANG_MAP: Record<Locale, string> = {
  en: "en",
  zh: "zh-CN",
  id: "id",
};

interface LanguageContextValue {
  lang: Locale;
  setLang: (next: Locale) => void;
  t: Dictionary;
  pages: PagesDictionary;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isValidLocale(value: string | null): value is Locale {
  return value === "en" || value === "zh" || value === "id";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always initialize to "en" on SSR and initial hydration to avoid hydration mismatch
  const [lang, setLangState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (isValidLocale(saved) && saved !== "en") {
        // Hydrate persisted preference on client after initial mount
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLangState(saved);
        document.documentElement.lang = HTML_LANG_MAP[saved];
      }
    } catch {
      // Ignore storage access errors in restricted browsing contexts
    }
  }, []);

  const setLang = useCallback((next: Locale) => {
    setLangState(next);
    document.documentElement.lang = HTML_LANG_MAP[next];
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore storage access errors
    }
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        t: TRANSLATIONS[lang],
        pages: PAGES_TRANSLATIONS[lang],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
