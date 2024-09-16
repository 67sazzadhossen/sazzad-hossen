"use client";
import AboutMeSection from "@/Components/HomePage/AboutMe/AboutMeSection";
import HeroSection from "@/Components/HomePage/HeroSection/HeroSection";
import SkillSlideSection from "@/Components/HomePage/SkillSlideSection/SkillSlideSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection></HeroSection>
      <SkillSlideSection></SkillSlideSection>
      <AboutMeSection></AboutMeSection>
    </div>
  );
}
