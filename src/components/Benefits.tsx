const benefits = [
  {
    title: "Ajuda na limpeza da pele",
    text: "Auxilia na remoção de cravos, oleosidade e impurezas.",
    icon: (
      <path
        d="M12 3c3 3 6 6.5 6 10a6 6 0 01-12 0c0-3.5 3-7 6-10z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "3 níveis de intensidade",
    text: "Ajuste a intensidade conforme sua preferência de uso.",
    icon: (
      <path
        d="M4 20V10m8 10V4m8 16v-7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Diferentes ponteiras",
    text: "Acompanha bicos diferentes para adaptar o uso na rotina de cuidados.",
    icon: (
      <path
        d="M9 3h6l1 5-4 13-4-13 1-5z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Recarregável",
    text: "Produto recarregável, prático para manter sempre por perto.",
    icon: (
      <path
        d="M17 7h1a2 2 0 012 2v1h1v4h-1v1a2 2 0 01-2 2h-1M7 7H6a2 2 0 00-2 2v6a2 2 0 002 2h1M7 5v14M17 5v14M11 10l-1 2h2l-1 2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Uso em casa",
    text: "Uma opção simples para incluir no cuidado facial sem sair de casa.",
    icon: (
      <path
        d="M3 11l9-7 9 7M5 10v9a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1v-9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Compra mais segura",
    text: "Frete grátis, entrega rápida, pagamento na entrega e garantia de 7 dias.",
    icon: (
      <path
        d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function Benefits() {
  return (
    <section className="bg-rose-baby/50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Um cuidado facial mais prático para sua rotina
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-3xl bg-white p-6 shadow-sm transition-shadow hover:shadow-card"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-light/60 text-rose-metal">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  {benefit.icon}
                </svg>
              </span>
              <h3 className="mt-4 text-base font-semibold text-ink sm:text-lg">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
