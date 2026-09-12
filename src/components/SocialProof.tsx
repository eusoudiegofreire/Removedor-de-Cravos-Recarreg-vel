const placeholders = [
  {
    title: "Vídeo de demonstração",
    hint: "Espaço reservado para vídeo",
    icon: (
      <path
        d="M8 6l10 6-10 6V6z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Antes e depois",
    hint: "Espaço reservado para imagem real",
    icon: (
      <path
        d="M4 4h7v16H4V4zm9 0h7v16h-7V4z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Fotos reais do produto",
    hint: "Espaço reservado para fotos de clientes",
    icon: (
      <path
        d="M4 8h3l1.5-2h7L17 8h3a1 1 0 011 1v9a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1z M12 17a4 4 0 100-8 4 4 0 000 8z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Depoimentos reais",
    hint: "Espaço reservado, caso existam depois",
    icon: (
      <path
        d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function SocialProof() {
  return (
    <section className="bg-rose-baby/50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Veja o produto na prática
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            Confira demonstrações reais do produto e veja como ele pode fazer
            parte da sua rotina de cuidados faciais.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {placeholders.map((item) => (
            <div
              key={item.title}
              className="flex aspect-[4/5] flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed border-rose-light bg-white px-4 text-center"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-baby text-rose-metal">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  {item.icon}
                </svg>
              </span>
              <span className="text-sm font-semibold text-ink">{item.title}</span>
              <span className="text-xs text-ink-soft">{item.hint}</span>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-ink-soft">
          Resultados podem variar de pessoa para pessoa conforme tipo de
          pele, forma de uso e rotina de cuidados.
        </p>
      </div>
    </section>
  );
}
