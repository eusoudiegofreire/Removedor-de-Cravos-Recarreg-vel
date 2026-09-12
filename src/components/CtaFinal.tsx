import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";

export function CtaFinal() {
  return (
    <section className="bg-gradient-to-br from-turquoise to-turquoise-dark py-16 sm:py-20">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-5 text-center sm:px-6">
        <h2 className="font-heading text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
          Clareie e cuide da pele com mais praticidade
        </h2>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
          Amazolé Clareador Esfoliante Corporal 200g para o cuidado de áreas
          escurecidas, manchas e regiões de atrito.
        </p>

        <div className="mt-6 flex flex-wrap items-end justify-center gap-3">
          <span className="text-base text-white/70 line-through">De R$ 149,90</span>
          <span className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
            R$ 127,00
          </span>
        </div>

        <div className="mt-8">
          <Button href={site.ctaLink} variant="secondary" size="lg">
            {site.ctaLabel}
          </Button>
          <p className="mt-3 text-sm text-white/80">
            Pagamento somente na entrega: dinheiro, Pix ou cartão.
          </p>
        </div>
      </div>
    </section>
  );
}
