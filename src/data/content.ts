import { shopLink } from "./catalog";

export interface Persona { id: string; name: string; age: string; pains: string[]; desire: string; bestProducts: string[]; hook: string }

export const personas: Persona[] = [
  { id: "mujer35", name: "Mujer 35-50", age: "35-50", pains: ["Piel sin firmeza", "Caída de cabello", "Hinchazón", "Cambios hormonales"], desire: "Verse y sentirse radiante sin tratamientos sintéticos", bestProducts: ["MEN-ORG-30x150-VID", "COS-NGL-30"], hook: "El colágeno que tu piel sí reconoce" },
  { id: "mama", name: "Mamá consciente", age: "28-42", pains: ["Niños que se enferman seguido", "Comidas rápidas", "Poco tiempo"], desire: "Nutrir a la familia sin químicos y sin pasar horas en la cocina", bestProducts: ["ICE-ORG-500-PP", "SGL-WHT-1000-VID"], hook: "Un cubito en la sopa, más defensas en casa" },
  { id: "digestivo", name: "Intestino sensible", age: "25-60", pains: ["Gastritis", "Colon irritable", "Inflamación", "Reflujo"], desire: "Comer sin miedo y desinflamar de forma natural", bestProducts: ["SEM-WHT-7x150-VID", "MEN-ANT-30x100-VID"], hook: "Tu intestino pide calma, no otra pastilla" },
  { id: "atleta", name: "Atleta y biohacker", age: "22-45", pains: ["Dolor articular", "Recuperación lenta", "Calambres en ayuno"], desire: "Rendir más y recuperarse mejor con comida real", bestProducts: ["MEN-ANT-30x100-PP", "SEM-ANT-7x100-PP"], hook: "Electrolitos y colágeno de verdad, no de sobre" },
  { id: "senior", name: "Adulto mayor y quien lo cuida", age: "55+", pains: ["Articulaciones", "Poco apetito", "Digestión lenta"], desire: "Movilidad y energía con algo fácil de tomar", bestProducts: ["SGL-ANT-1000-VID", "ICE-ANT-500-PP"], hook: "Una taza tibia que cuida tus rodillas" },
];

export interface Script { id: string; stage: string; title: string; when: string; text: (link: string) => string; campaign: string }

const L = (c: string) => shopLink({ campaign: c });

export const scriptStages = ["Primer contacto", "Recomendación", "Objeciones", "Cierre", "Post-venta", "Reposición", "Upsell", "Recuperación", "Reseñas"] as const;

