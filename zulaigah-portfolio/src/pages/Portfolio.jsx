import React from "react";
import HeroSection from "../components/portfolio/HeroSection";
import AboutSection from "../components/portfolio/AboutSection";
import SkillsSection from "../components/portfolio/SkillsSection";
import ProjectsSection from "../components/portfolio/ProjectsSection";
import ExperienceSection from "../components/portfolio/ExperienceSection";
import ContactSection from "../components/portfolio/ContactSection";

export default function Portfolio() {
  return (
    <div className="relative">
      {/* Background gradient effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-300 rounded-full filter blur-[150px] opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-400 rounded-full filter blur-[150px] opacity-20" />
      </div>

      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </div>
  );
}