import { ArrowDown, Scissors } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="grain-overlay relative flex min-h-screen items-center overflow-hidden bg-ink"
    >
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-[36rem] w-[36rem] rounded-full bg-gold/10 blur-[140px]" />
        <div className="absolute -right-24 bottom-0 h-[30rem] w-[30rem] rounded-full bg-gold/5 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,var(--color-ink)_92%)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-6 pt-28 pb-20 md:grid-cols-2 md:pt-20">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            <Scissors className="h-3.5 w-3.5" />
            Desde 2012 · São Paulo
          </div>

          <h1 className="font-display text-6xl leading-[0.95] text-cream sm:text-7xl lg:text-8xl">
            ESTILO É
            <br />
            <span className="text-gradient-gold">CORTE DE MESTRE</span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-smoke">
            Barbearia clássica com toque contemporâneo. Cortes precisos,
            barba na navalha e um ambiente feito pra você se sentir em casa.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contato"
              className="rounded-full bg-gold px-8 py-4 text-sm font-bold uppercase tracking-wide text-ink shadow-lg shadow-gold/20 transition-transform hover:scale-105"
            >
              Agendar horário
            </a>
            <a
              href="#servicos"
              className="rounded-full border border-cream/20 px-8 py-4 text-sm font-bold uppercase tracking-wide text-cream transition-colors hover:border-gold hover:text-gold"
            >
              Ver serviços
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-4 border-t border-cream/10 pt-8 sm:flex sm:gap-10">
            {[
              ["12+", "Anos de ofício"],
              ["8.4k", "Clientes atendidos"],
              ["4.9", "Avaliação média"],
            ].map(([value, label]) => (
              <div key={label} className="min-w-0">
                <p className="font-display text-3xl text-gold">{value}</p>
                <p className="text-xs uppercase tracking-wide text-smoke">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border border-gold/20 bg-gradient-to-br from-charcoal-light via-charcoal to-ink shadow-2xl shadow-black/60">
            <div className="absolute inset-0 flex items-center justify-center">
              <Scissors className="h-40 w-40 -rotate-45 text-gold/15" />
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(201,162,75,0.18),transparent_55%)]" />
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-2xl border border-gold/20 bg-charcoal px-6 py-4 shadow-xl">
            <p className="font-display text-2xl text-gold">100%</p>
            <p className="text-xs uppercase tracking-wide text-smoke">
              Navalha & precisão
            </p>
          </div>
        </div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-smoke transition-colors hover:text-gold md:flex"
      >
        <span className="text-xs uppercase tracking-[0.3em]">Explorar</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
