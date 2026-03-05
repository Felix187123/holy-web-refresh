import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import churchExterior from "@/assets/church-exterior.jpg";

const StCyriakus = () => {
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
              Unsere Pfarrkirche
            </span>
          </div>

          <h1 className="font-heading text-4xl md:text-6xl text-foreground mb-10">
            St. Cyriakus, Weeze
          </h1>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <img
                src={churchExterior}
                alt="St. Cyriakus Kirche Weeze"
                className="rounded-2xl w-full aspect-[4/5] object-cover"
              />
            </div>

            <div className="space-y-6">
              <p className="font-body text-muted-foreground leading-relaxed text-[15px]">
                Die Pfarrkirche St. Cyriakus ist das Herzstück unserer Gemeinde in Weeze. Mit ihrer fast 800-jährigen Geschichte ist sie ein Zeugnis des Glaubens und der Beständigkeit.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed text-[15px]">
                Die Zerstörung der ursprünglichen Pfarrkirche in der letzten Kriegsphase des 2. Weltkrieges war für die Gemeinde ein schmerzlicher Tiefpunkt. Doch durch den unermüdlichen Einsatz vieler Gemeindemitglieder konnte bereits Mitte der fünfziger Jahre das heutige Gotteshaus eingeweiht werden.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed text-[15px]">
                Das wiederaufgebaute Gotteshaus vereint moderne Architektur mit traditionellen Elementen und bietet Raum für Gottesdienste, Andachten und Gemeinschaftsveranstaltungen.
              </p>

              <div className="mt-8 p-6 rounded-2xl bg-secondary">
                <h3 className="font-heading text-lg text-foreground mb-3">Gottesdienstzeiten</h3>
                <ul className="space-y-2 font-body text-sm text-muted-foreground">
                  <li className="flex justify-between">
                    <span>Sonntag</span>
                    <span className="text-foreground font-medium">10:00 Uhr – Hl. Messe</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Samstag</span>
                    <span className="text-foreground font-medium">17:00 Uhr – Vorabendmesse</span>
                  </li>
                </ul>
              </div>

              <div className="mt-4 p-6 rounded-2xl bg-secondary">
                <h3 className="font-heading text-lg text-foreground mb-3">Adresse</h3>
                <p className="font-body text-sm text-muted-foreground">
                  Cyriakusplatz<br />
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

export default StCyriakus;