export const scripts: Script[] = [
  { id: "s1", stage: "Primer contacto", title: "Respuesta a anuncio", when: "Cuando alguien escribe desde un anuncio o Instagram", campaign: "primer_contacto",
    text: (l) => `¡Hola! 🌿 Qué lindo que nos escribas. Soy Laura de NutriBone.\n\nNuestro caldo de huesos se cocina lento por 48 horas, con ingredientes 100% naturales, sin aditivos ni conservantes.\n\nPara recomendarte el ideal, contame: ¿lo querés para digestión, piel/cabello, articulaciones o para la familia?\n\nSi ya sabés lo que querés, podés pedir directo acá y te llega a casa 👉 ${l}` },
  { id: "s2", stage: "Primer contacto", title: "Pregunta por precio", when: "Cuando el primer mensaje es '¿precio?'", campaign: "precio",
    text: (l) => `¡Hola! 🌿 Te paso los más pedidos:\n\n• Pack Semanal (7 porciones): desde 110 Bs\n• Single 1 litro en vidrio: desde 140 Bs\n• Pack Mensual (30 porciones): desde 415 Bs\n• Icecubes 500 ml: desde 65 Bs\n\nAhí ves todas las variedades, fotos y precios, y pedís en 2 minutos 👉 ${l}\n\n¿Es tu primera vez con caldo de huesos? Te ayudo a elegir 😊` },
  { id: "s3", stage: "Recomendación", title: "Para digestión / gastritis", when: "Cuando menciona estómago, gastritis, colon o hinchazón", campaign: "rec_digestion",
    text: (l) => `Te entiendo, muchas de nuestras clientas llegaron igual 💛\n\nPara empezar te recomiendo el *Pack Semanal White* (7 x 150 ml): es el más suave, sin verduras, ideal para estómagos sensibles. Una taza tibia en ayunas cada día.\n\nSi además sentís inflamación, después podés pasar al *Antiinflamatorio* (cúrcuma, jengibre, ajo y pimienta).\n\nPedilo acá 👉 ${l}` },
  { id: "s4", stage: "Recomendación", title: "Para piel, cabello y uñas", when: "Cuando menciona piel, arrugas, cabello", campaign: "rec_piel",
    text: (l) => `¡Buenísimo! El caldo de huesos tiene colágeno natural, el que tu cuerpo reconoce y aprovecha 🌿\n\nLos resultados en piel se notan con constancia, por eso lo ideal es el *Pack Mensual Original* (30 porciones, una por día).\n\n✨ Tip: combinalo con *NutriGlow*, nuestra crema de tallow con frankincense (90 Bs), para cuidarte por dentro y por fuera.\n\nArmá tu pedido acá 👉 ${l}` },
  { id: "s5", stage: "Recomendación", title: "Para la familia y niños", when: "Cuando es mamá o compra para la casa", campaign: "rec_familia",
    text: (l) => `¡Qué lindo que quieras nutrir a tu familia! 💛\n\nLas mamás aman los *Icecubes* (500 ml en cubitos): sacás 1 o 2 y los ponés en la sopa, el arroz o la papilla. Duran 3 meses en el congelador.\n\nSi a los peques no les gusta el sabor fuerte, el *White* es casi imperceptible en las comidas.\n\nPedí acá 👉 ${l}` },
  { id: "s6", stage: "Recomendación", title: "Para deporte y articulaciones", when: "Cuando entrena, hace ayuno o tiene dolor articular", campaign: "rec_deporte",
    text: (l) => `¡Perfecto! El *Antiinflamatorio* es tu aliado: caldo de huesos con cúrcuma, jengibre, ajo y pimienta negra. Colágeno, minerales y electrolitos naturales.\n\n• Para probar: Pack Semanal 7 x 100 ml – 110 Bs\n• Para resultados: Pack Mensual 30 x 100 ml – 415 Bs\n\nTomalo después de entrenar o para cortar el ayuno 💪\nPedilo acá 👉 ${l}` },
  { id: "s7", stage: "Objeciones", title: "\"Está caro\"", when: "Objeción de precio", campaign: "obj_precio",
    text: (l) => `Te entiendo 🙏 Mirá la cuenta: el Pack Mensual sale ~14 Bs por día, menos que un café.\n\nY no es un caldo cualquiera: son 48 horas de cocción lenta con huesos seleccionados, verduras orgánicas, sin conservantes. Hacerlo en casa lleva 2 días de cocina y gas.\n\n💡 Además, si devolvés los frascos de vidrio, tu próxima compra sale más barata.\n\nPodés empezar con el Pack Semanal desde 110 Bs 👉 ${l}` },
  { id: "s8", stage: "Objeciones", title: "\"¿Y el sabor?\"", when: "Miedo al sabor", campaign: "obj_sabor",
    text: (l) => `¡Pregunta clave! 😊\n\n• *Original*: tostado y reconfortante, como una sopa casera.\n• *White*: suave y delicado, casi no se siente en otras comidas.\n• *Antiinflamatorio*: especiado, con cúrcuma y jengibre.\n\nSi no estás segura, empezá con el Pack Semanal y probá una semana 👉 ${l}` },
  { id: "s9", stage: "Objeciones", title: "\"¿Funciona de verdad?\"", when: "Duda sobre resultados", campaign: "obj_resultados",
    text: (l) => `Es una duda muy válida 🌿 El caldo de huesos no es magia ni medicamento: es comida real y densa en nutrientes (colágeno, gelatina, minerales).\n\nLo que vemos en nuestras clientas con constancia (2 a 4 semanas): mejor digestión, menos hinchazón, más energía y piel más hidratada.\n\n¿Sabías que se gelifica en la heladera? Esa es la prueba del colágeno real 😉\n\nTe recomiendo el Pack Mensual para notar el cambio 👉 ${l}` },
  { id: "s10", stage: "Objeciones", title: "\"Lo pienso\"", when: "El cliente se enfría", campaign: "obj_lopienso",
    text: (l) => `¡Claro, sin apuro! 💛 Te dejo el link para cuando quieras, ahí está todo con precios y fotos 👉 ${l}\n\nUna pregunta: ¿qué te haría decidir? ¿Precio, sabor, o cómo tomarlo? Así te ayudo mejor.` },
  { id: "s11", stage: "Cierre", title: "Cierre directo", when: "El cliente ya eligió", campaign: "cierre",
    text: (l) => `¡Excelente elección! 🎉 Para que te llegue rápido, hacé tu pedido acá: elegís producto, dirección y forma de pago 👉 ${l}\n\nRecordá pedir con 24 h de anticipación. Cualquier duda, acá estoy 🌿` },
  { id: "s12", stage: "Cierre", title: "Propuesta de suscripción", when: "Cliente que pide seguido", campaign: "suscripcion",
    text: (l) => `¿Sabías que podés recibir tu caldo automáticamente, sin tener que volver a pedir? 🔁\n\nCon los *Pedidos Cíclicos* elegís la frecuencia (semanal, quincenal o mensual) y tenés *delivery gratis dentro del 4to anillo*.\n\nHacé tu primer pedido acá y avisame que querés suscripción 👉 ${l}` },
  { id: "s13", stage: "Post-venta", title: "Bienvenida y cómo tomarlo", when: "Después de la entrega", campaign: "postventa",
    text: (l) => `¡Tu NutriBone llegó! 🌿 Algunos tips:\n\n• En heladera dura 4 días, en congelador 3 meses.\n• Si está gelatinoso, ¡perfecto! Es el colágeno.\n• Calentalo suave, sin hervir, y tomalo tibio en taza, idealmente en ayunas.\n\nCuando quieras reponer, pedí acá 👉 ${l}` },
  { id: "s14", stage: "Reposición", title: "Recordatorio día 6 (semanal)", when: "6 días después de un Pack Semanal", campaign: "reposicion_semanal",
    text: (l) => `¡Hola! 💛 Ya casi terminás tu Pack Semanal. ¿Cómo te sentiste?\n\nPara no cortar el hábito, pedí el próximo hoy y te llega a tiempo. Devolvé los frascos de vidrio limpios y pagás precio de reposición 🌱\n\n👉 ${l}` },
  { id: "s15", stage: "Reposición", title: "Recordatorio día 25 (mensual)", when: "25 días después de un Pack Mensual", campaign: "reposicion_mensual",
    text: (l) => `¡Hola! 🌿 Se viene el fin de tu mes NutriBone. Tu cuerpo ya se acostumbró a su taza diaria 😊\n\nReponé tu Pack Mensual con precio de reposición (devolviendo los frascos) o pasate a suscripción con delivery gratis dentro del 4to anillo.\n\n👉 ${l}` },
  { id: "s16", stage: "Upsell", title: "De semanal a mensual", when: "Compró 2 packs semanales", campaign: "upsell_mensual",
    text: (l) => `¡Ya vas 2 semanas! 🙌 Un dato: en vez de 4 packs semanales, el *Pack Mensual* te da 30 porciones y te olvidás de pedir cada semana.\n\nMirá las opciones acá 👉 ${l}` },
  { id: "s17", stage: "Upsell", title: "Agregar cosmética", when: "En cualquier pedido de caldo", campaign: "cross_cosmetica",
    text: (l) => `Antes de cerrar tu pedido ✨ ¿Ya conocés nuestra línea de tallow?\n\n• *NutriGlow* crema facial – 90 Bs\n• *Bálsamo* multiuso – 50 Bs\n• *LipGlow* labial – 50 Bs\n\nNutrición por dentro y por fuera 🌿 Sumalos acá 👉 ${l}` },
  { id: "s18", stage: "Recuperación", title: "Cliente inactivo (30+ días)", when: "No compra hace más de un mes", campaign: "winback",
    text: (l) => `¡Hola! 💛 Hace rato no sabemos de vos. ¿Cómo estás?\n\nTe cuento que tenemos el caldo recién hecho, y si tenés frascos de vidrio guardados, devolvelos y pagás precio de reposición 🌱\n\nVolvé a tu ritual acá 👉 ${l}` },
  { id: "s19", stage: "Recuperación", title: "Carrito abandonado", when: "Entró a la tienda y no compró", campaign: "carrito",
    text: (l) => `¡Hola! 🌿 Vimos que estabas armando tu pedido. ¿Te quedó alguna duda sobre sabor, tamaño o entrega?\n\nTu pedido te espera acá 👉 ${l}` },
  { id: "s20", stage: "Reseñas", title: "Pedir testimonio", when: "7 a 14 días después de comprar", campaign: "resena",
    text: (l) => `¡Hola! 💛 ¿Cómo te está yendo con NutriBone? ¿Notaste algún cambio en tu digestión, energía o piel?\n\nSi nos mandás un audio o foto contándonos, nos ayudás un montón 🙏 (y si querés, te etiquetamos en ${"@nutribone.scz"}).\n\nTu próximo pedido, acá 👉 ${l}` },
];

