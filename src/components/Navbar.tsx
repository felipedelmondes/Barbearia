import { useEffect, useState } from "react";
import { Menu, Scissors, X } from "lucide-react";

const LINKS = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/85 backdrop-blur-md border-b border-gold/15 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#hero" className="flex items-center gap-2 group">
          <Scissors className="h-6 w-6 text-gold transition-transform duration-300 group-hover:-rotate-12" />
          <span className="font-display text-2xl tracking-widest text-cream">
            NAVALHA <span className="text-gradient-gold">D'OURO</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-smoke transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className="hidden rounded-full border border-gold/60 px-5 py-2 text-sm font-semibold text-gold transition-all hover:bg-gold hover:text-ink md:inline-block"
        >
          Agendar horário
        </a>

        <button
          aria-label="Abrir menu"
          className="text-cream md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      {open && (
        <div className="mx-6 mt-4 flex flex-col gap-1 rounded-2xl border border-gold/15 bg-charcoal p-4 md:hidden">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-cream/90 transition-colors hover:bg-charcoal-light hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-gold px-4 py-3 text-center text-sm font-semibold text-ink"
          >
            Agendar horário
          </a>
        </div>
      )}
    </header>
  );
}
