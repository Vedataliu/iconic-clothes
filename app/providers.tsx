"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { Locale } from "./translations";

type Theme = "dark" | "light";

const THEME_KEY = "iconic-clothes-theme";
const LANG_KEY = "iconic-clothes-lang";

type ThemeContextValue = { theme: Theme; setTheme: (t: Theme) => void; toggleTheme: () => void };
type LanguageContextValue = { locale: Locale; setLocale: (l: Locale) => void; toggleLocale: () => void };

const ThemeContext = createContext<ThemeContextValue | null>(null);
const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem(THEME_KEY) as Theme | null;
  return stored === "light" || stored === "dark" ? stored : "dark";
}

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "sq";
  const stored = localStorage.getItem(LANG_KEY) as Locale | null;
  return stored === "en" || stored === "sq" ? stored : "sq";
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [locale, setLocaleState] = useState<Locale>("sq");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setThemeState(getInitialTheme());
    setLocaleState(getInitialLocale());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    root.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme, mounted]);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(LANG_KEY, locale);
    document.documentElement.lang = locale === "sq" ? "sq" : "en";
  }, [locale, mounted]);

  const setTheme = useCallback((t: Theme) => setThemeState(t), []);
  const toggleTheme = useCallback(() => setThemeState((prev) => (prev === "dark" ? "light" : "dark")), []);
  const setLocale = useCallback((l: Locale) => setLocaleState(l), []);
  const toggleLocale = useCallback(() => setLocaleState((prev) => (prev === "sq" ? "en" : "sq")), []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <LanguageContext.Provider value={{ locale, setLocale, toggleLocale }}>
        {children}
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within Providers");
  return ctx;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within Providers");
  return ctx;
}
