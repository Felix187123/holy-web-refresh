export function Footer() {
  return (
    <footer className="bg-primary py-10">
      <div className="container-church px-5 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--gold-gradient)" }}>
              <span className="text-accent-foreground font-heading text-sm font-bold">†</span>
            </div>
            <div>
              <span className="font-heading text-base text-primary-foreground">St. Cyriakus Weeze</span>
              <p className="font-body text-[10px] text-primary-foreground/40 tracking-wider uppercase">Katholische Kirchengemeinde</p>
            </div>
          </div>

          <p className="font-body text-xs text-primary-foreground/40 text-center">
            © {new Date().getFullYear()} Kath. Kirchengemeinde St. Cyriakus Weeze · Pastoraler Raum Kevelaer | Weeze
          </p>
        </div>
      </div>
    </footer>
  );
}
