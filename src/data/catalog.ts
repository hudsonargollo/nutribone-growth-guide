import portada from "@/assets/catalog/portada.webp.asset.json";
import nosotros from "@/assets/catalog/nosotros.webp.asset.json";
import variedades from "@/assets/catalog/variedades.webp.asset.json";
import single from "@/assets/catalog/single.webp.asset.json";
import packsSemanal from "@/assets/catalog/packs_semanal.webp.asset.json";
import packsMensual from "@/assets/catalog/packs_mensual.webp.asset.json";
import icecubes from "@/assets/catalog/icecubes.webp.asset.json";
import nutriglow from "@/assets/catalog/nutriglow.webp.asset.json";
import pedidos from "@/assets/catalog/pedidos.webp.asset.json";

export const SHOP_URL = "https://nutribone.clubemkt.digital/shop";
export const WHATSAPP_NUMBER = "59177313568";
export const INSTAGRAM = "@nutribone.scz";

export const images = {
  portada: portada.url,
  nosotros: nosotros.url,
  variedades: variedades.url,
  single: single.url,
  packsSemanal: packsSemanal.url,
  packsMensual: packsMensual.url,
  icecubes: icecubes.url,
  nutriglow: nutriglow.url,
  pedidos: pedidos.url,
};

/** Adds tracking labels so every sale can be traced back to its source. */
export function shopLink(opts: { source?: string; medium?: string; campaign?: string; content?: string } = {}) {
  const p = new URLSearchParams();
  p.set("utm_source", opts.source ?? "whatsapp");
  p.set("utm_medium", opts.medium ?? "chat");
  if (opts.campaign) p.set("utm_campaign", opts.campaign);
  if (opts.content) p.set("utm_content", opts.content);
  return `${SHOP_URL}?${p.toString()}`;
}

export function whatsappLink(text: string, phone?: string) {
  return `https://wa.me/${phone ?? ""}?text=${encodeURIComponent(text)}`;
}

export type Line = "caldo" | "cosmetica";
export type Variety = "original" | "white" | "antiinflamatorio" | "nutriglow" | "balsamo" | "lipglow";
export type Format = "single" | "pack_semanal" | "pack_mensual" | "icecubes" | "cosmetico";
export type Container = "vidrio" | "pp" | "kraft_pp" | "frasco_ambar";

export interface Product {
  sku: string;
  name: string;
  line: Line;
  variety: Variety;
  format: Format;
  container: Container;
  units: number;
  unitMl: number;
  totalMl: number;
  priceFirst: number;
  /** Refill price when the customer returns clean, empty glass jars. null = no refill option. */
  priceRefill: number | null;
  currency: "BOB";
  image: string;
  notes: string;
}

