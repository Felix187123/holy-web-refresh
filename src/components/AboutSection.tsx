import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import churchExterior from "@/assets/church-exterior.jpg";
import chapelWemb from "@/assets/chapel-wemb.jpg";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AboutSection() {
  return (
    <section id="ueber-uns" className="section-padding bg-background">
      <div className="container-church">
        {/* Header */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="divider-gold" />
            <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-church-gold">
              Über unsere Gemeinde
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-16">
            Willkommen in<br />St. Cyriakus
          </h2>
        </FadeIn>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <p className="font-body text-muted-foreground leading-relaxed text-[15px]">
                Unsere Pfarrei hat eine lange, fast 800-jährige Geschichte. Seit 2005 gehört Heilig-Kreuz Wemb dazu.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="font-body text-muted-foreground leading-relaxed text-[15px]">
                Die Zerstörung der Pfarrkirche in der letzten Kriegsphase des 2. Weltkrieges war für die Gemeinde ein schmerzlicher Tiefpunkt. Doch sehr viele Menschen haben Hand in Hand dafür gesorgt, dass schon Mitte der fünfziger Jahre das heutige Gotteshaus eingeweiht werden konnte.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="font-body text-muted-foreground leading-relaxed text-[15px]">
                Unsere Kirchengemeinde mit einem großen Team von Haupt- und Ehrenamtlichen lädt ein, im Glauben an Jesus Christus das Leben zu gestalten.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <blockquote className="border-l-2 border-church-gold pl-6 py-2 mt-8">
                <p className="font-heading text-xl text-foreground italic leading-relaxed">
                  „Die Häuser aus Stein leben von den lebendigen Steinen."
                </p>
                <p className="font-body text-sm text-muted-foreground mt-3">
                  Klaus Martin Niesmann, Pfarrer
                </p>
              </blockquote>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div className="relative">
              <img
                src={churchExterior}
                alt="St. Cyriakus Kirche Weeze"
                className="rounded-2xl w-full aspect-[4/5] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl border border-church-gold/20 -z-10" />
              <div className="absolute top-6 -left-6 w-20 h-20 rounded-full" style={{ background: "var(--gold-gradient)", opacity: 0.15 }} />
            </div>
          </FadeIn>
        </div>

        {/* Churches grid */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="divider-gold" />
            <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-church-gold">
              Unsere Gotteshäuser
            </span>
          </div>
          <h3 className="font-heading text-3xl md:text-4xl text-foreground mb-10">Zwei Kirchen, eine Gemeinde</h3>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              img: churchExterior,
              title: "St. Cyriakus, Weeze",
              desc: "Mittelpunkt unserer Gemeinde – das in den 1950er Jahren wieder aufgebaute Gotteshaus dient als Hauptkirche der Pfarrei.",
            },
            {
              img: chapelWemb,
              title: "Heilig-Kreuz, Wemb",
              desc: "Seit 2005 Teil unserer Pfarrgemeinde. Ein Ort der Stille und Besinnung in ländlicher Umgebung.",
            },
          ].map((church, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="group relative rounded-2xl overflow-hidden hover-lift cursor-pointer">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={church.img}
                    alt={church.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="font-heading text-xl text-primary-foreground mb-1">{church.title}</h4>
                  <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">{church.desc}</p>
                  <div className="flex items-center gap-2 mt-3 text-church-gold font-body text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Mehr erfahren</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
