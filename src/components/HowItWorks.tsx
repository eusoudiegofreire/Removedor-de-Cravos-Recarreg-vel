import CTAButton from "./CTAButton";

const steps = [
  {
    number: "1",
    title: "Clique em “Agendar minha entrega”",
  },
  {
    number: "2",
    title: "Preencha seus dados na página de agendamento",
  },
  {
    number: "3",
    title: "Receba em até 24 horas",
  },
  {
    number: "4",
    title: "Pague somente quando o produto chegar",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Como receber o seu
          </h2>
        </div>

        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.number}
              className="relative rounded-3xl bg-rose-baby px-5 py-8 text-center shadow-sm"
            >
              <span className="font-display mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-accent text-lg font-semibold text-white">
                {step.number}
              </span>
              <p className="mt-4 text-sm font-medium leading-relaxed text-ink sm:text-base">
                {step.title}
              </p>
            </li>
          ))}
        </ol>

        <div className="mx-auto mt-10 max-w-xl text-center">
          <p className="text-sm leading-relaxed text-ink-soft sm:text-base">
            Sem pagamento antecipado. Você escolhe pagar em dinheiro, Pix ou
            cartão no momento da entrega.
          </p>
          <div className="mt-6">
            <CTAButton />
          </div>
        </div>
      </div>
    </section>
  );
}
