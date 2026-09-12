import {
  Droplets,
  Leaf,
  ScanFace,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { benefits } from "@/config/site";

const icons = [Sparkles, Droplets, ScanFace, Leaf, ShieldCheck, Wallet];

export function Beneficios() {
  return (
    <Section bg="offwhite">
      <SectionHeading eyebrow="Benefícios" title="Por que escolher o Amazolé?" />

      <div className="reveal mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => {
          const Icon = icons[index];
          return (
            <div
              key={benefit.title}
              className="rounded-card border border-border bg-white p-6 shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-turquoise-soft text-turquoise-dark">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-text">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {benefit.text}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
