import { PhotoCard } from "@/components/ui/PhotoCard";
import { PhotoLightbox } from "@/components/ui/PhotoLightbox";
import { Section, SectionHeading } from "@/components/ui/Section";
import { depoimentosImages, type ProductImage } from "@/config/images";

type DepoimentosProps = {
  title?: string;
  text?: string;
  images?: ProductImage[];
  /** Lets visitors tap a testimonial to view it full-size, with an accessible close. */
  enlargeOnTap?: boolean;
};

const galleryClassName =
  "reveal mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0";
const itemClassName = "w-[75vw] shrink-0 snap-center sm:w-full sm:shrink";
const itemSizes = "(min-width: 640px) 33vw, 80vw";

export function Depoimentos({
  title = "Depoimentos de clientes",
  text = "Veja mensagens reais de clientes que receberam o produto e compartilharam sua experiência.",
  images = depoimentosImages,
  enlargeOnTap = false,
}: DepoimentosProps = {}) {
  return (
    <Section bg="offwhite">
      <SectionHeading eyebrow="Depoimentos" title={title} text={text} />

      {enlargeOnTap ? (
        <PhotoLightbox
          images={images}
          className={galleryClassName}
          itemClassName={itemClassName}
          sizes={itemSizes}
        />
      ) : (
        <div className={galleryClassName}>
          {images.map((image) => (
            <PhotoCard
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes={itemSizes}
              className={itemClassName}
              interactive
            />
          ))}
        </div>
      )}
    </Section>
  );
}
