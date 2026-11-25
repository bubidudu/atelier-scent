import type { Metadata } from "next";
import { AboutIntro } from "@/components/about/AboutIntro";
import { TeamSection } from "@/components/about/TeamSection";
import { SafetySection } from "@/components/home/SafetySection";
import { FaqSection } from "@/components/about/FaqSection";

export const metadata: Metadata = {
  title: "理念與安全指南 About & Safety",
  description:
    "Atelier Scent 的調香與芳療理念、團隊故事、透明使用指引，以及新手最常見的問題：從哪裡開始、如何為有寵物或小童的家庭選擇安全的香氣。",
};

export default function AboutPage() {
  return (
    <>
      <AboutIntro />
      <TeamSection />
      <SafetySection />
      <FaqSection />
    </>
  );
}
