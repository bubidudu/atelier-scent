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
            <Media imageKey={product.imageKey} locale={locale} className="h-56 w-full sm:h-full" />
          </div>

          <div className="px-6 py-6 sm:px-8 sm:py-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">{category ? t(category.label) : product.category}</p>
                <h2 className="font-display mt-2 text-[1.75rem] leading-tight">
                  {t(product.name)}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="-mr-1 shrink-0 p-1 text-ink-faint transition-colors hover:text-ink"
                aria-label={t(copy.nav.close)}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </button>
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {product.tags.map((tagId) => (
                <Badge key={tagId} tone={tagId === "pet-friendly" ? "sage" : "sand"}>
                  {t(safetyTagMap[tagId].label)}
                </Badge>
              ))}
            </div>

            <p className="mt-5 text-sm leading-relaxed text-ink-soft">{t(product.story)}</p>

            <div className="mt-6 border-t border-line pt-5">
              <p className="eyebrow">{t(copy.featured.notes)}</p>
              <ul className="mt-3 space-y-1.5 text-sm">
                {product.notes.map((note, index) => (
                  <li key={`${note.family.en}-${index}`} className="flex gap-3">
                    <span className="w-14 shrink-0 text-xs tracking-[0.1em] text-ink-faint uppercase">
                      {t(note.family)}
                    </span>
                    <span className="text-ink-soft">{t(note.note)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 border-t border-line pt-5">
              <p className="eyebrow">{t(copy.featured.ingredients)}</p>
              <ul className="mt-3 space-y-1.5 text-sm">
                {product.ingredients.map((ingredient) => (
                  <li key={ingredient.name.en} className="flex flex-wrap gap-x-2">
                    <span className="text-ink">{t(ingredient.name)}</span>
                    <span className="text-ink-faint">— {t(ingredient.role)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 border-t border-line pt-5">
              <p className="eyebrow">{t(copy.featured.usage)}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t(product.usage)}</p>
            </div>

            <div className="mt-6 border border-clay/60 bg-clay/15 px-4 py-4">
              <p className="eyebrow">{t(copy.featured.safety)}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {t(product.safetyNotes)}
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm">
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
