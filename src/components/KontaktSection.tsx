import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay }}>
      {children}
    </motion.div>
  );
}

const contactInfo = [
  { icon: MapPin, label: "Adresse", value: "Cyriakusplatz 14\n47652 Weeze" },
  { icon: Phone, label: "Telefon", value: "02837 / 215" },
  { icon: Mail, label: "E-Mail", value: "pfarrbuero@st-cyriakus-weeze.de" },
  { icon: Clock, label: "Öffnungszeiten", value: "Mo – Fr: 09:00 – 12:00 Uhr\nDi & Do: 14:00 – 17:00 Uhr" },
];

export function KontaktSection() {
  return (
    <section id="kontakt" className="section-padding bg-background">
      <div className="container-church">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="divider-gold" />
            <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-church-gold">Wir sind für Sie da</span>
          </div>
          <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-12">Kontakt</h2>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-3 bg-card rounded-2xl p-8 md:p-10">
            <FadeIn delay={0.1}>
              <h3 className="font-heading text-2xl text-foreground mb-8">Pfarrbüro St. Cyriakus</h3>
            </FadeIn>
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, i) => (
                <FadeIn key={i} delay={0.15 + i * 0.08}>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                      <item.icon className="h-4 w-4 text-church-slate" />
                    </div>
                    <div>
                      <p className="font-body text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-1">{item.label}</p>
                      <p className="font-body text-sm text-foreground whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Side cards */}
          <div className="lg:col-span-2 space-y-6">
            <FadeIn delay={0.2}>
              <div className="bg-card rounded-2xl p-8">
                <h3 className="font-heading text-xl text-foreground mb-3">Pfarrer</h3>
                <p className="font-body text-sm text-foreground font-semibold mb-1">Klaus Martin Niesmann</p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Es grüßt Sie im Namen des Teams und aller haupt- und ehrenamtlichen Mitarbeiter.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-card rounded-2xl p-8">
                <h3 className="font-heading text-xl text-foreground mb-3">Pastoraler Raum</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  Kevelaer | Weeze · Bistum Münster
                </p>
                <div className="space-y-2">
                  {[
                    { href: "https://st-cyriakus-weeze.de", label: "Bisherige Homepage" },
                    { href: "https://www.bistum-muenster.de", label: "Bistum Münster" },
                  ].map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-body text-sm text-primary hover:text-church-gold transition-colors group"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span className="underline underline-offset-4 decoration-border group-hover:decoration-church-gold">{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
