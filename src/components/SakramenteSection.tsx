import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Droplets, Heart, Cross, BookOpen } from "lucide-react";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay }}>
      {children}
    </motion.div>
  );
}

const sakramente = [
  { icon: Droplets, title: "Taufe", desc: "Der Beginn des christlichen Lebensweges – Aufnahme in die Gemeinschaft der Gläubigen.", num: "01" },
  { icon: BookOpen, title: "Erstkommunion", desc: "Zum ersten Mal den Leib Christi empfangen – ein besonderer Moment.", num: "02" },
  { icon: Cross, title: "Firmung", desc: "Bekräftigung des Glaubens und Empfang des Heiligen Geistes.", num: "03" },
  { icon: Heart, title: "Ehe", desc: "Das Sakrament der Liebe – den Bund fürs Leben vor Gott schließen.", num: "04" },
];

export function SakramenteSection() {
  return (
    <section id="sakramente" className="section-padding bg-card">
      <div className="container-church">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="divider-gold" />
            <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-church-gold">Im Glauben</span>
          </div>
          <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-4">Sakramente</h2>
          <p className="font-body text-muted-foreground max-w-lg mb-12">
            Die Sakramente begleiten uns auf dem Weg des Glaubens – vom Anfang bis zur Vollendung.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-5">
          {sakramente.map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group bg-background rounded-2xl p-6 md:p-8 hover-lift border border-transparent hover:border-border relative overflow-hidden h-full">
                <span className="absolute top-6 right-6 font-heading text-5xl text-secondary font-bold group-hover:text-church-gold/10 transition-colors">{s.num}</span>
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-church-gold/10 transition-colors">
                    <s.icon className="h-6 w-6 text-primary group-hover:text-church-gold transition-colors" />
                  </div>
                  <h3 className="font-heading text-xl text-foreground mb-2">{s.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <p className="font-body text-center mt-10 text-sm text-muted-foreground">
            Für weitere Informationen wenden Sie sich bitte an das Pfarrbüro.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
