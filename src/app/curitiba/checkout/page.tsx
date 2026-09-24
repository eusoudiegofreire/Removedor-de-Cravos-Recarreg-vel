import type { Metadata } from "next";
import { CuritibaCheckoutBody } from "@/components/CuritibaCheckoutBody";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Finalizar agendamento — Clareador de Manchas em Curitiba",
  description: "Preencha seus dados para agendar a entrega do Clareador de Manchas em Curitiba. Pague somente quando receber.",
  alternates: {
    canonical: "/curitiba/checkout",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function CuritibaCheckoutPage() {
  return (
    <>
      <Header showCta={false} />
      <main className="bg-offwhite">
        <div className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <CuritibaCheckoutBody />
        </div>
      </main>
      <Footer />
    </>
  );
}
