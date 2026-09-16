import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Home, PackageCheck, Wallet } from "lucide-react";
import { Footer } from "@/components/Footer";
import { GOOGLE_ADS_CONVERSION, site } from "@/config/site";

export const metadata: Metadata = {
  title: "Entrega agendada",
  description: "Obrigado pelo agendamento. Entregaremos o seu pedido na sua casa.",
  robots: {
    index: false,
    follow: false,
  },
};

const nextSteps = [
  {
    icon: Home,
    text: "Entregaremos o produto no endereço informado no agendamento.",
  },
  {
    icon: PackageCheck,
    text: "Receba e confira o seu Clareador de Manchas.",
  },
  {
    icon: Wallet,
    text: "Pague somente na entrega: dinheiro, Pix ou cartão.",
  },
];

export default function ObrigadoPage() {
  return (
    <>
      {/* Google Ads conversion: Pixel - Removedor de manchas conversion page */}
      <script
        id="google-ads-conversion"
        dangerouslySetInnerHTML={{
          __html: `gtag('event', 'conversion', {
  'send_to': '${GOOGLE_ADS_CONVERSION}',
  'transaction_id': ''
});`,
        }}
      />
      <header className="border-b border-border bg-white">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-center px-5 py-4 sm:px-6 lg:px-8">
          <span className="font-heading text-xl font-extrabold tracking-tight text-text">
            Amazol<span className="text-turquoise">é</span>
          </span>
        </div>
      </header>

      <main className="flex flex-1 items-center bg-offwhite py-16 sm:py-24">
        <div className="enter mx-auto w-full max-w-xl px-5 text-center sm:px-6">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-soft">
            <CheckCircle2 className="h-11 w-11 text-green" strokeWidth={2} />
          </div>

          <p className="mt-6 inline-flex items-center rounded-button bg-turquoise-soft px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-turquoise-dark">
            Agendamento confirmado
          </p>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-text sm:text-4xl">
            Parabéns! Sua entrega foi agendada.
          </h1>

          <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
            Obrigado pelo agendamento. Entregaremos o seu {site.productName} na
            sua casa.
          </p>

          <div className="mt-10 rounded-card border border-border bg-white p-6 text-left shadow-sm sm:p-8">
            <h2 className="font-heading text-lg font-bold text-text">
              Próximos passos
            </h2>
            <ul className="mt-5 space-y-4">
              {nextSteps.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-turquoise-soft text-turquoise-dark">
                    <Icon className="h-4.5 w-4.5" strokeWidth={2} />
                  </span>
                  <span className="pt-1.5 text-sm leading-relaxed text-text">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 text-sm font-medium text-green">
            Você só paga quando receber.
          </p>

          <Link
            href="/"
            className="mt-6 inline-block text-sm font-semibold text-turquoise-dark underline-offset-4 hover:underline"
          >
            Voltar para a página inicial
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
