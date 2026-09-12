import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { kits, site } from "@/config/site";

export function Kits() {
  return (
    <Section bg="offwhite">
      <SectionHeading eyebrow="Kits opcionais" title="Escolha sua opção" />

      <div className="reveal mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {kits.map((kit) => (
          <div
            key={kit.id}
            className={`relative flex flex-col rounded-card border bg-white p-6 text-center shadow-sm ${
              kit.featured ? "border-turquoise ring-1 ring-turquoise" : "border-border"
            }`}
          >
            {kit.featured ? (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-button bg-turquoise px-3 py-1 text-xs font-bold uppercase text-white">
                Mais escolhido
              </span>
            ) : null}

            <h3 className="font-heading text-lg font-bold text-text">{kit.label}</h3>

            <p className="mt-3 font-heading text-3xl font-extrabold text-magenta">
              R$ {kit.price.toFixed(2).replace(".", ",")}
            </p>

            {kit.unitPrice ? (
              <p className="mt-1 text-sm text-text-secondary">
                Sai por R$ {kit.unitPrice.toFixed(2).replace(".", ",")} cada
              </p>
            ) : null}

            <p className="mt-3 text-sm font-medium text-green">{kit.highlight}</p>

            <Button
              href={site.ctaLink}
              variant={kit.featured ? "primary" : "outline"}
              size="md"
              className="mt-6 w-full"
            >
              {site.ctaLabel}
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
}
