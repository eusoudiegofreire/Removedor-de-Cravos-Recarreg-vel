import { Check } from "lucide-react";
import { JarIllustration } from "@/components/ProductArt";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { site } from "@/config/site";

const includes = [
  "1 unidade Amazolé 200g",
  "Produto dermatologicamente testado",
  "Hipoalergênico",
  "Livre de parabenos",
  "Pagamento somente na entrega",
  "Dinheiro, Pix ou cartão",
];

export function Oferta() {
  return (
    <Section id="oferta">
      <SectionHeading
        eyebrow="Oferta"
        title="Garanta o seu Amazolé com pagamento na entrega"
      />

      <div className="reveal mx-auto mt-10 grid max-w-4xl grid-cols-1 items-center gap-8 rounded-card border border-border bg-offwhite p-6 sm:p-10 lg:grid-cols-2">
        <div className="flex justify-center">
          <JarIllustration variant="closed" className="w-full max-w-[220px]" />
        </div>

        <div>
          <h3 className="font-heading text-xl font-bold text-text">
            {site.productName} {site.volume}
          </h3>

          <ul className="mt-5 space-y-2.5">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-text">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-turquoise" strokeWidth={3} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-end gap-3">
            <span className="text-base text-text-secondary line-through">
              De R$ 149,90
            </span>
            <span className="font-heading text-3xl font-extrabold text-magenta">
              R$ 127,00
            </span>
          </div>

          <div className="mt-6">
            <Button href={site.ctaLink} size="lg" className="w-full sm:w-auto">
              {site.ctaLabel}
            </Button>
            <p className="mt-3 text-sm font-medium text-green">
              Você só paga quando receber.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
