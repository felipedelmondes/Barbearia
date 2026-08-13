import corte01 from "../assets/gallery/corte-01.jpeg";
import corte02 from "../assets/gallery/corte-02.jpeg";
import corte03 from "../assets/gallery/corte-03.jpeg";

const TILES = [
  { src: corte01, label: "Degradê baixo", size: "row-span-2" },
  { src: corte02, label: "Topete com risco", size: "" },
  { src: corte03, label: "Textura curta", size: "" },
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

        <div className="mt-16 grid auto-rows-[13rem] grid-cols-2 gap-4 sm:auto-rows-[15rem]">
          {TILES.map((tile) => (
            <div
              key={tile.label}
              className={`group relative overflow-hidden rounded-2xl border border-cream/10 ${tile.size}`}
            >
              <img
                src={tile.src}
                alt={tile.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-ink/0" />
              <span className="absolute bottom-3 left-4 text-sm font-medium text-cream">
                {tile.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
