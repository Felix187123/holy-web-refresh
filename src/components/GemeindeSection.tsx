import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Music, Heart, BookOpen, Sparkles, HandHelping, ArrowUpRight } from "lucide-react";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay }}>
      {children}
    </motion.div>
  );
}

const groups = [
  { icon: Users, title: "Kirchenvorstand", desc: "Verwaltung und Leitung der Pfarrgemeinde" },
  { icon: Music, title: "Kirchenchor", desc: "Musikalische Gestaltung der Gottesdienste" },
  { icon: Heart, title: "Caritas", desc: "Nächstenliebe in Tat – Hilfe für Bedürftige" },
  { icon: BookOpen, title: "Bibelkreis", desc: "Gemeinsames Lesen und Reflektieren" },
  { icon: Sparkles, title: "Messdiener", desc: "Jugendliche im Dienst am Altar" },
  { icon: HandHelping, title: "Ehrenamt", desc: "Vielfältiges Engagement in der Gemeinde" },
];

export function GemeindeSection() {
  return (
    <section id="gemeindeleben" className="section-padding bg-background">
      <div className="container-church">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="divider-gold" />
            <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-church-gold">Gemeinsam leben</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <h2 className="font-heading text-4xl md:text-6xl text-foreground">Gemeindeleben<br />& Vereine</h2>
            <p className="font-body text-sm text-muted-foreground max-w-xs">
              Wer mitmacht, erlebt Gemeinde. Herzliche Einladung und herzlich willkommen.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {groups.map((g, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="group bg-card rounded-2xl p-6 hover-lift border border-transparent hover:border-church-gold/20 cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "var(--gold-gradient)", filter: "blur(40px)" }} />
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-church-gold/10 transition-colors">
                      <g.icon className="h-5 w-5 text-church-slate group-hover:text-church-gold transition-colors" />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground/30 group-hover:text-church-gold transition-colors" />
                  </div>
                  <h3 className="font-heading text-lg text-foreground mb-1">{g.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{g.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
