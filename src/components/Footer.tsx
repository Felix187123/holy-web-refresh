import { Cross } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground/80 py-12">
      <div className="container-church px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Cross className="h-6 w-6 text-church-gold" />
            <div>
              <span className="font-serif text-lg font-semibold text-primary-foreground">St. Cyriakus Weeze</span>
              <p className="text-xs text-primary-foreground/50">Katholische Kirchengemeinde</p>
            </div>
          </div>

          <p className="text-sm text-primary-foreground/50 text-center">
            © {new Date().getFullYear()} Kath. Kirchengemeinde St. Cyriakus Weeze · Pastoraler Raum Kevelaer | Weeze
          </p>
        </div>
      </div>
    </footer>
  );
}