export const varieties: Record<Variety, { label: string; short: string; description: string; ingredients: string[]; benefits: string[] }> = {
  original: {
    label: "Original",
    short: "Sabor tostado y reconfortante",
    description:
      "Caldo de huesos de res cocido lentamente durante 48 horas con huesos horneados, verduras orgánicas, sal rosada, vinagre de sidra de manzana con la madre y agua purificada.",
    ingredients: ["Huesos de res horneados", "Verduras orgánicas", "Sal rosada", "Vinagre de sidra de manzana con la madre", "Agua purificada"],
    benefits: ["Digestión y microbiota", "Articulaciones", "Piel, cabello y uñas", "Sistema inmune"],
  },
  white: {
    label: "White",
    short: "Suave y delicado, casi imperceptible",
    description:
      "Caldo de huesos de res blanqueados, 48 horas de cocción lenta con vinagre de sidra de manzana con la madre y agua purificada. Sin verduras: ideal para agregar a otras preparaciones o para estómagos sensibles.",
    ingredients: ["Huesos de res blanqueados", "Vinagre de sidra de manzana con la madre", "Agua purificada"],
    benefits: ["Estómagos sensibles", "Ayuno y protocolos estrictos", "Se esconde en sopas, arroces y papillas"],
  },
  antiinflamatorio: {
    label: "Antiinflamatorio",
    short: "Original + especias antiinflamatorias",
    description:
      "Nuestro caldo Original potenciado con cúrcuma, jengibre, pimienta negra y ajo. La grasa natural del caldo ayuda a absorber la curcumina.",
    ingredients: ["Caldo Original", "Cúrcuma", "Jengibre", "Pimienta negra", "Ajo"],
    benefits: ["Inflamación y dolor articular", "Recuperación deportiva", "Defensas"],
  },
  nutriglow: {
    label: "NutriGlow",
    short: "Crema facial de tallow",
    description: "Tallow de res con frankincense al 1%. Hidratante, regenerador, antiaging, antiinflamatorio, antibacteriano y antimicrobiano. Para rostro y todo tipo de piel, de día o de noche.",
    ingredients: ["Tallow de res", "Frankincense 1%"],
    benefits: ["Hidratación profunda", "Antiaging", "Piel sensible"],
  },
  balsamo: {
    label: "Bálsamo",
    short: "Bálsamo multiuso",
    description: "Tallow de res, cera de abejas y aceite esencial. Hidratante y regenerador para labios, manos y rostro, de día o de noche.",
    ingredients: ["Tallow de res", "Cera de abejas", "Aceite esencial"],
    benefits: ["Manos secas", "Labios", "Zonas resecas del rostro"],
  },
  lipglow: {
    label: "LipGlow",
    short: "Bálsamo labial",
    description: "Tallow de res, cera de abejas y aceite esencial. Hidratante y regenerador para labios.",
    ingredients: ["Tallow de res", "Cera de abejas", "Aceite esencial"],
    benefits: ["Labios partidos", "Hidratación diaria"],
  },
};

export const formats: Record<Format, { label: string; description: string }> = {
  single: { label: "Single 1000 ml", description: "Un frasco de vidrio de 1 litro para la casa." },
  pack_semanal: { label: "Pack Semanal · 7 unidades", description: "Una porción por día durante una semana. Ideal para empezar el hábito." },
  pack_mensual: { label: "Pack Mensual · 30 unidades", description: "Una porción diaria por un mes completo. El tratamiento continuo." },
  icecubes: { label: "Icecubes 500 ml", description: "Cubitos congelados para usar de a poco: sopas, papillas, arroces, salsas." },
  cosmetico: { label: "Cosmética 30 ml", description: "Línea de cuidado de piel a base de tallow de res." },
};

export const containers: Record<Container, string> = {
  vidrio: "Frasco de vidrio",
  pp: "Pote de PP",
  kraft_pp: "Pote de PP (cubitos)",
  frasco_ambar: "Frasco ámbar",
};

const p = (x: Omit<Product, "currency" | "totalMl" | "name"> & { name?: string }): Product => ({
  ...x,
  name: x.name ?? `${formats[x.format].label.split(" ·")[0]} ${varieties[x.variety].label}`,
  totalMl: x.units * x.unitMl,
  currency: "BOB",
});

