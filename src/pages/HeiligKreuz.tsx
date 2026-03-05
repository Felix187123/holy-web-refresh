import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import chapelWemb from "@/assets/chapel-wemb.jpg";

const HeiligKreuz = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="container-church">
          <Link
            to="/#ueber-uns"
            className="inline-flex items-center gap-2 text-church-gold font-body text-sm font-medium mb-8 hover:opacity-80 transition-opacity"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Übersicht
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <div className="divider-gold" />
            <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-church-gold">
              Unsere Filialkirche
            </span>
          </div>

          <h1 className="font-heading text-4xl md:text-6xl text-foreground mb-10">
            Heilig-Kreuz, Wemb
          </h1>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <img
                src={chapelWemb}
                alt="Heilig-Kreuz Kirche Wemb"
                className="rounded-2xl w-full aspect-[4/5] object-contain bg-muted"
              />
            </div>

            <div className="space-y-6">
              <p className="font-body text-muted-foreground leading-relaxed text-[15px]">
                Die Kirche Heilig-Kreuz in Wemb ist seit 2005 Teil unserer Pfarrgemeinde St. Cyriakus. Sie ist ein Ort der Stille und Besinnung in ländlicher Umgebung.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed text-[15px]">
                Die Kirche besticht durch ihre neugotische Architektur und den markanten Kirchturm, der weithin sichtbar die Landschaft prägt. Im Inneren bietet sie einen einladenden Raum für Gebet und Gottesdienst.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed text-[15px]">
                Regelmäßige Gottesdienste und besondere Feiern verbinden die Gemeinschaft in Wemb und stärken das kirchliche Leben vor Ort.
              </p>

              <div className="mt-8 p-6 rounded-2xl bg-secondary">
                <h3 className="font-heading text-lg text-foreground mb-3">Gottesdienstzeiten</h3>
                <ul className="space-y-2 font-body text-sm text-muted-foreground">
                  <li className="flex justify-between">
                    <span>Sonntag</span>
                    <span className="text-foreground font-medium">08:30 Uhr – Hl. Messe</span>
                  </li>
                </ul>
              </div>

              <div className="mt-4 p-6 rounded-2xl bg-secondary">
                <h3 className="font-heading text-lg text-foreground mb-3">Adresse</h3>
                <p className="font-body text-sm text-muted-foreground">
                  Wemb<br />
                  47652 Weeze
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HeiligKreuz;
