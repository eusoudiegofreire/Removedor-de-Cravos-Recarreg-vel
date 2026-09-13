import { AlertTriangle } from "lucide-react";
import { PhotoCard } from "@/components/ui/PhotoCard";
import { Section, SectionHeading } from "@/components/ui/Section";
import { howToUseSteps } from "@/config/site";
import { texturaImage } from "@/config/images";

export function ComoUsar() {
  return (
    <Section bg="offwhite">
      <SectionHeading eyebrow="Modo de uso" title="Como usar" />

      <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <ol className="reveal grid grid-cols-1 gap-4 sm:grid-cols-2">
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

        <div className="reveal order-first lg:order-last">
          <PhotoCard
            src={texturaImage.src}
            alt={texturaImage.alt}
            width={texturaImage.width}
            height={texturaImage.height}
            sizes="(min-width: 1024px) 560px, 100vw"
          />
        </div>
      </div>

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
