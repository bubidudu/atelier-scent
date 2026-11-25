"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  type ReactNode,
} from "react";
import { type Locale, type Localized } from "@/data/types";
import { useStoredLocale } from "./useStoredLocale";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  /** Resolve a bilingual value against the current locale. */
  t: <T>(value: Localized<T>) => T;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useStoredLocale();

  const toggleLocale = useCallback(() => {
    setLocale(locale === "zh-HK" ? "en" : "zh-HK");
  }, [locale, setLocale]);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale,
      toggleLocale,
      t: <T,>(value: Localized<T>) =>
        locale === "zh-HK" ? value.zhHK : value.en,
    }),
    [locale, setLocale, toggleLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
