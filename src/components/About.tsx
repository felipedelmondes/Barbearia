import { Award, Scissors, Users } from "lucide-react";

const FEATURES = [
  {
    icon: Scissors,
    title: "Técnica apurada",
    desc: "Barbeiros treinados nas melhores academias do país, com atualização constante.",
  },
  {
    icon: Award,
    title: "Produtos premium",
    desc: "Linha própria de cuidados, óleos e pomadas selecionadas a dedo.",
  },
  {
    icon: Users,
    title: "Ambiente único",
    desc: "Música boa, café, cerveja gelada e papo reto enquanto você é atendido.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="bg-ink px-6 py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        <div className="relative">
          <div className="aspect-square w-full overflow-hidden rounded-[2rem] border border-gold/20 bg-gradient-to-br from-charcoal-light to-ink">
            <div className="flex h-full items-center justify-center">
              <Scissors className="h-32 w-32 rotate-12 text-gold/10" />
            </div>
          </div>
          <div className="absolute -top-4 right-0 rounded-2xl border border-gold/25 bg-charcoal px-5 py-4 shadow-xl sm:-right-6 sm:-top-6 sm:px-6 sm:py-5">
            <p className="font-display text-3xl text-gold">2012</p>
            <p className="text-xs uppercase tracking-wide text-smoke">
              Ano de fundação
            </p>
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Nossa história
          </span>
          <h2 className="mt-4 font-display text-5xl leading-none text-cream sm:text-6xl">
            Tradição de barbeiro,
            <br />
            <span className="text-gradient-gold">alma contemporânea</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-smoke">
            A Navalha D'Ouro nasceu do desejo de resgatar o ritual clássico da
            barbearia — navalha, toalha quente, conversa boa — com o padrão
            de acabamento que o barbeiro moderno exige. Cada corte é um
            projeto, cada cliente sai com a régua certa.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-1">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold/25 bg-gold/5">
                  <Icon className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-cream">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-smoke">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
