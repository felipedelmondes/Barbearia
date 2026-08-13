import { Scissors } from "lucide-react";

const TILES = [
  { size: "row-span-2", label: "Corte & degradê" },
  { size: "", label: "Barba desenhada" },
  { size: "", label: "Ambiente" },
  { size: "row-span-2", label: "Navalha" },
  { size: "", label: "Finalização" },
  { size: "", label: "Produtos" },
];

export default function Gallery() {
  return (
    <section id="galeria" className="bg-ink px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Portfólio
          </span>
          <h2 className="mt-4 font-display text-5xl text-cream sm:text-6xl">
            Galeria de <span className="text-gradient-gold">estilo</span>
          </h2>
        </div>

        <div className="mt-16 grid auto-rows-[10rem] grid-cols-2 gap-4 sm:grid-cols-3">
          {TILES.map((tile, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl border border-cream/10 bg-gradient-to-br from-charcoal-light to-charcoal ${tile.size}`}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-20 transition-opacity duration-300 group-hover:opacity-40">
                <Scissors className="h-10 w-10 text-gold" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute bottom-3 left-4 text-sm font-medium text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {tile.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
