import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { SITE_URL, site } from "@/config/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} | Frete grátis e pagamento na entrega`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "removedor de cravos",
    "removedor de cravos recarregável",
    "limpeza de pele em casa",
    "aspirador de cravos",
    "cuidado facial",
    "pagamento na entrega",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: site.name,
    locale: site.locale,
    title: `${site.name} | Frete grátis e pagamento na entrega`,
    description: site.description,
    images: [
      {
        url: "/images/produto-kit-completo.png",
        width: 1200,
        height: 1200,
        alt: "Removedor de Cravos Recarregável com ponteiras",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Frete grátis e pagamento na entrega`,
    description: site.description,
    images: ["/images/produto-kit-completo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: site.name,
  description: site.description,
  image: [
    `${SITE_URL}/images/produto-kit-completo.png`,
    `${SITE_URL}/images/produto-ponteiras.png`,
  ],
  brand: {
    "@type": "Brand",
    name: site.name,
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "BRL",
    price: site.price.current.toFixed(2),
    availability: "https://schema.org/InStock",
    url: SITE_URL,
    shippingDetails: {
      "@type": "OfferShippingDetails",
      shippingRate: {
        "@type": "MonetaryAmount",
        value: "0",
        currency: "BRL",
      },
      deliveryTime: {
        "@type": "ShippingDeliveryTime",
        maxValue: 24,
        unitCode: "HUR",
      },
    },
    hasMerchantReturnPolicy: {
      "@type": "MerchantReturnPolicy",
      returnPolicyCategory:
        "https://schema.org/MerchantReturnFiniteReturnWindow",
      merchantReturnDays: 7,
      returnMethod: "https://schema.org/ReturnByMail",
      returnFees: "https://schema.org/FreeReturn",
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
