"use client";

import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/data/catalog";

export const Route = createFileRoute("/highlights")({
  component: Highlights,
});

function Highlights() {
  return (
    <div>
      <section className="py-10 sm:py-16">
        <div className="max-w-3xl">
          <p className="font-serif text-5xl leading-[1.05] tracking-tight text-slate-900">
            Planner de Highlights.
          </p>
          <h1 className="mt-4 font-serif text-6xl leading-[1.05] tracking-tight text-slate-900">
            Cada highlight, ordenado y listo para publicar.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Set de Highlights sugeridos para acompañar la campaña. Todos apuntan al catálogo y al
            shop.
          </p>
        </div>
      </section>

      <section className="border-t border-slate-700-10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap gap-3">
            <select
              aria-label="Filtrar por categoría"
              className="rounded-xl border border-slate-700-10 bg-white px-4 py-2.5 text-sm text-slate-700"
            >
              <option value="all">Todos los Highlights</option>
              {(
                [
                  "Catalogo",
                  "Como tomarlo",
                  "Refills",
                  "Reseñas",
                  "Recetas",
                  "FAQ",
                  "Pedido",
                ] as const
              ).map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <select
              aria-label="Filtrar por producto"
              className="rounded-xl border border-slate-700-10 bg-white px-4 py-2.5 text-sm text-slate-700"
            >
              <option value="all">Todos los productos</option>
              {(Array.from(new Set(products.map((p) => p.name))) as string[]).map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Catálogo",
              cover: "Foto del producto principal con precio y envase visible.",
              slides: [
                "Portada con título «Catálogo»",
                "Fotos de cada variedad",
                "Precio y botón de pedido",
              ],
              prompt: "Fondo crema, texto grande «Catálogo» y el frasco de vidrio con luz cálida.",
            },
            {
              title: "Cómo tomarlo",
              cover: "Imagen de la porción tibie en una taza, bañada en luz de polo.",
              slides: ["Toma con agua tibia en ayunas", "Se cocina 48 horas", "Se puede gelificar"],
              prompt: "Fotos de una taza con caldo tibie y una cuchara de madera, fondo crema.",
            },
            {
              title: "Refills",
              cover: "Frascos de vidrio vacíos junto al producto en reposición.",
              slides: [
                "Devolvé los vidrios y ahorrás",
                "Precio de reposición",
                "El siguiente pedido",
              ],
              prompt: "Frascos de vidrio limpios en una alfombra, luz cálida, fondo crema.",
            },
            {
              title: "Reseñas",
              cover: "Fotografía de testimonio con captura de texto.",
              slides: ["Testimonio de una cliente", "Lo que notó en 30 días", "Recomendación"],
              prompt: "Fondo crema, texto grande y pequeño de testimonio, estilo editorial.",
            },
            {
              title: "Recetas",
              cover: "Plato con Icecubes en la sopa o arroz.",
              slides: ["Arroz con Icecubes", "Papilla con White", "Cortar el ayuno"],
              prompt: "Fondo crema, cubos de caldo en la sopa y un plato sencillo.",
            },
            {
              title: "FAQ",
              cover: "Preguntas y respuestas en tarjetas minimizables.",
              slides: [
                "¿Se puede pedir con envíos regulares?",
                "¿Cuánto dura en heladera?",
                "¿Qué es el colágeno?",
              ],
              prompt: "Fondo crema, tarjetas claras y iconos sencillos.",
            },
            {
              title: "Pedido",
              cover: "Flecha hacia el shop con el botón de pedir en WhatsApp.",
              slides: ["Elegí tu producto", "Elegí entrega y fecha", "Pago y confirmación"],
              prompt: "Fondo crema, un celular desplegado mostrando el shop, luz cálida.",
            },
          ].map((h) => (
            <div key={h.title} className="rounded-3xl border border-slate-700-10 bg-white/80 p-5">
              <h3 className="font-serif text-xl text-slate-900">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{h.cover}</p>
              <div className="mt-3 space-y-1 text-xs text-slate-500">
                {h.slides.map((s) => (
                  <p key={s}>{s}</p>
                ))}
              </div>
              <p className="mt-3 text-xs font-medium uppercase tracking-wider text-slate-400">
                Prompt de imagen
              </p>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">{h.prompt}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Highlights;
