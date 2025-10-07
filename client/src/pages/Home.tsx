import { useEffect } from "react";
import ScanLine from "@/components/ScanLine";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import FlappyGame from "@/components/FlappyGame";
import Footer from "@/components/Footer";
import GameElements from "@/components/GameElements";
import BackgroundVideoPlayer from "@/components/BackgroundMusicPlayer";

const navigationLinks = [
  { name: "Home", href: "#" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Mini-Game", href: "#mini-game" },
  { name: "Contact", href: "#contact" },
];

export default function Home() {
  useEffect(() => {
    document.title = "Shayaan's Portfolio";
  }, []);

  return (
    <div className="min-h-screen text-foreground overflow-hidden relative">
      {/* Background video player */}
      <BackgroundVideoPlayer youtubeUrl="https://www.youtube.com/watch?v=fvUy9AIVJQs&list=RDfvUy9AIVJQs&start_radio=1&ab_channel=Innocent" />
      
      {/* Background game elements */}
      <GameElements />
      
      <ScanLine />
      <Header links={navigationLinks} />
      <main className="relative z-20">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <FlappyGame />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
