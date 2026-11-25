"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/cn";

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-line-strong p-0.5",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {(
        [
          { id: "zh-HK" as const, label: "繁中" },
          { id: "en" as const, label: "EN" },
        ]
      ).map((option) => {
        const isActive = locale === option.id;
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => setLocale(option.id)}
            aria-pressed={isActive}
            className={cn(
              "rounded-full px-3 py-1 text-[0.6875rem] tracking-[0.12em] transition-colors",
              isActive ? "bg-ink text-paper" : "text-ink-faint hover:text-ink",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
