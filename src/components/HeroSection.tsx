import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-church.jpg";

export function HeroSection() {
  const scrollToAbout = () => {
    document.querySelector("#ueber-uns")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Kircheninneres mit goldenem Licht"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="text-church-gold font-sans text-sm md:text-base tracking-[0.3em] uppercase mb-4">
            Katholische Kirchengemeinde
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight">
            St. Cyriakus
          </h1>
          <div className="divider-gold mb-6" />
          <p className="font-serif text-xl md:text-2xl text-primary-foreground/80 italic mb-4">
            in Weeze
          </p>
          <p className="font-sans text-base md:text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Herzlich willkommen in unserer Pfarrgemeinde – seit fast 800 Jahren ein Ort des Glaubens, der Gemeinschaft und der Hoffnung.
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          onClick={scrollToAbout}
          className="animate-bounce"
        >
          <ChevronDown className="h-10 w-10 text-church-gold mx-auto" />
        </motion.button>
      </div>
    </section>
  );
}
