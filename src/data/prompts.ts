export interface PromptTemplate {
  id: string;
  format: "feed" | "reel" | "story" | "carousel" | "highlight";
  name: string;
  product: string[];
  buyer: string;
  goal: string;
  tone: string;
  cover: string;
  body: string;
  caption: string;
  hashtags: string[];
  story: string[];
}

const products = [
  "Single 1000 ml",
  "Pack Semanal",
  "Pack Mensual",
  "Icecubes 500 ml",
  "NutriGlow crema",
  "Bálsamo multisuso",
  "LipGlow labial",
];

const buyers = ["mujer35", "mama", "digestivo", "atleta", "senior"];

const goals = ["educate", "sell", "refill", "social proof"];

const tones = ["warm", "directo", "premium", "cercano"];

const stories: Record<string, string[]> = {
  feed: [
    "Foto del producto con luz cálida y sombras de palmieras, fondo crema.",
    "Texto grande: «Lo que tu intestino realmente necesita».",
    "Foto del lote en cuarentena con emojis de safari.",
    "Cierre con precio y botón de pedido.",
  ],
  reel: [
    "Vista rápida del frasco en movimiento bajo luz de palmieras.",
    "VO: «Si tu caldo no se gelifica en frío, no tiene colágeno. El nuestro sí.»",
    "Cortar a: primera porción tibie en una taza.",
    "Final: precio, link y «Pedí en 2 minutos». ",
  ],
  story: [
    "Fondo crema, texto: «El test de la gelatina».",
    "Mostrar cubos de caldo congelado en una cuchara.",
    "¿Se gelifica? ¡Sí! Entonces tienes colágeno real.",
    "Cierre: «Empezá tu Pack Semanal desde 110 Bs». ",
  ],
  carousel: [
    "Fotos de los 3 sabores en una fila bajo luz cálida.",
    "Texto: «Original, White o Antiinflamatorio: cuál es el tuyo». ",
    "Detalle de ingredientes en cada tarjetilla.",
    "Cierre con botón de pedido y precio. ",
  ],
  highlight: [
    "Portada: producto principal con texto «Catálogo».",
    "Fotos de cada variante y su precio.",
    "Fondo crema con la inscripción «Ver precios».",
  ],
};

export const promptTemplates: PromptTemplate[] = [
  {
    id: "t1",
    format: "feed",
    name: "Post de catálogo",
    product: ["Pack Mensual"],
    buyer: "mujer35",
    goal: "sell",
    tone: "directo",
    cover: stories.feed[0],
    body: "Presenta el Pack Mensual con la frase: «30 porciones, menos de 14 Bs/día.» Menciona que se cocina 48 horas y que se puede reposicionar devolviendo los frascos.",
    caption:
      "Tu mes de NutriBone en un vaso. 🎁 30 porciones a partir de 415 Bs, delivery a Santa Cruz. #NutriBone #caldodehuesos #saucesabi #saludnatural",
    hashtags: ["#NutriBone", "#caldodehuesos", "#colagenoreal", "#saucesabi", "#saludnatural"],
    story: stories.feed,
  },
  {
    id: "t2",
    format: "reel",
    name: "Reel del test de la gelatina",
    product: ["Single 1000 ml"],
    buyer: "digestivo",
    goal: "educate",
    tone: "warm",
    cover: stories.reel[0],
    body: "Muestra un vaso de agua con un cubito de caldo en frío. VO: «Si tu caldo no se gelifica en frío, no tiene colágeno. El nuestro sí.» Final: «Empezá con un Pack Semanal». ",
    caption:
      "El test de la gelatina 🥄 Si tu caldo no se pega en frío, no es colágeno real. El de NutriBone sí. #NutriBone #colagenoreal #saucesabi #caldodehuesos",
    hashtags: ["#NutriBone", "#colagenoreal", "#saucesabi", "#testdegelatina"],
    story: stories.reel,
  },
  {
    id: "t3",
    format: "story",
    name: "Story con cuento de Laura",
    product: ["NutriGlow crema"],
    buyer: "mujer35",
    goal: "social proof",
    tone: "cercano",
    cover: stories.story[0],
    body: "Cuento breve de cómo encontré el caldo de huesos: «Busqué sanar de forma real. Así nació NutriBone.»",
    caption:
      "La historia de Laura y NutriBone. 📝 ¿Sabías que se cocina 48 horas? Cuenta tu historia en los comentarios. 🌿",
    hashtags: ["#NutriBone", "#historialaura", "#saucesabi", "#nutricionnatural"],
    story: stories.story,
  },
  {
    id: "t4",
    format: "carousel",
    name: "Carrusel de sabores",
    product: ["Original", "White", "Antiinflamatorio"],
    buyer: "digestivo",
    goal: "educate",
    tone: "premium",
    cover: stories.carousel[0],
    body: "Fotos de los tres sabores. Texto: «Original, White o Antiinflamatorio: cuál es el tuyo?»",
    caption:
      "¿Cuál eliges? 🥣 Original para todos los días, White para estómagos sensibles y Antiinflamatorio con cúrcuma, jengibre y pimienta. #NutriBone #sabores #saucesabi",
    hashtags: ["#NutriBone", "#sabores", "#saucesabi", "#caldodehuesos"],
    story: stories.carousel,
  },
  {
    id: "t5",
    format: "highlight",
    name: "Highlight Catálogo",
    product: ["Single 1000 ml", "Pack Semanal", "Pack Mensual"],
    buyer: "mujer35",
    goal: "sell",
    tone: "directo",
    cover: stories.highlight[0],
    body: "Portada: «Catálogo». Cada página: producto, precio, envase y link de pedido.",
    caption: "Descargá el catálogo completo con precios y envases. 📥",
    hashtags: ["#NutriBone", "#catalogo", "saucesabi"],
    story: stories.highlight,
  },
];

export function generatePrompts(opts: {
  format: PromptTemplate["format"];
  product: string;
  buyer: string;
  goal: string;
  tone: string;
}) {
  const t = promptTemplates.find(
    (p) =>
      p.format === opts.format &&
      p.buyer === opts.buyer &&
      p.goal === opts.goal &&
      p.tone === opts.tone,
  );
  if (t) return t;
  return {
    id: `t-auto-${Date.now()}`,
    format: opts.format,
    name: `${opts.format} ${opts.product}`,
    product: [opts.product],
    buyer: opts.buyer,
    goal: opts.goal,
    tone: opts.tone,
    cover: `Foto del producto ${opts.product} con luz cálida y sombras de palmieras, fondo crema.`,
    body: `Texto para ${opts.format}: «${opts.product} para ${opts.buyer}, ${opts.goal}.»`,
    caption: `Presentá ${opts.product} — ${opts.buyer}, ${opts.goal}, ${opts.tone}.`,
    hashtags: ["#NutriBone", "#saucesabi"],
    story: stories[opts.format] ?? stories.feed,
  } as PromptTemplate;
}
