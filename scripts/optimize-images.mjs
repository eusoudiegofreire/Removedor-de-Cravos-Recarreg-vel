import { readdirSync, mkdirSync } from "node:fs";
import { join, parse } from "node:path";
import sharp from "sharp";

const SRC_DIR = join(process.cwd(), "imagens");
const OUT_DIR = join(process.cwd(), "public", "images", "amazole");

const RENAME = {
  "Hero principal.png": ["hero-principal", 1200],
  "Textura do creme.png": ["textura-do-creme", 1200],
  "Ativos naturais.png": ["ativos-naturais", 1200],
  "Entrega e pagamento.png": ["entrega-e-pagamento", 1200],
  "resultado (1).png": ["resultado-1", 900],
  "resultado (2).png": ["resultado-2", 900],
  "resultado (3).png": ["resultado-3", 900],
  "resultado (4).png": ["resultado-4", 900],
  "depoimentos WhatsApp (1).png": ["depoimento-whatsapp-1", 900],
  "depoimentos WhatsApp (2).png": ["depoimento-whatsapp-2", 900],
  "depoimentos WhatsApp (3).png": ["depoimento-whatsapp-3", 900],
};

mkdirSync(OUT_DIR, { recursive: true });

const files = readdirSync(SRC_DIR);

for (const file of files) {
  const entry = RENAME[file];
  if (!entry) {
    console.warn(`skip (no mapping): ${file}`);
    continue;
  }
  const [outName, maxWidth] = entry;
  const outPath = join(OUT_DIR, `${outName}.webp`);
  const image = sharp(join(SRC_DIR, file));
  const meta = await image.metadata();
  const width = Math.min(meta.width ?? maxWidth, maxWidth);

  await image.resize({ width, withoutEnlargement: true }).webp({ quality: 82 }).toFile(outPath);

  const outMeta = await sharp(outPath).metadata();
  console.log(`${parse(file).name} -> ${outName}.webp (${outMeta.width}x${outMeta.height})`);
}