export const renderScript = (s: Script) => s.text(L(s.campaign));

export interface Ad { id: number; funnel: "TOFU" | "MOFU" | "BOFU"; persona: string; format: string; hook: string; body: string; cta: string; campaign: string }

export const ads: Ad[] = [
  { id: 1, funnel: "TOFU", persona: "mujer35", format: "Reel 15s", hook: "Tu crema no puede hacer lo que tu intestino no hace.", body: "La piel empieza adentro. Caldo de huesos cocido 48 horas: colágeno real, sin polvos ni químicos.", cta: "Ver catálogo", campaign: "ad_piel_tofu" },
  { id: 2, funnel: "TOFU", persona: "digestivo", format: "Reel 20s", hook: "Hinchada todos los días después de comer?", body: "Una taza tibia en ayunas. 48 horas de cocción lenta. 100% natural. Así empiezan muchas clientas a desinflamar.", cta: "Pedir ahora", campaign: "ad_digest_tofu" },
  { id: 3, funnel: "TOFU", persona: "mama", format: "Reel 15s", hook: "El truco de las mamás de Santa Cruz para que los niños se enfermen menos.", body: "Un cubito NutriBone en la sopa. No cambia el sabor, sí la nutrición.", cta: "Ver Icecubes", campaign: "ad_mama_tofu" },
  { id: 4, funnel: "TOFU", persona: "atleta", format: "Reel 15s", hook: "Dejá de tomar colágeno en polvo.", body: "Colágeno, minerales y electrolitos de comida real. Antiinflamatorio con cúrcuma y jengibre.", cta: "Comprar", campaign: "ad_atleta_tofu" },
  { id: 5, funnel: "TOFU", persona: "mujer35", format: "Reel 10s", hook: "El test de la gelatina 🥄", body: "Si tu caldo no se gelifica en frío, no tiene colágeno. El nuestro sí.", cta: "Ver catálogo", campaign: "ad_gelatina" },
  { id: 6, funnel: "TOFU", persona: "senior", format: "Imagen", hook: "Rodillas que crujen al subir las escaleras?", body: "Caldo de huesos Antiinflamatorio: cúrcuma, jengibre, ajo y pimienta. Comida real que cuida tus articulaciones.", cta: "Pedir ahora", campaign: "ad_senior_tofu" },
  { id: 7, funnel: "MOFU", persona: "digestivo", format: "Carrusel 5", hook: "Original, White o Antiinflamatorio: ¿cuál es el tuyo?", body: "Original para todos los días. White para estómagos sensibles. Antiinflamatorio para articulaciones y deporte.", cta: "Elegir el mío", campaign: "ad_variedades" },
  { id: 8, funnel: "MOFU", persona: "mujer35", format: "Carrusel testimonios", hook: "\"A las 3 semanas mi piel cambió\"", body: "Capturas reales de clientas de Santa Cruz. Su ritual: una taza diaria del Pack Mensual.", cta: "Empezar mi mes", campaign: "ad_testimonios" },
  { id: 9, funnel: "MOFU", persona: "mama", format: "Video receta", hook: "3 comidas para niños con 1 cubito", body: "Arroz, sopa y puré enriquecidos con Icecubes NutriBone. 500 ml desde 65 Bs.", cta: "Ver Icecubes", campaign: "ad_recetas" },
  { id: 10, funnel: "MOFU", persona: "mujer35", format: "Imagen", hook: "Hecho a mano en lotes pequeños.", body: "Huesos horneados, verduras orgánicas, vinagre de manzana con la madre. Sin aditivos. Así se hace un caldo de verdad.", cta: "Ver proceso", campaign: "ad_proceso" },
  { id: 11, funnel: "MOFU", persona: "mujer35", format: "Carrusel", hook: "Por dentro y por fuera ✨", body: "Caldo de huesos + NutriGlow, crema de tallow con frankincense. Rutina natural completa.", cta: "Ver combo", campaign: "ad_glow" },
  { id: 12, funnel: "BOFU", persona: "mujer35", format: "Imagen oferta", hook: "Tu mes NutriBone: 30 porciones desde 415 Bs.", body: "Menos de 14 Bs por día. Pedí hoy con 24 h de anticipación.", cta: "Comprar Pack Mensual", campaign: "ad_mensual_bofu" },
  { id: 13, funnel: "BOFU", persona: "digestivo", format: "Imagen", hook: "Probá una semana. 110 Bs.", body: "Pack Semanal: 7 porciones, una por día. La forma más fácil de empezar.", cta: "Comprar Pack Semanal", campaign: "ad_semanal_bofu" },
  { id: 14, funnel: "BOFU", persona: "mama", format: "Imagen", hook: "Suscribite y olvidate de pedir.", body: "Pedidos cíclicos con delivery gratis dentro del 4to anillo. Vos elegís la frecuencia.", cta: "Suscribirme", campaign: "ad_suscripcion" },
  { id: 15, funnel: "BOFU", persona: "atleta", format: "Reel 10s", hook: "¿Todavía no lo pediste?", body: "Antiinflamatorio Pack Semanal 7 x 100 ml – 110 Bs. Retargeting a quienes vieron la tienda.", cta: "Terminar pedido", campaign: "ad_retarget" },
  { id: 16, funnel: "BOFU", persona: "senior", format: "Imagen", hook: "Devolvé tus frascos y ahorrá.", body: "Single 1 L Original: 140 Bs la primera vez, 120 Bs en reposición. Bueno para vos y para el planeta.", cta: "Reponer ahora", campaign: "ad_reposicion" },
  { id: 17, funnel: "TOFU", persona: "digestivo", format: "Reel 20s", hook: "Lo que pasa en tu intestino cuando tomás caldo de huesos 7 días", body: "Día 1: calma. Día 3: menos hinchazón. Día 7: un nuevo ritual. Empezá con el Pack Semanal.", cta: "Empezar 7 días", campaign: "ad_7dias" },
  { id: 18, funnel: "MOFU", persona: "atleta", format: "Carrusel", hook: "Colágeno en polvo vs caldo de huesos", body: "Uno es un suplemento procesado. El otro es comida real con minerales, gelatina y electrolitos.", cta: "Ver catálogo", campaign: "ad_vs_polvo" },
  { id: 19, funnel: "BOFU", persona: "mujer35", format: "Story", hook: "Últimos cupos para la entrega de esta semana", body: "Pedí con 24 h de anticipación y recibí tu caldo recién hecho.", cta: "Pedir ahora", campaign: "ad_urgencia" },
  { id: 20, funnel: "TOFU", persona: "mujer35", format: "Reel 30s", hook: "La historia de Laura y NutriBone", body: "Busqué sanar de forma real y consciente. Así nació NutriBone: el poder de sanar en cada sorbo.", cta: "Conocer más", campaign: "ad_historia" },
];

