import { AtSign, Clock, MapPin, MessageCircle, Phone } from "lucide-react";

const HOURS = [
  ["Segunda", "Fechado"],
  ["Terça – Sexta", "09:00 – 20:00"],
  ["Sábado", "08:00 – 18:00"],
  ["Domingo", "Fechado"],
];

const WHATSAPP_URL = "https://wa.me/5511999999999";

export default function Contact() {
  return (
    <section id="contato" className="bg-ink px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Contato
          </span>
          <h2 className="mt-4 font-display text-5xl text-cream sm:text-6xl">
            Vamos marcar seu <span className="text-gradient-gold">horário</span>
          </h2>
          <p className="mt-4 text-smoke">
            Chame no WhatsApp e garanta seu horário sem fila de espera.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="flex flex-col justify-between rounded-[2rem] border border-gold/25 bg-gradient-to-br from-gold/10 via-charcoal to-charcoal p-10">
            <div>
              <MessageCircle className="h-10 w-10 text-gold" />
              <h3 className="mt-6 font-display text-3xl text-cream">
                Agende em 1 clique
              </h3>
              <p className="mt-3 max-w-sm text-smoke">
                Fale direto com a gente pelo WhatsApp e escolha o melhor
                horário com seu barbeiro preferido.
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold uppercase tracking-wide text-ink shadow-lg shadow-gold/20 transition-transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
              Chamar no WhatsApp
            </a>
          </div>

          <div className="grid gap-6">
            <div className="rounded-2xl border border-cream/10 bg-charcoal p-7">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-gold" />
                <h4 className="font-semibold text-cream">Endereço</h4>
              </div>
              <p className="mt-2 pl-8 text-sm leading-relaxed text-smoke">
                Rua dos Barbeiros, 245 — Vila Madalena
                <br />
                São Paulo, SP
              </p>
            </div>

            <div className="rounded-2xl border border-cream/10 bg-charcoal p-7">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-gold" />
                <h4 className="font-semibold text-cream">Horário</h4>
              </div>
              <dl className="mt-3 space-y-1.5 pl-8">
                {HOURS.map(([day, hours]) => (
                  <div key={day} className="flex justify-between text-sm">
                    <dt className="text-smoke">{day}</dt>
                    <dd className="text-cream/90">{hours}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex gap-4 rounded-2xl border border-cream/10 bg-charcoal p-7">
              <a
                href="tel:+5511999999999"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-cream/10 py-3 text-sm text-cream transition-colors hover:border-gold hover:text-gold"
              >
                <Phone className="h-4 w-4" />
                Ligar
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-cream/10 py-3 text-sm text-cream transition-colors hover:border-gold hover:text-gold"
              >
                <AtSign className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
