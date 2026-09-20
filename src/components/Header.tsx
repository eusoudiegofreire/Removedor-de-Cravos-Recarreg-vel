import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";

type HeaderProps = {
  ctaLabel?: string;
  ctaLink?: string;
  mobileLabel?: string;
  variant?: "primary" | "secondary";
};

export function Header({
  ctaLabel = site.ctaLabel,
  ctaLink = site.ctaLink,
  mobileLabel = "Agendar",
  variant = "primary",
}: HeaderProps = {}) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 sm:px-6 lg:px-8">
        <span className="font-heading text-xl font-bold tracking-tight text-text">
          Amazol<span className="text-turquoise">é</span>
        </span>
        <div className="hidden sm:block">
          <Button href={ctaLink} variant={variant} size="md">
            {ctaLabel}
          </Button>
        </div>
        <div className="sm:hidden">
          <Button href={ctaLink} variant={variant} size="md">
            {mobileLabel}
          </Button>
        </div>
      </div>
    </header>
  );
}
