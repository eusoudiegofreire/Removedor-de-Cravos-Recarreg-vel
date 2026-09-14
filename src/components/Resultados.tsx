import { PhotoCard } from "@/components/ui/PhotoCard";
import { Section, SectionHeading } from "@/components/ui/Section";
import { resultadosImages, type ProductImage } from "@/config/images";

type ResultadosProps = {
  title?: string;
  text?: string;
  images?: ProductImage[];
};

export function Resultados({
  title = "Resultados reais de quem usou",
  text = "Veja registros reais de uso do produto. Os resultados podem variar conforme o tipo de pele, frequência de uso e rotina de cuidados.",
  images = resultadosImages,
}: ResultadosProps = {}) {
  return (
    <Section>
      <SectionHeading eyebrow="Resultados" title={title} text={text} />

      <div className="reveal mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4">
        {images.map((image) => (
          <PhotoCard
            key={image.src}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 80vw"
            className="w-[80vw] shrink-0 snap-center sm:w-full sm:shrink"
            interactive
          />
        ))}
      </div>
    </Section>
  );
}
