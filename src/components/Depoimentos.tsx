import { MediaPlaceholder } from "@/components/ProductArt";
import { Section, SectionHeading } from "@/components/ui/Section";

export function Depoimentos() {
  return (
    <Section bg="offwhite">
      <SectionHeading
        eyebrow="Depoimentos"
        title="Experiências de quem já usou"
      />

      <div className="reveal mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <MediaPlaceholder kind="photo" label="Print de avaliação" />
        <MediaPlaceholder kind="photo" label="Comentário de cliente" />
        <MediaPlaceholder kind="video" label="Vídeo curto" />
        <MediaPlaceholder kind="photo" label="Foto real enviada por cliente" />
      </div>

      <p className="reveal mx-auto mt-8 max-w-xl text-center text-sm text-text-secondary">
        Depoimentos reais de clientes podem ser inseridos aqui.
      </p>
    </Section>
  );
}
