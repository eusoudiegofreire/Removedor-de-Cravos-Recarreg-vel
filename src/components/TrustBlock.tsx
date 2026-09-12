import { CalendarCheck, PackageCheck, SearchCheck, Wallet } from "lucide-react";
import { JarIllustration } from "@/components/ProductArt";
import { Section, SectionHeading } from "@/components/ui/Section";
import { trustSteps } from "@/config/site";

const icons = [CalendarCheck, PackageCheck, SearchCheck, Wallet];

export function TrustBlock() {
  return (
    <Section bg="offwhite">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Compra sem risco"
            title="Compre sem pagar antes"
            text="Agende sua entrega, receba o Amazolé em casa e pague somente no momento da entrega. Uma forma mais segura e prática de comprar."
          />

          <div className="reveal mt-8 grid grid-cols-2 gap-4">
            {trustSteps.map((step, index) => {
              const Icon = icons[index];
              return (
                <div
                  key={step}
                  className="rounded-card border border-border bg-white p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-turquoise-soft text-turquoise-dark">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-text">{step}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="reveal flex justify-center">
          <JarIllustration variant="closed" className="w-full max-w-xs" />
        </div>
      </div>
    </Section>
  );
}
