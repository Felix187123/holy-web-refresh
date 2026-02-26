import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import churchExterior from "@/assets/church-exterior.jpg";
import chapelWemb from "@/assets/chapel-wemb.jpg";

function FadeInWhenVisible({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}

export function AboutSection() {
  return (
    <section id="ueber-uns" className="section-padding bg-background">
      <div className="container-church">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <p className="text-church-gold text-sm tracking-[0.2em] uppercase font-semibold mb-3">Über unsere Gemeinde</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
              Willkommen in St. Cyriakus
            </h2>
            <div className="divider-gold mb-6" />
          </div>
        </FadeInWhenVisible>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <FadeInWhenVisible delay={0.2}>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Unsere Pfarrei hat eine lange, fast 800-jährige Geschichte. Seit 2005 gehört Heilig-Kreuz Wemb dazu.
              </p>
              <p>
                Die Zerstörung der Pfarrkirche in der letzten Kriegsphase des 2. Weltkrieges war für die Gemeinde ein schmerzlicher Tiefpunkt. Doch sehr viele Menschen haben Hand in Hand dafür gesorgt, dass schon Mitte der fünfziger Jahre das heutige Gotteshaus eingeweiht werden konnte.
              </p>
              <p>
                Unsere Kirchengemeinde mit einem großen Team von Haupt- und Ehrenamtlichen lädt ein, im Glauben an Jesus Christus das Leben zu gestalten.
              </p>
              <p className="font-serif text-foreground italic text-lg">
                „Die Häuser aus Stein leben von den lebendigen Steinen."
              </p>
              <p className="text-sm text-muted-foreground">
                — Klaus Martin Niesmann, Pfarrer
              </p>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.4}>
            <div className="relative">
              <img
                src={churchExterior}
                alt="St. Cyriakus Kirche Weeze"
                className="rounded-lg shadow-2xl w-full aspect-square object-cover"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-church-gold rounded-lg -z-10" />
            </div>
          </FadeInWhenVisible>
        </div>

        {/* Churches */}
        <FadeInWhenVisible>
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">Unsere Kirchen</h3>
            <div className="divider-gold" />
          </div>
        </FadeInWhenVisible>

        <div className="grid md:grid-cols-2 gap-8">
          <FadeInWhenVisible delay={0.1}>
            <div className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img src={churchExterior} alt="St. Cyriakus Weeze" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl font-semibold text-foreground mb-2">St. Cyriakus, Weeze</h4>
                <p className="text-muted-foreground text-sm">
                  Mittelpunkt unserer Gemeinde – das in den 1950er Jahren wieder aufgebaute Gotteshaus dient als Hauptkirche der Pfarrei.
                </p>
              </div>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <div className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img src={chapelWemb} alt="Heilig-Kreuz Wemb" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl font-semibold text-foreground mb-2">Heilig-Kreuz, Wemb</h4>
                <p className="text-muted-foreground text-sm">
                  Seit 2005 gehört die Kirche Heilig-Kreuz in Wemb zu unserer Pfarrgemeinde. Ein Ort der Stille und Besinnung.
                </p>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
