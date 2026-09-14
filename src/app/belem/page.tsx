import type { Metadata } from "next";
import { Ativos } from "@/components/Ativos";
import { Beneficios } from "@/components/Beneficios";
import { ComoUsar } from "@/components/ComoUsar";
import { CtaFinal } from "@/components/CtaFinal";
import { Depoimentos } from "@/components/Depoimentos";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Oferta } from "@/components/Oferta";
import { ParaQueServe } from "@/components/ParaQueServe";
import { Resultados } from "@/components/Resultados";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { TrustBlock } from "@/components/TrustBlock";
import { SITE_URL, site } from "@/config/site";
import {
  areasBelem,
  belem,
  faqItemsBelem,
  heroBulletsBelem,
  ofertaIncludesBelem,
  trustStepsBelem,
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
      <Header ctaLabel={belem.ctaLabel} ctaLink={belem.ctaLink} />
      <main className="pb-24 sm:pb-0">
        <Hero
          headline="Clareador de Manchas Esfoliante Corporal com entrega em Belém"
          subheadline="Clareador esfoliante corporal para o cuidado de áreas escurecidas e tom irregular da pele. Produto adulto, dermatologicamente testado, com pagamento somente na entrega em Belém."
          bullets={heroBulletsBelem}
          trustLine="Você recebe em Belém e paga somente quando o produto chegar."
          ctaLabel={belem.ctaLabel}
          ctaLink={belem.ctaLink}
        />
        <TrustBlock
          title="Receba em Belém e pague só na entrega"
          text="Você agenda sua entrega, recebe o Clareador de Manchas no endereço informado em Belém e paga somente quando o produto chegar."
          steps={trustStepsBelem}
        />
        <ParaQueServe
          text="O Clareador de Manchas é um esfoliante corporal para o cuidado de áreas com tom irregular, manchas e regiões de atrito."
          items={areasBelem}
        />
        <Beneficios />
        <ComoUsar />
        <Ativos />
        <Resultados title="Resultados reais de quem usou o Clareador de Manchas" />
        <Depoimentos title="Depoimentos de clientes que receberam em casa" />
        <Oferta
          title="Garanta o seu Clareador de Manchas em Belém"
          includes={ofertaIncludesBelem}
          ctaLabel={belem.ctaLabel}
          ctaLink={belem.ctaLink}
          footnote="Você paga somente quando receber."
        />
        <Faq items={faqItemsBelem} />
        <CtaFinal
          title="Agende sua entrega em Belém"
          text="Clareador de Manchas Esfoliante Corporal 200g para cuidado de áreas escurecidas e tom irregular da pele."
          ctaLabel={belem.ctaLabel}
          ctaLink={belem.ctaLink}
          footnote="Você paga somente quando receber."
        />
      </main>
      <Footer />
      <StickyMobileCta ctaLabel={belem.ctaLabel} ctaLink={belem.ctaLink} />
    </>
  );
}
