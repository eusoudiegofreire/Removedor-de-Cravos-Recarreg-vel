import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";

type StickyMobileCtaProps = {
  ctaLabel?: string;
  ctaLink?: string;
};

export function StickyMobileCta({
  ctaLabel = site.ctaLabel,
  ctaLink = site.ctaLink,
}: StickyMobileCtaProps = {}) {
  return (
    <div
      className="enter fixed inset-x-0 bottom-0 z-50 border-t border-border bg-white/95 px-4 pt-3 backdrop-blur sm:hidden"
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="leading-tight">
          <p className="text-[11px] text-text-secondary">De R$ 149,90 por</p>
          <p className="font-heading text-lg font-extrabold text-text">R$ 127,00</p>
        </div>
        <Button href={ctaLink} variant="primary" size="md" className="flex-1">
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}
