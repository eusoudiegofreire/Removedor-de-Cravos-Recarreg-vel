import Image from "next/image";

type PhotoCardProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

export function PhotoCard({
  src,
  alt,
  width,
  height,
  sizes = "100vw",
  priority = false,
  className = "",
}: PhotoCardProps) {
  return (
    <div
      className={`overflow-hidden rounded-card border border-border bg-white shadow-sm ${className}`}
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
