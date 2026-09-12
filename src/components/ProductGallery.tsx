import Image from "next/image";

const photos = [
  {
    src: "/images/produto-kit-completo.png",
    alt: "Removedor de Cravos Recarregável na cor rosé com as quatro ponteiras inclusas",
    caption: "Kit completo com ponteiras",
  },
  {
    src: "/images/produto-ponteiras.png",
    alt: "Mão segurando o Removedor de Cravos Recarregável ao lado das ponteiras intercambiáveis",
    caption: "Ponteiras intercambiáveis",
  },
];

export default function ProductGallery() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Veja os detalhes do produto
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            O Removedor de Cravos Recarregável possui design compacto,
            ponteiras diferentes e funcionamento por sucção para ajudar na
            rotina de limpeza facial.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {photos.map((photo) => (
            <figure
              key={photo.src}
              className="overflow-hidden rounded-3xl bg-rose-baby/60 shadow-sm"
            >
              <div className="relative aspect-square w-full">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-4 py-3 text-center text-sm font-medium text-ink">
                {photo.caption}
              </figcaption>
            </figure>
          ))}

          <div className="flex aspect-square flex-col items-center justify-center gap-2 rounded-3xl border-2 border-dashed border-rose-light bg-rose-baby/30 px-4 text-center sm:aspect-auto">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              className="text-rose-metal"
              aria-hidden="true"
            >
              <path
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M4 8h16M4 4h16a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm font-medium text-ink-soft">
              Cabo USB / carregador
              <br />
              (foto em breve)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
