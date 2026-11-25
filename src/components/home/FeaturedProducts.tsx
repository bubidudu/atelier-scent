"use client";

import { useState } from "react";
import { useLocale } from "@/i18n/LocaleProvider";
import { copy } from "@/data/copy";
import { products } from "@/data/products";
import { productCategories } from "@/data/categories";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductDetailDialog } from "@/components/products/ProductDetailDialog";
import { useInquiry } from "@/components/inquiry/InquiryProvider";
import type { Product } from "@/data/types";

export function FeaturedProducts() {
  const { t } = useLocale();
  const { openInquiry } = useInquiry();
  const [active, setActive] = useState<Product | null>(null);

  const featured = products.slice(0, 6);

  return (
    <Section id="collection">
      <SectionHeading
        eyebrow={t(copy.featured.eyebrow)}
        title={t(copy.featured.title)}
        intro={t(copy.featured.intro)}
      />

      <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5 border-y border-line py-6">
        {productCategories.map((category) => (
          <div key={category.id} className="max-w-[15rem]">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.14em]">
              {t(category.label)}
            </p>
            <p className="mt-1.5 text-[0.75rem] leading-[1.8] text-ink-faint">
              {t(category.tagline)}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} onSelect={setActive} />
        ))}
      </div>

      <div className="mt-14">
        <ButtonLink href="/products" variant="outline">
          {t(copy.featured.viewAll)}
        </ButtonLink>
      </div>

      <ProductDetailDialog
        product={active}
        onClose={() => setActive(null)}
        onRequest={(productId) => {
          setActive(null);
          openInquiry(productId);
        }}
      />
    </Section>
  );
}
