import { Section, SectionHeading } from "@/components/ui/Section";
import { areas } from "@/config/site";

type ParaQueServeProps = {
  title?: string;
  text?: string;
  items?: string[];
};

export function ParaQueServe({
  title = "Cuidado clareador para áreas que costumam escurecer",
  text = "O Amazolé é um creme clareador esfoliante corporal desenvolvido para o cuidado de áreas com tom irregular, manchas e regiões de atrito.",
  items = areas,
}: ParaQueServeProps = {}) {
  return (
    <Section>
      <SectionHeading eyebrow="Para que serve" title={title} text={text} />

      <div className="reveal mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {items.map((area) => (
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
