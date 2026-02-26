import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { GottesdiensteSection } from "@/components/GottesdiensteSection";
import { GemeindeSection } from "@/components/GemeindeSection";
import { SakramenteSection } from "@/components/SakramenteSection";
import { KontaktSection } from "@/components/KontaktSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GottesdiensteSection />
      <GemeindeSection />
      <SakramenteSection />
      <KontaktSection />
      <Footer />
    </div>
  );
};

export default Index;
