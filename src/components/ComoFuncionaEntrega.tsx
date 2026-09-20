import { CalendarCheck, Truck, Wallet } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";

type Step = {
  title: string;
  text: string;
};

const defaultSteps: Step[] = [
  {
    title: "Agende sua entrega",
    text: "Clique no botão e preencha seus dados no formulário da Logzz.",
  },
  {
    title: "Receba em Belém",
    text: "Entrega em 24 horas úteis, com frete grátis.",
  },
  {
    title: "Pague ao receber",
    text: "Escolha dinheiro, Pix ou cartão para pagar na entrega.",
  },
];

const icons = [CalendarCheck, Truck, Wallet];

type ComoFuncionaEntregaProps = {
  title?: string;
  steps?: Step[];
  note?: string;
};

export function ComoFuncionaEntrega({
  title = "Como funciona a entrega",
  steps = defaultSteps,
  note = "A confirmação do agendamento aparece assim que você concluir o formulário na Logzz.",
}: ComoFuncionaEntregaProps = {}) {
  return (
    <Section>
      <SectionHeading eyebrow="Passo a passo" title={title} />

      <div className="reveal mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {steps.map((step, index) => {
          const Icon = icons[index];
          return (
            <div
              key={step.title}
              className="rounded-card border border-border bg-white p-6 shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-turquoise-soft text-turquoise-dark">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-text">
                {index + 1}. {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {step.text}
              </p>
            </div>
          );
        })}
      </div>

      {note ? (
        <p className="reveal mx-auto mt-8 max-w-xl text-center text-sm text-text-secondary">
          {note}
        </p>
      ) : null}
    </Section>
  );
}
