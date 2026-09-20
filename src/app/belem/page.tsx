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
  faqItemsBelem,
  heroPriceNoteBelem,
  ofertaIncludesBelem,
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
      <Header ctaLabel={belem.ctaLabel} ctaLink={belem.ctaLink} mobileLabel="Agendar" />
      <main className="pb-24 sm:pb-0">
        <Hero
          layout="compact"
          headline="Clareador de Manchas 200g com entrega em Belém"
          subheadline="Agende sua entrega com frete grátis e receba em 24 horas úteis. Pague somente quando o produto chegar."
          bullets={[]}
          priceNote={heroPriceNoteBelem}
          trustLine=""
          ctaLabel={belem.ctaLabel}
          ctaLink={belem.ctaLink}
          paymentNote="Na próxima etapa, preencha seus dados na Logzz para concluir o agendamento. Você não paga agora."
        />

        <Depoimentos
          title="Depoimentos de clientes"
          text="Veja mensagens reais de clientes que receberam o produto em Belém. Toque em um print para ampliar."
          enlargeOnTap
        />

        <Resultados
          title="Resultados reais de quem usou o Clareador de Manchas"
          ctaLabel={belem.ctaLabel}
          ctaLink={belem.ctaLink}
          ctaNote="Frete grátis em Belém. Pagamento somente na entrega."
        />

        <ComoFuncionaEntrega />

        <Oferta
          title="Garanta o seu Clareador de Manchas em Belém"
          includes={ofertaIncludesBelem}
          ctaLabel={belem.ctaLabel}
          ctaLink={belem.ctaLink}
          footnote="Você paga somente quando receber."
        />

        <InformacoesComplementares />

        <Faq items={faqItemsBelem} />

        <CtaFinal
          title="Agende sua entrega em Belém"
          text="Clareador de Manchas Esfoliante Corporal 200g. Frete grátis em Belém e entrega em 24 horas úteis."
          ctaLabel={belem.ctaLabel}
          ctaLink={belem.ctaLink}
          footnote="Pagamento somente na entrega: dinheiro, Pix ou cartão."
        />
      </main>
      <Footer />
      <StickyMobileCta ctaLabel={belem.ctaLabel} ctaLink={belem.ctaLink} />
    </>
  );
}
