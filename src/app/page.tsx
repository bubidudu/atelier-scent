import { Hero } from "@/components/home/Hero";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { SafetySection } from "@/components/home/SafetySection";
import { SustainabilitySection } from "@/components/home/SustainabilitySection";
import { PackagingSection } from "@/components/home/PackagingSection";
import { RoadmapSection } from "@/components/home/RoadmapSection";
import { CommunitySection } from "@/components/home/CommunitySection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <SafetySection />
      <SustainabilitySection />
      <PackagingSection />
      <RoadmapSection />
      <CommunitySection />
    </>
  );
}
