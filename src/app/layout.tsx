import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { SITE_URL, site } from "@/config/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const title = `${site.productName} | Pagamento na Entrega`;
const description =
  "Amazolé é um clareador esfoliante corporal para axilas, virilhas, joelhos e cotovelos. Dermatologicamente testado, hipoalergênico e livre de parabenos. Pagamento somente na entrega.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description,
  keywords: [
    "Amazolé",
    "clareador esfoliante corporal",
    "clareador de manchas",
    "esfoliante corporal",
    "clarear axilas",
    "clarear virilha",
    "pagamento na entrega",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: site.name,
    title,
    description,
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
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
  url: SITE_URL,
  offers: {
    "@type": "Offer",
    priceCurrency: "BRL",
    price: site.price.to.toFixed(2),
    availability: "https://schema.org/InStock",
    url: SITE_URL,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
