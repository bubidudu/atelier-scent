"use client";

import Link from "next/link";
import { useState } from "react";
import { useLocale } from "@/i18n/LocaleProvider";
import { copy } from "@/data/copy";
import { cn } from "@/lib/cn";
import { LanguageToggle } from "./LanguageToggle";

const navLinks = [
  { href: "/products", key: "products" as const },
  { href: "/about", key: "about" as const },
  { href: "/#safety", key: "safety" as const },
  { href: "/#sustainability", key: "sustainability" as const },
  { href: "/#roadmap", key: "roadmap" as const },
  { href: "/#community", key: "community" as const },
];

export function SiteHeader() {
  const { t } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <Link href="/" className="group flex items-baseline gap-2.5">
          <span className="font-display text-xl tracking-tight">Atelier Scent</span>
          <span className="hidden text-[0.6875rem] tracking-[0.18em] text-ink-faint uppercase sm:inline">
            {t(copy.brand.tagline)}
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-[0.8125rem] text-ink-soft transition-colors hover:text-ink"
              >
                {t(copy.nav[link.key])}
              </Link>
            ))}
          </nav>

          <LanguageToggle className="hidden sm:inline-flex" />

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={t(copy.nav.menu)}
            className="flex h-9 w-9 items-center justify-center border border-line-strong text-ink-soft transition-colors hover:border-ink hover:text-ink lg:hidden"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              {menuOpen ? (
                <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" stroke="currentColor" strokeWidth="1.2" />
              ) : (
                <path d="M2 4.5h12M2 8h12M2 11.5h12" stroke="currentColor" strokeWidth="1.2" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-line transition-[max-height] duration-300 lg:hidden",
          menuOpen ? "max-h-96 border-t" : "max-h-0",
        )}
      >
        <nav className="space-y-1 px-5 py-4 sm:px-8" aria-label="Mobile">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {t(copy.nav[link.key])}
            </Link>
          ))}
          <div className="pt-3">
            <LanguageToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
