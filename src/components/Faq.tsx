import { ChevronDown } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { faqItems, type FaqItem } from "@/config/site";

type FaqProps = {
  title?: string;
  items?: FaqItem[];
};

export function Faq({ title = "Dúvidas frequentes", items = faqItems }: FaqProps = {}) {
  return (
    <Section>
      <SectionHeading eyebrow="Dúvidas" title={title} />

      <div className="reveal mx-auto mt-10 max-w-3xl divide-y divide-border rounded-card border border-border bg-white">
        {items.map((item) => (
          <details key={item.question} className="group px-5 py-4 sm:px-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg font-heading text-sm font-bold text-text transition-colors duration-200 ease-snappy hover:text-turquoise-dark sm:text-base">
              {item.question}
              <ChevronDown className="h-5 w-5 shrink-0 text-turquoise transition-transform duration-300 ease-snappy group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
