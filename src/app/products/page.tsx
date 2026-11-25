import type { Metadata } from "next";
import { ProductExplorer } from "@/components/products/ProductExplorer";
import { CatalogIntro } from "@/components/products/CatalogIntro";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "香氛指南 Scent Guide",
  description:
    "瀏覽 Atelier Scent 的手作香氛配方：香氛蠟燭、香薰蠟片、精油滾珠、空間噴霧、按摩油與固體香水，可按形態與孕婦／小童、寵物友善標示篩選。",
};

export default function ProductsPage() {
  return (
    <Section>
      <CatalogIntro />
      <div className="mt-14">
        <ProductExplorer />
      </div>
    </Section>
  );
}
