"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/cn";

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-[2px] border border-line-strong",
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
              "px-2.5 py-1 text-[0.625rem] font-medium uppercase tracking-[0.12em] transition-colors",
              isActive ? "bg-ink text-inverse" : "text-ink-faint hover:text-ink",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
