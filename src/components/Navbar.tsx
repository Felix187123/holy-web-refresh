import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Start", href: "#hero" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Gottesdienste", href: "#gottesdienste" },
  { label: "Gemeinde", href: "#gemeindeleben" },
  { label: "Sakramente", href: "#sakramente" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-church flex items-center justify-between px-5 py-4 md:px-8">
        <button onClick={() => scrollTo("#hero")} className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--gold-gradient)" }}>
            <span className="text-accent-foreground font-heading text-lg font-bold">†</span>
          </div>
          <div className="text-left hidden sm:block">
            <span className={`block font-heading text-lg leading-tight transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
              St. Cyriakus
            </span>
            <span className={`block text-[10px] font-body font-medium tracking-[0.2em] uppercase transition-colors ${scrolled ? "text-muted-foreground" : "text-primary-foreground/60"}`}>
              Weeze
            </span>
          </div>
        </button>

        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => scrollTo(item.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium font-body transition-all ${
                  scrolled
                    ? "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-foreground hover:bg-secondary" : "text-primary-foreground hover:bg-primary-foreground/10"
          }`}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <ul className="container-church px-5 py-3 space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="block w-full text-left py-3 px-4 text-foreground font-medium font-body text-sm rounded-lg hover:bg-secondary transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
