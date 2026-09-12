import { formatBRL, site } from "@/config/site";

type PriceTagProps = {
  align?: "left" | "center";
  variant?: "default" | "onDark";
};

export default function PriceTag({
  align = "left",
  variant = "default",
}: PriceTagProps) {
  const originalColor = variant === "onDark" ? "text-white/75" : "text-ink-soft";
  const currentColor = variant === "onDark" ? "text-white" : "text-accent";

  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <span className={`block text-sm font-medium line-through ${originalColor}`}>
        De {formatBRL(site.price.original)}
      </span>
      <span className={`font-display block text-4xl font-semibold sm:text-5xl ${currentColor}`}>
        {formatBRL(site.price.current)}
      </span>
    </div>
  );
}
