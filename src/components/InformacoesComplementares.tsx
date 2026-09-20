import { AlertTriangle, ChevronDown } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { actives, benefits, howToUseSteps } from "@/config/site";
import { areasBelem } from "@/config/belem";

type InformacoesComplementaresProps = {
  title?: string;
  areas?: string[];
};

export function InformacoesComplementares({
  title = "Informações complementares",
  areas = areasBelem,
}: InformacoesComplementaresProps = {}) {
  return (
    <Section bg="offwhite">
      <SectionHeading eyebrow="Saiba mais" title={title} />

      <div className="reveal mx-auto mt-10 max-w-3xl divide-y divide-border rounded-card border border-border bg-white">
        <details className="group px-5 py-4 sm:px-6" open>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-sm font-bold text-text transition-colors duration-200 ease-snappy hover:text-turquoise-dark sm:text-base">
            Para que serve
            <ChevronDown className="h-5 w-5 shrink-0 text-turquoise transition-transform duration-300 ease-snappy group-open:rotate-180" />
          </summary>
          <div className="mt-3">
            <p className="text-sm leading-relaxed text-text-secondary">
              Clareador esfoliante corporal para o cuidado de áreas com tom
              irregular, manchas e regiões de atrito:
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {areas.map((area) => (
                <span
                  key={area}
                  className="rounded-button bg-offwhite px-3 py-1.5 text-xs font-semibold text-text"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </details>

        <details className="group px-5 py-4 sm:px-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-sm font-bold text-text transition-colors duration-200 ease-snappy hover:text-turquoise-dark sm:text-base">
            Benefícios
            <ChevronDown className="h-5 w-5 shrink-0 text-turquoise transition-transform duration-300 ease-snappy group-open:rotate-180" />
          </summary>
          <ul className="mt-3 space-y-2.5">
            {benefits.map((benefit) => (
              <li key={benefit.title} className="text-sm leading-relaxed text-text-secondary">
                <span className="font-semibold text-text">{benefit.title}:</span>{" "}
                {benefit.text}
              </li>
            ))}
          </ul>
        </details>

        <details className="group px-5 py-4 sm:px-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-sm font-bold text-text transition-colors duration-200 ease-snappy hover:text-turquoise-dark sm:text-base">
            Ativos da fórmula
            <ChevronDown className="h-5 w-5 shrink-0 text-turquoise transition-transform duration-300 ease-snappy group-open:rotate-180" />
          </summary>
          <ul className="mt-3 space-y-2.5">
            {actives.map((active) => (
              <li key={active.name} className="text-sm leading-relaxed text-text-secondary">
                <span className="font-semibold text-green">{active.name}:</span>{" "}
                {active.text}
              </li>
            ))}
          </ul>
        </details>

        <details className="group px-5 py-4 sm:px-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-sm font-bold text-text transition-colors duration-200 ease-snappy hover:text-turquoise-dark sm:text-base">
            Modo de uso
            <ChevronDown className="h-5 w-5 shrink-0 text-turquoise transition-transform duration-300 ease-snappy group-open:rotate-180" />
          </summary>
          <ol className="mt-3 space-y-2">
            {howToUseSteps.map((step, index) => (
              <li key={step} className="flex gap-2 text-sm leading-relaxed text-text-secondary">
                <span className="font-semibold text-text">{index + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
          <div className="mt-4 flex items-start gap-2.5 rounded-card bg-magenta-soft p-3">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-magenta-dark" />
            <p className="text-sm leading-relaxed text-magenta-dark">
              Use conforme as instruções da embalagem. Em caso de sensibilidade,
              suspenda o uso.
            </p>
          </div>
        </details>
      </div>
    </Section>
  );
}
