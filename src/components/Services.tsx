import { Droplet, Scissors, Sparkles, Wind } from "lucide-react";

const SERVICES = [
  {
    icon: Scissors,
    title: "Corte clássico",
    desc: "Tesoura e máquina, acabamento na régua, inclui lavagem.",
    price: "R$ 55",
    duration: "40 min",
  },
  {
    icon: Droplet,
    title: "Barba na navalha",
    desc: "Toalha quente, óleo pré-barba e navalha tradicional.",
    price: "R$ 45",
    duration: "30 min",
  },
  {
    icon: Sparkles,
    title: "Combo completo",
    desc: "Corte + barba + sobrancelha + finalização premium.",
    price: "R$ 90",
    duration: "1h 10min",
    highlight: true,
  },
  {
    icon: Wind,
    title: "Spa capilar",
    desc: "Hidratação profunda, massagem e escova modeladora.",
    price: "R$ 60",
    duration: "45 min",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-charcoal px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            O que fazemos
          </span>
          <h2 className="mt-4 font-display text-5xl text-cream sm:text-6xl">
            Serviços & <span className="text-gradient-gold">preços</span>
          </h2>
          <p className="mt-4 text-smoke">
            Sem pacote escondido, sem letra miúda. Você escolhe, a gente
            entrega no capricho.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, desc, price, duration, highlight }) => (
            <div
              key={title}
              className={`group relative flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                highlight
                  ? "border-gold bg-gradient-to-b from-gold/10 to-transparent"
                  : "border-cream/10 bg-ink hover:border-gold/40"
              }`}
            >
              {highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-ink">
                  Mais pedido
                </span>
              )}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/25 bg-gold/5 transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-5 w-5 text-gold" />
              </div>
              <h3 className="mt-5 font-semibold text-cream">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-smoke">
                {desc}
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-cream/10 pt-4">
                <span className="font-display text-2xl text-gold">
                  {price}
                </span>
                <span className="text-xs uppercase tracking-wide text-smoke">
                  {duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
