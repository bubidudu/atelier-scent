"use client";

import Link from "next/link";
import { useLocale } from "@/i18n/LocaleProvider";
import { copy } from "@/data/copy";
import { siteConfig } from "@/data/site";
import { LanguageToggle } from "./LanguageToggle";

export function SiteFooter() {
  const { t } = useLocale();

  const exploreLinks = [
    { href: "/products", label: t(copy.nav.products) },
    { href: "/about", label: t(copy.nav.about) },
    { href: "/#safety", label: t(copy.nav.safety) },
    { href: "/#sustainability", label: t(copy.nav.sustainability) },
    { href: "/#packaging", label: t(copy.nav.packaging) },
    { href: "/#roadmap", label: t(copy.nav.roadmap) },
    { href: "/#community", label: t(copy.nav.community) },
  ];

  return (
    <footer className="border-t border-line bg-paper px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1240px] gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="font-display text-[1.0625rem] uppercase tracking-[0.22em]">
            Atelier Scent
          </p>
          <p className="mt-5 max-w-sm text-[0.8125rem] leading-[1.9] text-ink-soft">
            {t(copy.footer.blurb)}
          </p>
          <LanguageToggle className="mt-7" />
        </div>

        <div>
          <p className="eyebrow">{t(copy.footer.explore)}</p>
          <ul className="mt-5 space-y-3">
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-ink-soft transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">{t(copy.footer.contact)}</p>
          <ul className="mt-5 space-y-3 text-[0.8125rem] text-ink-soft">
            <li>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="transition-colors hover:text-ink"
              >
                {siteConfig.contact.email}
              </a>
            </li>
            {siteConfig.social.map((social) => (
              <li key={social.id}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-ink"
                >
                  {social.label} · {social.handle}
                </a>
              </li>
            ))}
          </ul>
          <p className="eyebrow mt-9">{t(copy.footer.hours)}</p>
          <p className="mt-3 text-[0.8125rem] text-ink-soft">{t(copy.footer.hoursValue)}</p>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-[1240px] flex-col gap-3 border-t border-line pt-6 text-[0.6875rem] uppercase tracking-[0.14em] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} Atelier Scent. {t(copy.footer.rights)}
        </p>
        <p>{t(copy.footer.privacy)}</p>
      </div>
    </footer>
  );
}
