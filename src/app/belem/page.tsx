import type { Metadata } from "next";
import { ComoFuncionaEntrega } from "@/components/ComoFuncionaEntrega";
import { CtaFinal } from "@/components/CtaFinal";
import { Depoimentos } from "@/components/Depoimentos";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InformacoesComplementares } from "@/components/InformacoesComplementares";
import { Oferta } from "@/components/Oferta";
import { Resultados } from "@/components/Resultados";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { SITE_URL, site } from "@/config/site";
import {
  belem,
  ctaLabelsBelem,
  faqItemsBelem,
  heroPriceNoteBelem,
  ofertaIncludesBelem,
  pricingBelem,
} from "@/config/belem";

const title = `${site.productName} com entrega em Belém`;
const description =
  "Clareador de Manchas Esfoliante Corporal com entrega em Belém. Pagamento somente na entrega: dinheiro, Pix ou cartão. Agende já a sua.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/belem",
  },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/belem`,
  },
  twitter: {
    title,
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: site.productName,
  description,
  brand: {
    "@type": "Brand",
    name: site.manufacturer,
  },
  category: "Cuidados com a pele",
  url: `${SITE_URL}/belem`,
  areaServed: {
    "@type": "City",
    name: "Belém",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "BRL",
    price: site.price.to.toFixed(2),
    availability: "https://schema.org/InStock",
    areaServed: {
      "@type": "City",
      name: "Belém",
    },
    url: `${SITE_URL}/belem`,
  },
};

export default function BelemPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header
        ctaLabel={ctaLabelsBelem.header}
        ctaLink={belem.ctaLink}
        mobileLabel={ctaLabelsBelem.headerMobile}
        variant="secondary"
      />
      <div className="compact-sections">
        <main className="pb-24 sm:pb-0">
          <Hero
            layout="compact"
            headline="Clareador corporal de manchas — 200g"
            subheadline="Entrega em Belém com frete grátis, em 24 horas úteis."
            bullets={[]}
            priceNote={heroPriceNoteBelem}
            installments={pricingBelem}
            trustLine=""
            ctaLabel={ctaLabelsBelem.hero}
            ctaLink={belem.ctaLink}
            ctaVariant="secondary"
            paymentNote="Preencha seus dados na próxima etapa. Você não paga agora."
          />

          <Depoimentos
            title="Depoimentos de clientes"
            text="Veja mensagens de clientes que compartilharam sua experiência."
            enlargeOnTap
          />

          <Resultados
            title="Resultados reais de quem usou o Clareador de Manchas"
            ctaLabel={ctaLabelsBelem.resultados}
            ctaLink={belem.ctaLink}
            ctaVariant="secondary"
            ctaNote="Frete grátis em Belém. Pagamento somente na entrega."
          />

          <ComoFuncionaEntrega />

          <Oferta
            title="Garanta o seu Clareador de Manchas em Belém"
            includes={ofertaIncludesBelem}
            installments={pricingBelem}
            ctaLabel={ctaLabelsBelem.oferta}
            ctaLink={belem.ctaLink}
            ctaVariant="secondary"
            footnote="Você paga somente quando receber."
          />

          <InformacoesComplementares />

          <Faq items={faqItemsBelem} />

          <CtaFinal
            title="Agende sua entrega em Belém"
            text="Clareador de Manchas Esfoliante Corporal 200g. Frete grátis em Belém e entrega em 24 horas úteis."
            priceLabel="R$ 127,00 à vista"
            ctaLabel={ctaLabelsBelem.fechamento}
            ctaLink={belem.ctaLink}
            footnote="Pagamento somente na entrega: dinheiro, Pix ou cartão."
          />
        </main>
      </div>
      <Footer />
      <StickyMobileCta
        ctaLabel={ctaLabelsBelem.stickyMobile}
        ctaLink={belem.ctaLink}
        ctaVariant="secondary"
        priceLine="R$ 127,00 à vista"
        priceSubLine="Pague na entrega"
      />
    </>
  );
}
