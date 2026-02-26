import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, MapPin, Calendar } from "lucide-react";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  );
}

const gottesdienste = [
  {
    day: "Samstag",
    time: "17:00 Uhr",
    type: "Vorabendmesse",
    location: "St. Cyriakus, Weeze",
  },
  {
    day: "Sonntag",
    time: "09:30 Uhr",
    type: "Heilige Messe",
    location: "Heilig-Kreuz, Wemb",
  },
  {
    day: "Sonntag",
    time: "11:00 Uhr",
    type: "Heilige Messe",
    location: "St. Cyriakus, Weeze",
  },
  {
    day: "Dienstag",
    time: "09:00 Uhr",
    type: "Werktagsmesse",
    location: "Kapelle Theresienstift",
  },
  {
    day: "Donnerstag",
    time: "09:00 Uhr",
    type: "Werktagsmesse",
    location: "St. Cyriakus, Weeze",
  },
];

export function GottesdiensteSection() {
  return (
    <section id="gottesdienste" className="section-padding bg-secondary">
      <div className="container-church">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-church-gold text-sm tracking-[0.2em] uppercase font-semibold mb-3">Gemeinsam im Gebet</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">Gottesdienste</h2>
            <div className="divider-gold mb-6" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Die Termine sind im Kalender eingetragen und immer für eine Woche gültig. Kurzfristige Veränderungen sind möglich.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-4 max-w-3xl mx-auto">
          {gottesdienste.map((gd, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-card rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex items-center gap-3 sm:w-40">
                  <Calendar className="h-5 w-5 text-church-gold shrink-0" />
                  <span className="font-semibold text-foreground">{gd.day}</span>
                </div>
                <div className="flex items-center gap-3 sm:w-32">
                  <Clock className="h-5 w-5 text-church-gold shrink-0" />
                  <span className="text-foreground">{gd.time}</span>
                </div>
                <div className="flex-1">
                  <span className="font-serif text-foreground">{gd.type}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 shrink-0" />
                  <span>{gd.location}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <p className="text-center mt-8 text-sm text-muted-foreground italic">
            Weitere Gottesdiensträume: Kapellen im Theresienstift und Petrusheim sowie die Schlosskapellen auf Wissen und Kalbeck.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
