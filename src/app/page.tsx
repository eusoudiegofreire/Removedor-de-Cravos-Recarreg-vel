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

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-24 sm:pb-0">
        <Hero />
        <TrustBlock />
        <ParaQueServe />
        <Beneficios />
        <ComoUsar />
        <Ativos />
        <Resultados />
        <Depoimentos />
        <Oferta />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
