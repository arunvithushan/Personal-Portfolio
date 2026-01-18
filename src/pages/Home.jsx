import { TemmeToggle } from "../components/TemmeToggle";
import StarBackground from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";  
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection  } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { Toaster } from "@/components/ui/toaster";  

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[hsl(var(--background))] transition-colors duration-300">
      
      {/* Background Stars */}
      <div className="absolute inset-0 z-0">
        <StarBackground />
      </div>

      {/* Theme Toggle Button */}
      <div className="absolute top-4 right-4 z-20">
        <TemmeToggle />
      </div>

      {/* Navigation Bar */}
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* ✅ REQUIRED FOR TOAST */}
      <Toaster />
    </div>
  );
}
