import Image from "next/image";

type PhotoCardProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** Adds a subtle hover/press lift — use for browsable gallery items, not static illustrations. */
  interactive?: boolean;
};

export function PhotoCard({
  src,
  alt,
  width,
  height,
  sizes = "100vw",
  priority = false,
  className = "",
  interactive = false,
}: PhotoCardProps) {
  const interactiveClass = interactive
    ? "transition-[translate,scale,box-shadow] duration-300 ease-snappy hover:-translate-y-1 hover:shadow-md active:translate-y-0 active:scale-[0.99] active:duration-100"
    : "";

  return (
    <div
      className={`overflow-hidden rounded-card border border-border bg-white shadow-sm ${interactiveClass} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        className="h-auto w-full"
      />
    </div>
  );
}
