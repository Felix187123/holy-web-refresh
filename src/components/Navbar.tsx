import { useState, useEffect } from "react";
import { Menu, X, Cross } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Startseite", href: "#hero" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Gottesdienste", href: "#gottesdienste" },
  { label: "Gemeindeleben", href: "#gemeindeleben" },
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
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-church flex items-center justify-between px-4 py-4 md:px-8">
        <button onClick={() => scrollTo("#hero")} className="flex items-center gap-3 group">
          <Cross className={`h-8 w-8 transition-colors ${scrolled ? "text-primary" : "text-church-gold"}`} />
          <div className="text-left">
            <span className={`block font-serif text-lg font-semibold leading-tight transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
              St. Cyriakus
            </span>
            <span className={`block text-xs tracking-wider uppercase transition-colors ${scrolled ? "text-muted-foreground" : "text-primary-foreground/70"}`}>
              Weeze
            </span>
          </div>
        </button>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => scrollTo(item.href)}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-church-gold ${
                  scrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card/98 backdrop-blur-lg border-b border-border overflow-hidden"
          >
            <ul className="container-church px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="block w-full text-left py-3 px-4 text-foreground font-medium rounded-md hover:bg-secondary transition-colors"
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
