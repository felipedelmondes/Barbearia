import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Rafael Souza",
    role: "Cliente desde 2019",
    text: "Melhor barbearia que já frequentei. O acabamento é sempre impecável e o atendimento é excelente.",
  },
  {
    name: "Bruno Alencar",
    role: "Cliente desde 2021",
    text: "A barba na navalha é outro nível. Ambiente agradável e equipe muito profissional.",
  },
  {
    name: "Diego Martins",
    role: "Cliente desde 2023",
    text: "Marcar horário é fácil, nunca esperei mais de 5 minutos. Corte sempre no capricho.",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-charcoal px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Depoimentos
          </span>
          <h2 className="mt-4 font-display text-5xl text-cream sm:text-6xl">
            Quem corta com a gente{" "}
            <span className="text-gradient-gold">recomenda</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map(({ name, role, text }) => (
            <div
              key={name}
              className="flex flex-col rounded-2xl border border-cream/10 bg-ink p-7 transition-colors hover:border-gold/30"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-smoke">
                "{text}"
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-cream/10 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 font-display text-lg text-gold">
                  {name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-cream">{name}</p>
                  <p className="text-xs text-smoke">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
