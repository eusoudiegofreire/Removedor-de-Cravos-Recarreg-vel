import { Section, SectionHeading } from "@/components/ui/Section";
import { areas } from "@/config/site";

export function ParaQueServe() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Para que serve"
        title="Cuidado clareador para áreas que costumam escurecer"
        text="O Amazolé é um creme clareador esfoliante corporal desenvolvido para o cuidado de áreas com tom irregular, manchas e regiões de atrito."
      />

      <div className="reveal mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {areas.map((area) => (
          <div
            key={area}
            className="flex items-center justify-center rounded-card border border-border bg-offwhite px-3 py-6 text-center text-sm font-semibold text-text"
          >
            {area}
          </div>
        ))}
      </div>

      <p className="reveal mt-8 text-center text-xs text-text-secondary">
        Os resultados podem variar conforme o tipo de pele, frequência de uso e
        rotina de cuidados.
      </p>
    </Section>
  );
}
