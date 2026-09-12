import { TextureIllustration } from "@/components/ProductArt";
import { Section, SectionHeading } from "@/components/ui/Section";
import { actives } from "@/config/site";

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

        <div className="reveal overflow-hidden rounded-card border border-border">
          <TextureIllustration className="w-full" />
        </div>
      </div>
    </Section>
  );
}
