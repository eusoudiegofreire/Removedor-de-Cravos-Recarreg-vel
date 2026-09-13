import { PhotoCard } from "@/components/ui/PhotoCard";
import { Section, SectionHeading } from "@/components/ui/Section";
import { actives } from "@/config/site";
import { ativosImage } from "@/config/images";

export function Ativos() {
  return (
    <Section>
      <SectionHeading eyebrow="Fórmula" title="Ativos usados no cuidado da pele" />

      <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="reveal grid grid-cols-1 gap-4 sm:grid-cols-2">
          {actives.map((active) => (
            <div
              key={active.name}
              className="rounded-card border border-border bg-offwhite p-5"
            >
              <h3 className="font-heading text-base font-bold text-green">
                {active.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {active.text}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal">
          <PhotoCard
            src={ativosImage.src}
            alt={ativosImage.alt}
            width={ativosImage.width}
            height={ativosImage.height}
            sizes="(min-width: 1024px) 560px, 100vw"
          />
        </div>
      </div>
    </Section>
  );
}
