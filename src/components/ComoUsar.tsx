import { AlertTriangle } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { howToUseSteps } from "@/config/site";

export function ComoUsar() {
  return (
    <Section bg="offwhite">
      <SectionHeading eyebrow="Modo de uso" title="Como usar" />

      <ol className="reveal mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
        {howToUseSteps.map((step, index) => (
          <li
            key={step}
            className="flex items-start gap-4 rounded-card border border-border bg-white p-5"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-turquoise font-heading text-sm font-bold text-white">
              {index + 1}
            </span>
            <span className="text-sm leading-relaxed text-text">{step}</span>
          </li>
        ))}
      </ol>

      <div className="reveal mx-auto mt-8 flex max-w-3xl items-start gap-3 rounded-card bg-magenta-soft p-4">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-magenta-dark" />
        <p className="text-sm text-magenta-dark">
          Use conforme as instruções da embalagem. Em caso de sensibilidade,
          suspenda o uso.
        </p>
      </div>
    </Section>
  );
}
