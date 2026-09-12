import { JarIllustration, MediaPlaceholder } from "@/components/ProductArt";
import { Section, SectionHeading } from "@/components/ui/Section";

export function ProvaVisual() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Prova visual"
        title="Veja o produto na prática"
        text="Confira imagens reais do Amazolé, a textura do creme e demonstrações do produto."
      />

      <div className="reveal mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <MediaPlaceholder kind="video" label="Vídeo demonstrativo do produto" />
        <div className="flex aspect-[4/3] w-full items-center justify-center rounded-card border border-border bg-offwhite p-6">
          <JarIllustration variant="closed" className="h-full max-h-40" />
        </div>
        <MediaPlaceholder kind="photo" label="Foto da textura do creme" />
        <MediaPlaceholder kind="before-after" label="Antes e depois real, se houver autorização" />
      </div>

      <p className="reveal mt-6 text-center text-xs text-text-secondary">
        Imagem real. Resultados podem variar de pessoa para pessoa.
      </p>
    </Section>
  );
}
