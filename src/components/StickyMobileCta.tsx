import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-white/95 px-4 py-3 backdrop-blur sm:hidden">
      <div className="flex items-center justify-between gap-3">
        <div className="leading-tight">
          <p className="text-[11px] text-text-secondary">De R$ 149,90 por</p>
          <p className="font-heading text-lg font-extrabold text-text">R$ 127,00</p>
        </div>
        <Button href={site.ctaLink} variant="primary" size="md" className="flex-1">
          {site.ctaLabel}
        </Button>
      </div>
    </div>
  );
}
