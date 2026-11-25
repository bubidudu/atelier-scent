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
  { href: "/#packaging", key: "packaging" as const },
  { href: "/#roadmap", key: "roadmap" as const },
  { href: "/#community", key: "community" as const },
];

export function SiteHeader() {
  const { t } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-baseline gap-3">
          <span className="font-display text-[1.0625rem] uppercase tracking-[0.22em]">
            Atelier Scent
          </span>
          <span className="hidden text-[0.625rem] uppercase tracking-[0.2em] text-ink-faint xl:inline">
            {t(copy.brand.tagline)}
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-ink-soft transition-colors hover:text-ink"
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
            className="flex h-8 w-8 items-center justify-center border border-line-strong text-ink transition-colors hover:border-ink lg:hidden"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              {menuOpen ? (
                <path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.2" />
              ) : (
                <path d="M1.5 4h11M1.5 7h11M1.5 10h11" stroke="currentColor" strokeWidth="1.2" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden transition-[max-height] duration-300 lg:hidden",
          menuOpen ? "max-h-96 border-t border-line" : "max-h-0",
        )}
      >
        <nav className="space-y-1 px-5 py-5 sm:px-8" aria-label="Mobile">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-ink-soft transition-colors hover:text-ink"
            >
              {t(copy.nav[link.key])}
            </Link>
          ))}
          <div className="pt-4">
            <LanguageToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
