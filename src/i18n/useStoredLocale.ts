"use client";

import { useCallback, useSyncExternalStore } from "react";
import { DEFAULT_LOCALE, type Locale } from "@/data/types";

const STORAGE_KEY = "atelier-scent-locale";
const CHANGE_EVENT = "atelier-scent:locale-change";

function isLocale(value: unknown): value is Locale {
  return value === "zh-HK" || value === "en";
}

function readStoredLocale(): Locale {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    // Storage unavailable (private mode) — fall back to the default locale.
  }
  return DEFAULT_LOCALE;
}

function subscribe(onStoreChange: () => void): () => void {
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) onStoreChange();
  };
  window.addEventListener("storage", onStorage);
  window.addEventListener(CHANGE_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(CHANGE_EVENT, onStoreChange);
  };
}

/** No-op subscription used to detect when hydration has completed. */
function subscribeNothing(): () => void {
  return () => {};
}

export function useStoredLocale(): [Locale, (next: Locale) => void] {
  // `false` during server render and the hydration pass, `true` afterwards.
  // Reading the stored locale only after hydration keeps the first client
  // render identical to the server markup, avoiding a hydration mismatch.
  const hydrated = useSyncExternalStore(
    subscribeNothing,
    () => true,
    () => false,
  );

  const locale = useSyncExternalStore(
    subscribe,
    () => (hydrated ? readStoredLocale() : DEFAULT_LOCALE),
    () => DEFAULT_LOCALE,
  );

  const setLocale = useCallback((next: Locale) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore storage failures — the in-memory locale still updates.
    }
    document.documentElement.lang = next === "zh-HK" ? "zh-HK" : "en";
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);

  return [locale, setLocale];
}
