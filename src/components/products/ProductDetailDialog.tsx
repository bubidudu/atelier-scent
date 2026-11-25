"use client";

import { useEffect } from "react";
import { useLocale } from "@/i18n/LocaleProvider";
import { copy } from "@/data/copy";
import { productCategories } from "@/data/categories";
import { safetyTagMap } from "@/data/safety";
import type { Product } from "@/data/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Media } from "@/components/ui/Media";

export function ProductDetailDialog({
  product,
  onClose,
  onRequest,
}: {
  product: Product | null;
  onClose: () => void;
  onRequest: (productId: string) => void;
}) {
  const { t, locale } = useLocale();

  useEffect(() => {
    if (!product) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [product, onClose]);

  if (!product) return null;

  const category = productCategories.find((item) => item.id === product.category);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/40 backdrop-blur-sm sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={t(product.name)}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="max-h-[92vh] w-full max-w-3xl overflow-y-auto border border-line bg-paper shadow-2xl">
        <div className="grid gap-0 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div className="border-b border-line sm:border-r sm:border-b-0">
            <Media
              imageKey={product.imageKey}
              locale={locale}
              className="h-56 w-full sm:h-full"
            />
          </div>

          <div className="px-7 py-7 sm:px-9 sm:py-9">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">{category ? t(category.label) : product.category}</p>
                <h2 className="font-display mt-3 text-[1.5rem] uppercase tracking-[0.03em]">
                  {t(product.name)}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="-mr-1 shrink-0 p-1 text-ink-faint transition-colors hover:text-ink"
                aria-label={t(copy.nav.close)}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </button>
            </div>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {product.tags.map((tagId) => (
                <Badge key={tagId} tone={tagId === "pet-friendly" ? "sage" : "sand"}>
                  {t(safetyTagMap[tagId].label)}
                </Badge>
              ))}
            </div>

            <p className="mt-6 text-[0.8125rem] leading-[1.9] text-ink-soft">
              {t(product.story)}
            </p>

            <div className="mt-8 border-t border-line pt-6">
              <p className="eyebrow">{t(copy.featured.notes)}</p>
              <ul className="mt-4 space-y-2 text-[0.8125rem]">
                {product.notes.map((note, index) => (
                  <li key={`${note.family.en}-${index}`} className="flex gap-4">
                    <span className="w-14 shrink-0 text-[0.625rem] uppercase tracking-[0.14em] text-ink-faint">
                      {t(note.family)}
                    </span>
                    <span className="text-ink-soft">{t(note.note)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border-t border-line pt-6">
              <p className="eyebrow">{t(copy.featured.ingredients)}</p>
              <ul className="mt-4 space-y-2 text-[0.8125rem]">
                {product.ingredients.map((ingredient) => (
                  <li key={ingredient.name.en} className="flex flex-wrap gap-x-2">
                    <span className="text-ink">{t(ingredient.name)}</span>
                    <span className="text-ink-faint">— {t(ingredient.role)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border-t border-line pt-6">
              <p className="eyebrow">{t(copy.featured.packaging)}</p>
              <p className="mt-3 text-[0.8125rem] leading-[1.9] text-ink-soft">
                {t(product.packaging)}
              </p>
            </div>

            <div className="mt-8 border-t border-line pt-6">
              <p className="eyebrow">{t(copy.featured.usage)}</p>
              <p className="mt-3 text-[0.8125rem] leading-[1.9] text-ink-soft">
                {t(product.usage)}
              </p>
            </div>

            <div className="mt-8 border border-clay bg-clay/25 px-5 py-5">
              <p className="eyebrow">{t(copy.featured.safety)}</p>
              <p className="mt-2.5 text-[0.8125rem] leading-[1.9] text-ink-soft">
                {t(product.safetyNotes)}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-[0.8125rem]">
                <span className="text-ink-faint">{t(copy.featured.price)}: </span>
                <span className="text-ink">{product.price}</span>
                <span className="text-ink-faint"> · {product.size}</span>
              </div>
              <Button onClick={() => onRequest(product.id)}>
                {t(copy.featured.request)}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