export const products: Product[] = [
  // Single 1000 ml, glass
  p({ sku: "SGL-ORG-1000-VID", line: "caldo", variety: "original", format: "single", container: "vidrio", units: 1, unitMl: 1000, priceFirst: 140, priceRefill: 120, image: images.single, notes: "Reposición devolviendo envases vacíos y limpios." }),
  p({ sku: "SGL-WHT-1000-VID", line: "caldo", variety: "white", format: "single", container: "vidrio", units: 1, unitMl: 1000, priceFirst: 170, priceRefill: 150, image: images.single, notes: "Reposición devolviendo envases vacíos y limpios." }),
  p({ sku: "SGL-ANT-1000-VID", line: "caldo", variety: "antiinflamatorio", format: "single", container: "vidrio", units: 1, unitMl: 1000, priceFirst: 170, priceRefill: 150, image: images.single, notes: "Reposición devolviendo envases vacíos y limpios." }),
  // Weekly pack, PP
  p({ sku: "SEM-ORG-7x150-PP", line: "caldo", variety: "original", format: "pack_semanal", container: "pp", units: 7, unitMl: 150, priceFirst: 110, priceRefill: null, image: images.packsSemanal, notes: "7 x 150 ml c/u." }),
  p({ sku: "SEM-ANT-7x100-PP", line: "caldo", variety: "antiinflamatorio", format: "pack_semanal", container: "pp", units: 7, unitMl: 100, priceFirst: 110, priceRefill: null, image: images.packsSemanal, notes: "7 x 100 ml c/u." }),
  // Weekly pack, glass
  p({ sku: "SEM-ORG-7x150-VID", line: "caldo", variety: "original", format: "pack_semanal", container: "vidrio", units: 7, unitMl: 150, priceFirst: 140, priceRefill: 120, image: images.packsSemanal, notes: "7 x 150 ml c/u. Reposición devolviendo envases." }),
  p({ sku: "SEM-ANT-7x100-VID", line: "caldo", variety: "antiinflamatorio", format: "pack_semanal", container: "vidrio", units: 7, unitMl: 100, priceFirst: 140, priceRefill: 120, image: images.packsSemanal, notes: "7 x 100 ml c/u. Reposición devolviendo envases." }),
  p({ sku: "SEM-WHT-7x150-VID", line: "caldo", variety: "white", format: "pack_semanal", container: "vidrio", units: 7, unitMl: 150, priceFirst: 160, priceRefill: 135, image: images.packsSemanal, notes: "7 x 150 ml c/u. Reposición devolviendo envases." }),
  // Monthly pack, PP
  p({ sku: "MEN-ORG-30x150-PP", line: "caldo", variety: "original", format: "pack_mensual", container: "pp", units: 30, unitMl: 150, priceFirst: 415, priceRefill: null, image: images.packsMensual, notes: "30 x 150 ml c/u." }),
  p({ sku: "MEN-ANT-30x100-PP", line: "caldo", variety: "antiinflamatorio", format: "pack_mensual", container: "pp", units: 30, unitMl: 100, priceFirst: 415, priceRefill: null, image: images.packsMensual, notes: "30 x 100 ml c/u." }),
  // Monthly pack, glass
  p({ sku: "MEN-ORG-30x150-VID", line: "caldo", variety: "original", format: "pack_mensual", container: "vidrio", units: 30, unitMl: 150, priceFirst: 550, priceRefill: 415, image: images.packsMensual, notes: "30 x 150 ml c/u. Reposición devolviendo envases." }),
  p({ sku: "MEN-ANT-30x100-VID", line: "caldo", variety: "antiinflamatorio", format: "pack_mensual", container: "vidrio", units: 30, unitMl: 100, priceFirst: 550, priceRefill: 415, image: images.packsMensual, notes: "30 x 100 ml c/u. Reposición devolviendo envases." }),
  p({ sku: "MEN-WHT-30x100-VID", line: "caldo", variety: "white", format: "pack_mensual", container: "vidrio", units: 30, unitMl: 100, priceFirst: 600, priceRefill: 495, image: images.packsMensual, notes: "30 x 100 ml c/u. Reposición devolviendo envases." }),
  // Icecubes
  p({ sku: "ICE-ORG-500-PP", line: "caldo", variety: "original", format: "icecubes", container: "kraft_pp", units: 1, unitMl: 500, priceFirst: 65, priceRefill: null, image: images.icecubes, notes: "500 ml en cubitos congelados." }),
  p({ sku: "ICE-ANT-500-PP", line: "caldo", variety: "antiinflamatorio", format: "icecubes", container: "kraft_pp", units: 1, unitMl: 500, priceFirst: 95, priceRefill: null, image: images.icecubes, notes: "500 ml en cubitos congelados." }),
  // Cosmetics
  p({ sku: "COS-NGL-30", name: "NutriGlow crema facial", line: "cosmetica", variety: "nutriglow", format: "cosmetico", container: "frasco_ambar", units: 1, unitMl: 30, priceFirst: 90, priceRefill: null, image: images.nutriglow, notes: "Tallow de res + frankincense 1%." }),
  p({ sku: "COS-BAL-30", name: "Bálsamo multiuso", line: "cosmetica", variety: "balsamo", format: "cosmetico", container: "frasco_ambar", units: 1, unitMl: 30, priceFirst: 50, priceRefill: null, image: images.nutriglow, notes: "Labios, manos y rostro." }),
  p({ sku: "COS-LIP-30", name: "LipGlow bálsamo labial", line: "cosmetica", variety: "lipglow", format: "cosmetico", container: "frasco_ambar", units: 1, unitMl: 30, priceFirst: 50, priceRefill: null, image: images.nutriglow, notes: "Labios." }),
];

