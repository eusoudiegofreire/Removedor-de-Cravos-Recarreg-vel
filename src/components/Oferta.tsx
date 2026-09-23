import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PhotoCard } from "@/components/ui/PhotoCard";
import { PriceInstallments, type InstallmentInfo } from "@/components/ui/PriceInstallments";
import { Section, SectionHeading } from "@/components/ui/Section";
import { site } from "@/config/site";
import { ofertaImage } from "@/config/images";

const defaultIncludes = [
  "1 unidade Clareador de Manchas 200g",
  "Produto dermatologicamente testado",
  "Hipoalergênico",
  "Livre de parabenos",
  "Pagamento somente na entrega",
  "Dinheiro, Pix ou cartão",
];

type OfertaProps = {
  eyebrow?: string;
  title?: string;
  productName?: string;
  includes?: string[];
  ctaLabel?: string;
  ctaLink?: string;
  ctaVariant?: "primary" | "secondary";
  footnote?: string;
  /** When set, replaces the default "De R$149,90 / R$127,00" block. */
  installments?: InstallmentInfo;
};

export function Oferta({
  eyebrow = "Oferta",
  title = "Garanta o seu Clareador de Manchas com pagamento na entrega",
  productName = `${site.productName} ${site.volume}`,
  includes = defaultIncludes,
  ctaLabel = site.ctaLabel,
  ctaLink = site.ctaLink,
  ctaVariant = "primary",
  footnote = "Você só paga quando receber.",
  installments,
}: OfertaProps = {}) {
  return (
    <Section id="oferta">
      <SectionHeading eyebrow={eyebrow} title={title} />

      <div className="reveal mx-auto mt-10 grid max-w-4xl grid-cols-1 items-center gap-8 rounded-card border border-border bg-offwhite p-6 sm:p-10 lg:grid-cols-2">
        <div className="flex justify-center">
          <PhotoCard
            src={ofertaImage.src}
            alt={ofertaImage.alt}
            width={ofertaImage.width}
            height={ofertaImage.height}
            sizes="(min-width: 1024px) 320px, 60vw"
            className="w-full max-w-[280px]"
          />
        </div>

        <div>
          <h3 className="font-heading text-xl font-bold text-text">
            {productName}
          </h3>

          <ul className="mt-5 space-y-2.5">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-text">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-turquoise" strokeWidth={3} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            {installments ? (
              <PriceInstallments info={installments} />
            ) : (
              <div className="flex flex-wrap items-end gap-3">
                <span className="text-base text-text-secondary line-through">
                  De R$ 149,90
                </span>
                <span className="font-heading text-3xl font-bold text-magenta">
                  R$ 127,00
                </span>
              </div>
            )}
          </div>

          <div className="mt-6">
            <Button href={ctaLink} variant={ctaVariant} size="lg" className="w-full sm:w-auto">
              {ctaLabel}
            </Button>
            <p className="mt-3 text-sm font-medium text-green">{footnote}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
