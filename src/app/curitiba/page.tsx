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
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SITE_URL, site } from "@/config/site";
import {
  CHECKOUT_PATH,
  PRODUCT_NAME_CURITIBA,
  areasCuritiba,
  ctaLabelsCuritiba,
  faqItemsCuritiba,
  heroPriceNoteCuritiba,
  ofertaIncludesCuritiba,
  pricingCuritiba,
} from "@/config/curitiba";

const title = `${PRODUCT_NAME_CURITIBA} em Curitiba`;
const description =
  "Clareador de manchas corporal em Curitiba. Agende sua entrega pelo site, pague somente quando receber e confirme seus dados pelo WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/curitiba",
  },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/curitiba`,
  },
  twitter: {
    title,
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: PRODUCT_NAME_CURITIBA,
  description,
  brand: {
    "@type": "Brand",
    name: site.manufacturer,
  },
  category: "Cuidados com a pele",
  url: `${SITE_URL}/curitiba`,
  areaServed: {
    "@type": "City",
    name: "Curitiba",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "BRL",
    price: site.price.to.toFixed(2),
    availability: "https://schema.org/InStock",
    areaServed: {
      "@type": "City",
      name: "Curitiba",
    },
    url: `${SITE_URL}/curitiba`,
  },
};

export default function CuritibaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header showCta={false} />
      <div className="compact-sections">
        <main>
          <Hero
            layout="compact"
            headline="Clareador corporal para manchas e áreas escurecidas, com entrega em Curitiba"
            subheadline="Agende sua entrega pelo site e pague somente quando receber. Para cuidados com axilas, virilhas, joelhos e cotovelos."
            bullets={[]}
            priceNote={heroPriceNoteCuritiba}
            showPrice={false}
            trustLine=""
            ctaLabel={ctaLabelsCuritiba.hero}
            ctaLink={CHECKOUT_PATH}
            ctaVariant="secondary"
            paymentNote="Preencha seus dados para fazer o agendamento da entrega."
          />

          <Resultados
            title="Resultados reais de quem usou o Clareador de Manchas"
            ctaLabel={ctaLabelsCuritiba.resultados}
            ctaLink={CHECKOUT_PATH}
            ctaVariant="secondary"
            ctaNote="Pagamento somente na entrega."
          />

          <Depoimentos
            title="Depoimentos de clientes"
            text="Veja mensagens de clientes que compartilharam sua experiência."
            enlargeOnTap
          />

          <ComoFuncionaEntrega
            title="Como funciona a entrega em Curitiba"
            steps={[
              {
                title: "Faça seu agendamento",
                text: "Preencha seus dados de entrega aqui no site.",
              },
              {
                title: "Confirmação pelo WhatsApp",
                text: "Nossa equipe confirma seus dados e a disponibilidade para o seu bairro.",
              },
              {
                title: "Pague ao receber",
                text: "Escolha dinheiro, Pix ou cartão no momento da entrega.",
              },
            ]}
            note="Após preencher o formulário, seu agendamento será registrado e confirmado pelo WhatsApp."
          />

          <Oferta
            title="Garanta o seu Clareador de Manchas em Curitiba"
            productName={PRODUCT_NAME_CURITIBA}
            includes={ofertaIncludesCuritiba}
            installments={pricingCuritiba}
            ctaLabel={ctaLabelsCuritiba.oferta}
            ctaLink={CHECKOUT_PATH}
            ctaVariant="secondary"
            footnote="Você paga somente quando receber."
          />

          <InformacoesComplementares areas={areasCuritiba} />

          <Section bg="offwhite">
            <SectionHeading
              eyebrow="Agendamento"
              title="Faça seu agendamento em Curitiba"
              text="Preencha seus dados em poucos passos para agendar sua entrega. Confirmamos tudo pelo WhatsApp antes do envio."
            />
            <div className="reveal mx-auto mt-10 flex justify-center">
              <Button href={CHECKOUT_PATH} variant="secondary" size="lg">
                {ctaLabelsCuritiba.hero}
              </Button>
            </div>
          </Section>

          <Faq items={faqItemsCuritiba} />

          <CtaFinal
            title="Receba o Clareador de Manchas em Curitiba"
            text="Clareador de Manchas Amazon Kaps Cicatridiva 200g. Faça seu agendamento e pague somente quando receber."
            priceLabel="R$ 127,00 à vista"
            ctaLabel={ctaLabelsCuritiba.fechamento}
            ctaLink={CHECKOUT_PATH}
            footnote="Pagamento somente na entrega: dinheiro, Pix ou cartão."
          />
        </main>
      </div>
      <Footer />
    </>
  );
}
