import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, MapPin } from "lucide-react";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay }}>
      {children}
    </motion.div>
  );
}

const gottesdienste = [
  { day: "Samstag", time: "17:00", type: "Vorabendmesse", location: "St. Cyriakus, Weeze" },
  { day: "Sonntag", time: "09:30", type: "Heilige Messe", location: "Heilig-Kreuz, Wemb" },
  { day: "Sonntag", time: "11:00", type: "Heilige Messe", location: "St. Cyriakus, Weeze" },
  { day: "Dienstag", time: "09:00", type: "Werktagsmesse", location: "Kapelle Theresienstift" },
  { day: "Donnerstag", time: "09:00", type: "Werktagsmesse", location: "St. Cyriakus, Weeze" },
];

export function GottesdiensteSection() {
  return (
    <section id="gottesdienste" className="section-padding bg-card">
      <div className="container-church">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="divider-gold" />
            <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-church-gold">Gemeinsam im Gebet</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <h2 className="font-heading text-4xl md:text-6xl text-foreground">Gottesdienste</h2>
            <p className="font-body text-sm text-muted-foreground max-w-sm">
              Termine sind wöchentlich gültig. Kurzfristige Änderungen vorbehalten.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-3">
          {gottesdienste.map((gd, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="group bg-background rounded-xl p-5 md:p-6 hover-lift border border-transparent hover:border-border flex flex-col md:flex-row md:items-center gap-3 md:gap-0">
                <div className="md:w-36 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-church-gold shrink-0" />
                  <span className="font-body font-semibold text-foreground text-sm">{gd.day}</span>
                </div>
                <div className="md:w-28 flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-3.5 w-3.5 shrink-0" />
                  <span className="font-body text-sm font-medium">{gd.time} Uhr</span>
                </div>
                <div className="flex-1">
                  <span className="font-heading text-base text-foreground">{gd.type}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 shrink-0" />
                  <span className="font-body text-sm">{gd.location}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div className="mt-10 p-5 rounded-xl bg-secondary/50 border border-border">
            <p className="font-body text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Weitere Gottesdiensträume:</span>{" "}
              Kapellen im Theresienstift und Petrusheim sowie die Schlosskapellen auf Wissen und Kalbeck.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
