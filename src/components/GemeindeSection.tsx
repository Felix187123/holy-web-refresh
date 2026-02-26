import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Music, Heart, BookOpen, Baby, HandHelping } from "lucide-react";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  );
}

const groups = [
  { icon: Users, title: "Kirchenvorstand", desc: "Verwaltung und Leitung der Pfarrgemeinde" },
  { icon: Music, title: "Kirchenchor", desc: "Musikalische Gestaltung der Gottesdienste" },
  { icon: Heart, title: "Caritas", desc: "Nächstenliebe in Tat – Hilfe für Bedürftige" },
  { icon: BookOpen, title: "Bibelkreis", desc: "Gemeinsames Lesen und Reflektieren der Heiligen Schrift" },
  { icon: Baby, title: "Messdiener", desc: "Jugendliche im Dienst am Altar" },
  { icon: HandHelping, title: "Ehrenamt", desc: "Vielfältiges Engagement in der Gemeinde" },
];

export function GemeindeSection() {
  return (
    <section id="gemeindeleben" className="section-padding bg-background">
      <div className="container-church">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-church-gold text-sm tracking-[0.2em] uppercase font-semibold mb-3">Gemeinsam leben</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">Gemeindeleben & Vereine</h2>
            <div className="divider-gold mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Wer mitmacht, der erlebt Gemeinde. Wir freuen uns auf persönliche Begegnungen. Herzliche Einladung und herzlich willkommen.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-all group border border-transparent hover:border-church-gold/20">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:bg-church-gold/10 transition-colors">
                  <g.icon className="h-6 w-6 text-primary group-hover:text-church-gold transition-colors" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{g.title}</h3>
                <p className="text-sm text-muted-foreground">{g.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
