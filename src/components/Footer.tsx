import { Scissors } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-charcoal px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <a href="#hero" className="flex items-center gap-2">
          <Scissors className="h-5 w-5 text-gold" />
          <span className="font-display text-lg tracking-widest text-cream">
            NAVALHA D'OURO
          </span>
        </a>
        <p className="text-xs text-smoke">
          © {new Date().getFullYear()} Navalha D'Ouro Barbearia. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
}
