import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-church.jpg";

export function HeroSection() {
  const scrollToAbout = () => {
    document.querySelector("#ueber-uns")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Kircheninneres" className="h-full w-full object-cover scale-105" />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsla(0,0%,100%,.5) 1px, transparent 1px), linear-gradient(90deg, hsla(0,0%,100%,.5) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      {/* Content */}
      <div className="relative z-10 w-full pb-20 pt-40 px-5 md:px-8">
        <div className="container-church">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="divider-gold" />
              <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-church-gold">
                Katholische Kirchengemeinde
              </span>
            </div>

            <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl text-primary-foreground mb-4 leading-[0.9]">
              St. Cyriakus
            </h1>
            <p className="font-heading text-2xl md:text-4xl text-primary-foreground/50 italic mb-8">
              in Weeze
            </p>

            <p className="font-body text-base md:text-lg text-primary-foreground/60 max-w-lg leading-relaxed mb-12">
              Seit fast 800 Jahren ein Ort des Glaubens, der Gemeinschaft und der Hoffnung. Herzlich willkommen.
            </p>

            <button
              onClick={scrollToAbout}
              className="group flex items-center gap-3 font-body text-sm font-medium text-primary-foreground/70 hover:text-church-gold transition-colors"
            >
              <span className="tracking-wide">Entdecken</span>
              <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 grid grid-cols-3 gap-6 max-w-md"
          >
            {[
              { value: "~800", label: "Jahre Geschichte" },
              { value: "2", label: "Kirchen" },
              { value: "6+", label: "Gottesdiensträume" },
            ].map((stat) => (
              <div key={stat.label} className="text-left">
                <p className="font-heading text-2xl md:text-3xl text-church-gold">{stat.value}</p>
                <p className="font-body text-[11px] text-primary-foreground/40 uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