export const policies = {
  specialOrders: { label: "Pedidos especiales", surchargePct: 10, description: "Pedidos personalizados con 10% de costo adicional." },
  cyclicOrders: {
    label: "Pedidos cíclicos (suscripción)",
    description:
      "Entregas automáticas con frecuencia fija hasta que el cliente pida detener el servicio. Delivery gratis dentro del 4to anillo y con descuento fuera del 4to anillo.",
    rules: [
      { frequency: "Semanal o cada 2 semanas", minimum: "1 pack semanal, 1 pack mensual, 1 single o 2+ icecubes" },
      { frequency: "Mensual", minimum: "1 pack mensual, 2+ packs semanales, 4+ singles o 4+ icecubes" },
    ],
  },
  delivery: "Delivery gratis dentro del 4to anillo de Santa Cruz de la Sierra para suscripciones.",
  storage: "3 meses en congelador, 4 días en heladera. En frío se gelifica: es señal de colágeno real.",
  refill: "Reposición: precio menor devolviendo los frascos de vidrio vacíos y limpios.",
};

export const pricePerMl = (x: Product, refill = false) => ((refill && x.priceRefill) || x.priceFirst) / x.totalMl;

export function catalogToCsv(list: Product[] = products) {
  const cols = ["sku", "name", "line", "variety", "format", "container", "units", "unit_ml", "total_ml", "price_first_bob", "price_refill_bob", "currency", "shop_url", "notes"];
  const esc = (v: unknown) => {
    const s = v === null || v === undefined ? "" : String(v);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const rows = list.map((x) =>
    [x.sku, x.name, x.line, x.variety, x.format, containers[x.container], x.units, x.unitMl, x.totalMl, x.priceFirst, x.priceRefill, x.currency, shopLink({ source: "catalog", medium: "export", content: x.sku }), x.notes].map(esc).join(","),
  );
  return [cols.join(","), ...rows].join("\n");
}

export function catalogToJson(list: Product[] = products) {
  return JSON.stringify(
    {
      brand: "NutriBone",
      currency: "BOB",
      shop_url: SHOP_URL,
      products: list.map(({ image: _i, ...x }) => ({ ...x, varietyLabel: varieties[x.variety].label, containerLabel: containers[x.container] })),
      varieties,
      policies,
    },
    null,
    2,
  );
}

export const SQL_SCHEMA = `create table products (
  sku text primary key,
  name text not null,
  line text not null check (line in ('caldo','cosmetica')),
  variety text not null,
  format text not null,
  container text not null,
  units int not null,
  unit_ml int not null,
  total_ml int not null,
  price_first_bob numeric(10,2) not null,
  price_refill_bob numeric(10,2),
  currency text not null default 'BOB',
  shop_url text,
  notes text
);`;
