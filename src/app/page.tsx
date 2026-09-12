import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBlock from "@/components/TrustBlock";
import Benefits from "@/components/Benefits";
import ProductGallery from "@/components/ProductGallery";
import SocialProof from "@/components/SocialProof";
import HowItWorks from "@/components/HowItWorks";
import Offer from "@/components/Offer";
import FAQ from "@/components/FAQ";
import { faqJsonLd } from "@/data/faq";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { SITE_URL, site } from "@/config/site";

export const metadata: Metadata = {
  title: `${site.name} | Frete grátis e pagamento na entrega`,
  description: site.description,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    url: SITE_URL,
    title: `${site.name} | Frete grátis e pagamento na entrega`,
    description: site.description,
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBlock />
        <Benefits />
        <ProductGallery />
        <SocialProof />
        <HowItWorks />
        <Offer />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