export const adLink = (a: Ad) => shopLink({ source: "meta", medium: "paid", campaign: a.campaign });

/* ---------- Content plan ---------- */
export type Channel = "Reel" | "Carrusel" | "Post" | "Story" | "Blog" | "Grupo FB";
export type Pillar = "Educación" | "Estilo de vida" | "Recetas y uso" | "Prueba social" | "Venta directa";

export interface ContentPiece { id: number; day: number; channel: Channel; pillar: Pillar; title: string; hook: string; cta: string; product: string }

const ideas: Array<[Pillar, string, string]> = [
  ["Educación", "¿Por qué 48 horas de cocción?", "El tiempo es el ingrediente secreto"],
  ["Educación", "El test de la gelatina", "Si no se gelifica, no tiene colágeno"],
  ["Educación", "Colágeno en polvo vs caldo real", "No es lo mismo y te explico por qué"],
  ["Educación", "Intestino y piel: la conexión", "Tu piel refleja tu intestino"],
  ["Educación", "Original, White o Antiinflamatorio", "Cuál elegir según tu objetivo"],
  ["Educación", "Cúrcuma + pimienta + grasa", "La combinación que multiplica la absorción"],
  ["Educación", "Vinagre de manzana con la madre", "Por qué lo usamos en cada lote"],
  ["Educación", "Mitos del caldo de huesos", "3 cosas que te dijeron mal"],
  ["Estilo de vida", "Mi ritual de la mañana", "Antes del café, esto"],
  ["Estilo de vida", "Un día en la cocina NutriBone", "Así se hace en lotes pequeños"],
  ["Estilo de vida", "Laura responde: cómo empecé", "La historia detrás del frasco"],
  ["Estilo de vida", "Ritual nocturno con NutriGlow", "Cuidado por fuera también"],
  ["Estilo de vida", "Volver a lo simple", "Comida real en un mundo de pastillas"],
  ["Recetas y uso", "Arroz con Icecubes", "Arroz más nutritivo en 1 paso"],
  ["Recetas y uso", "Papilla para bebé con White", "Nutrición suave para los peques"],
  ["Recetas y uso", "Latte dorado antiinflamatorio", "Tu bebida tibia de la tarde"],
  ["Recetas y uso", "Cómo calentarlo sin perder nutrientes", "El error que casi todos cometen"],
  ["Recetas y uso", "Sopa de 10 minutos", "Cena rápida y nutritiva"],
  ["Recetas y uso", "Cortar el ayuno con caldo", "Lo que tu cuerpo agradece"],
  ["Prueba social", "Testimonio: adiós hinchazón", "Lo que nos contó María"],
  ["Prueba social", "Antes y después de 30 días", "Constancia que se nota"],
  ["Prueba social", "Capturas de WhatsApp reales", "Lo que dicen nuestras clientas"],
  ["Prueba social", "Unboxing Pack Mensual", "Así llega a tu casa"],
  ["Venta directa", "Pack Semanal para empezar", "7 días, 110 Bs"],
  ["Venta directa", "Pack Mensual: menos de 14 Bs/día", "Tu mes completo de bienestar"],
  ["Venta directa", "Devolvé tus frascos y ahorrá", "Precio de reposición"],
  ["Venta directa", "Suscripción con delivery gratis", "Olvidate de volver a pedir"],
  ["Venta directa", "Combo caldo + NutriGlow", "Por dentro y por fuera"],
  ["Venta directa", "Entrega de esta semana", "Pedí con 24 h de anticipación"],
  ["Venta directa", "Icecubes para la familia", "500 ml desde 65 Bs"],
];

