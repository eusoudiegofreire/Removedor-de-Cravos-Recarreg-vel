import CTAButton from "./CTAButton";

const steps = [
  {
    title: "Agende sua entrega",
    icon: (
      <path
        d="M8 7V3m8 4V3M4 11h16M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Receba em até 24 horas",
    icon: (
      <path
        d="M12 22a10 10 0 100-20 10 10 0 000 20zM12 6v6l4 2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Pague ao receber",
    icon: (
      <path
        d="M2 8h20M2 8v10a2 2 0 002 2h16a2 2 0 002-2V8M2 8V6a2 2 0 012-2h16a2 2 0 012 2v2M6 16h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Dinheiro, Pix ou cartão",
    icon: (
      <path
        d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 4v12m4-9c0-1.66-1.79-3-4-3s-4 1.34-4 3 1.79 3 4 3 4 1.34 4 3-1.79 3-4 3-4-1.34-4-3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function TrustBlock() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
        <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
          Você só paga quando receber
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
          Agende sua entrega pela página, receba o produto em até 24 horas e
          pague somente no momento da entrega. Mais segurança para comprar
          sem precisar pagar antecipado.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="flex flex-col items-center gap-3 rounded-3xl bg-rose-baby px-4 py-7 shadow-sm"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-accent shadow-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  {step.icon}
                </svg>
              </span>
              <span className="text-sm font-semibold text-ink sm:text-base">
                {step.title}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <CTAButton />
        </div>
      </div>
    </section>
  );
}
