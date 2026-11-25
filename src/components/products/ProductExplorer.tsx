"use client";

import { useMemo, useState } from "react";
import { useLocale } from "@/i18n/LocaleProvider";
import { copy } from "@/data/copy";
import { allProducts } from "@/data/products";
import { productCategories } from "@/data/categories";
import { safetyTags } from "@/data/safety";
import type { Product, ProductCategoryId, SafetyTagId } from "@/data/types";
import { cn } from "@/lib/cn";
import { ProductCard } from "./ProductCard";
import { ProductDetailDialog } from "./ProductDetailDialog";
import { useInquiry } from "@/components/inquiry/InquiryProvider";

type FilterId = ProductCategoryId | SafetyTagId;

export function ProductExplorer() {
  const { t } = useLocale();
  const { openInquiry } = useInquiry();
  const [selected, setSelected] = useState<FilterId | "all">("all");
  const [active, setActive] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    if (selected === "all") return allProducts;
    return allProducts.filter((product) => {
      if (product.category === selected) return true;
      return product.tags.includes(selected as SafetyTagId);
    });
  }, [selected]);

  const filterButton = (id: FilterId | "all", label: string) => {
    const isActive = selected === id;
    return (
      <button
        key={id}
        type="button"
        onClick={() => setSelected(id)}
        aria-pressed={isActive}
        className={cn(
          "rounded-[2px] border px-4 py-2 text-[0.625rem] font-medium uppercase tracking-[0.14em] transition-colors",
          isActive
            ? "border-ink bg-ink text-inverse"
            : "border-line-strong text-ink-soft hover:border-ink hover:text-ink",
        )}
      >
        {label}
      </button>
    );
  };

  return (
    <div>
      <div className="grid gap-6 border-y border-line py-6 lg:grid-cols-[1fr_1fr_auto] lg:items-start lg:gap-10">
        <div>
          <p className="eyebrow">{t(copy.catalog.filterByForm)}</p>
          <div className="mt-3.5 flex flex-wrap gap-2">
            {filterButton("all", t(copy.catalog.filterAll))}
            {productCategories.map((category) =>
              filterButton(category.id, t(category.label)),
            )}
          </div>
        </div>

        <div>
          <p className="eyebrow">{t(copy.catalog.filterByTag)}</p>
          <div className="mt-3.5 flex flex-wrap gap-2">
            {safetyTags.map((tag) => filterButton(tag.id, t(tag.label)))}
          </div>
        </div>

        <p className="text-[0.625rem] uppercase tracking-[0.16em] text-ink-faint lg:pt-7 lg:text-right">
          {filtered.length} {t(copy.catalog.results)}
        </p>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 border border-line bg-paper-deep/40 px-5 py-10 text-center text-[0.8125rem] text-ink-soft">
          {t(copy.catalog.empty)}
        </p>
      ) : (
        <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} onSelect={setActive} />
          ))}
        </div>
      )}

      <ProductDetailDialog
        product={active}
        onClose={() => setActive(null)}
        onRequest={(productId) => {
          setActive(null);
          openInquiry(productId);
        }}
      />
    </div>
  );
}