const channelCycle: Channel[] = ["Reel", "Story", "Carrusel", "Story", "Post", "Reel", "Story", "Grupo FB", "Carrusel", "Story", "Blog", "Reel"];
const productFor: Record<Pillar, string[]> = {
  "Educación": ["MEN-ORG-30x150-VID", "SEM-WHT-7x150-VID", "MEN-ANT-30x100-PP"],
  "Estilo de vida": ["SGL-ORG-1000-VID", "COS-NGL-30", "SEM-ORG-7x150-PP"],
  "Recetas y uso": ["ICE-ORG-500-PP", "SGL-WHT-1000-VID", "ICE-ANT-500-PP"],
  "Prueba social": ["MEN-ORG-30x150-VID", "SEM-ANT-7x100-PP", "MEN-WHT-30x100-VID"],
  "Venta directa": ["SEM-ORG-7x150-PP", "MEN-ORG-30x150-PP", "ICE-ORG-500-PP"],
};
const ctas = ["Pedí en la tienda (link en bio)", "Escribí 'CALDO' por DM", "Guardalo y compartilo", "Comprá desde el link de la story", "Comentá 'QUIERO' y te paso el link"];

export const contentPlan: ContentPiece[] = Array.from({ length: 90 }, (_, i) => {
  const [pillar, title, hook] = ideas[(i * 7) % ideas.length]!;
  return {
    id: i + 1,
    day: Math.floor(i / 3) + 1,
    channel: channelCycle[i % channelCycle.length]!,
    pillar,
    title,
    hook,
    cta: ctas[i % ctas.length]!,
    product: productFor[pillar][i % 3]!,
  };
});
