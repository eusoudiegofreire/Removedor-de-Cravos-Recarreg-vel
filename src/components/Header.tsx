import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 sm:px-6 lg:px-8">
        <span className="font-heading text-xl font-extrabold tracking-tight text-text">
          Amazol<span className="text-turquoise">é</span>
        </span>
        <div className="hidden sm:block">
          <Button href={site.ctaLink} variant="primary" size="md">
            {site.ctaLabel}
          </Button>
        </div>
        <div className="sm:hidden">
          <Button href={site.ctaLink} variant="primary" size="md">
            Agendar
          </Button>
        </div>
      </div>
    </header>
  );
}
