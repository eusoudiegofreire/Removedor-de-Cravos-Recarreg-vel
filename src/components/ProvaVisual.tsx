import { JarIllustration, MediaPlaceholder } from "@/components/ProductArt";
import { Section, SectionHeading } from "@/components/ui/Section";

type ProvaVisualItem = {
  kind: "video" | "photo" | "before-after" | "jar";
  label: string;
};

const defaultItems: ProvaVisualItem[] = [
  { kind: "video", label: "Vídeo demonstrativo do produto" },
  { kind: "jar", label: "Foto real do pote" },
  { kind: "photo", label: "Foto da textura do creme" },
  { kind: "before-after", label: "Antes e depois real, se houver autorização" },
];

type ProvaVisualProps = {
  title?: string;
  text?: string;
  items?: ProvaVisualItem[];
  caption?: string;
};

export function ProvaVisual({
  title = "Veja o produto na prática",
  text = "Confira imagens reais do Amazolé, a textura do creme e demonstrações do produto.",
  items = defaultItems,
  caption = "Imagem real. Resultados podem variar de pessoa para pessoa.",
}: ProvaVisualProps = {}) {
  return (
    <Section>
      <SectionHeading eyebrow="Prova visual" title={title} text={text} />

      <div className="reveal mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) =>
          item.kind === "jar" ? (
            <div
              key={item.label}
              className="flex aspect-[4/3] w-full items-center justify-center rounded-card border border-border bg-offwhite p-6"
            >
              <JarIllustration variant="closed" className="h-full max-h-40" />
            </div>
          ) : (
            <MediaPlaceholder key={item.label} kind={item.kind} label={item.label} />
          )
        )}
      </div>

      {caption ? (
        <p className="reveal mt-6 text-center text-xs text-text-secondary">{caption}</p>
      ) : null}
    </Section>
  );
}
