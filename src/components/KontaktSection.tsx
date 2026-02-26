import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  );
}

export function KontaktSection() {
  return (
    <section id="kontakt" className="section-padding bg-background">
      <div className="container-church">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-church-gold text-sm tracking-[0.2em] uppercase font-semibold mb-3">Wir sind für Sie da</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">Kontakt & Pfarrbüro</h2>
            <div className="divider-gold" />
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <FadeIn delay={0.1}>
            <div className="bg-card rounded-xl p-8 shadow-sm space-y-6">
              <h3 className="font-serif text-xl font-semibold text-foreground">Pfarrbüro St. Cyriakus</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-church-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">Adresse</p>
                    <p className="text-muted-foreground text-sm">Cyriakusplatz 14<br />47652 Weeze</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-church-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">Telefon</p>
                    <p className="text-muted-foreground text-sm">02837 / 215</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-church-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">E-Mail</p>
                    <p className="text-muted-foreground text-sm">pfarrbuero@st-cyriakus-weeze.de</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-church-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">Öffnungszeiten</p>
                    <p className="text-muted-foreground text-sm">
                      Mo – Fr: 09:00 – 12:00 Uhr<br />
                      Di & Do: 14:00 – 17:00 Uhr
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-card rounded-xl p-8 shadow-sm space-y-6">
              <h3 className="font-serif text-xl font-semibold text-foreground">Pfarrer</h3>
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-foreground font-medium">Klaus Martin Niesmann</span><br />
                Es grüßt Sie im Namen des Teams und aller haupt- und ehrenamtlichen Mitarbeiter.
              </p>

              <h3 className="font-serif text-xl font-semibold text-foreground pt-4">Pastoraler Raum</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Die Pfarrgemeinde St. Cyriakus gehört zum Pastoralen Raum Kevelaer | Weeze im Bistum Münster.
              </p>

              <h3 className="font-serif text-xl font-semibold text-foreground pt-4">Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://st-cyriakus-weeze.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-church-gold transition-colors underline underline-offset-4">
                    Bisherige Homepage
                  </a>
                </li>
                <li>
                  <a href="https://www.bistum-muenster.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-church-gold transition-colors underline underline-offset-4">
                    Bistum Münster
                  </a>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
