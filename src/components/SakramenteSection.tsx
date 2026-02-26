import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Droplets, Heart, Cross, BookOpen } from "lucide-react";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  );
}

const sakramente = [
  { icon: Droplets, title: "Taufe", desc: "Der Beginn des christlichen Lebensweges – Aufnahme in die Gemeinschaft der Gläubigen." },
  { icon: BookOpen, title: "Erstkommunion", desc: "Zum ersten Mal den Leib Christi empfangen – ein besonderer Moment im Glaubensleben." },
  { icon: Cross, title: "Firmung", desc: "Bekräftigung des Glaubens und Empfang des Heiligen Geistes." },
  { icon: Heart, title: "Ehe", desc: "Das Sakrament der Liebe – den Bund fürs Leben vor Gott schließen." },
];

export function SakramenteSection() {
  return (
    <section id="sakramente" className="section-padding bg-secondary">
      <div className="container-church">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-church-gold text-sm tracking-[0.2em] uppercase font-semibold mb-3">Im Glauben</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">Sakramente & Glauben</h2>
            <div className="divider-gold mb-6" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Die Sakramente begleiten uns auf dem Weg des Glaubens – vom Anfang bis zur Vollendung.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {sakramente.map((s, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="flex gap-5 bg-card rounded-xl p-6 shadow-sm">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <s.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6}>
          <p className="text-center mt-10 text-muted-foreground text-sm">
            Für weitere Informationen zu den Sakramenten wenden Sie sich bitte an das Pfarrbüro.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
