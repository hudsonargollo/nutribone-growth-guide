"use client";

import { createFileRoute } from "@tanstack/react-router";
import { contentPlan, personas } from "@/data/content";
import { products } from "@/data/catalog";

export const Route = createFileRoute("/contenido")({
  component: Contenido,
});

function Contenido() {
  return (
    <div>
      <section className="py-10 sm:py-16">
        <div className="max-w-3xl">
          <p className="font-serif text-5xl leading-[1.05] tracking-tight text-slate-900">
            Plan de contenido.
          </p>
          <h1 className="mt-4 font-serif text-6xl leading-[1.05] tracking-tight text-slate-900">
            Mensajes que convierten.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Cada pieza apunta a un producto y a un público. Copiá, adaptá al tono de la cuenta y
            publicá en el canal que mejor funcione.
          </p>
        </div>
      </section>

      <section className="border-t border-slate-700-10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap gap-3">
            <select
              aria-label="Filtrar por canal"
              className="rounded-xl border border-slate-700-10 bg-white px-4 py-2.5 text-sm text-slate-700"
            >
              <option value="all">Todos los canales</option>
              {(["Reel", "Carrusel", "Post", "Story", "Blog", "Grupo FB"] as const).map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <select
              aria-label="Filtrar por pilar"
              className="rounded-xl border border-slate-700-10 bg-white px-4 py-2.5 text-sm text-slate-700"
            >
              <option value="all">Todos los pilares</option>
              {(
                [
                  "Educación",
                  "Estilo de vida",
                  "Recetas y uso",
                  "Prueba social",
                  "Venta directa",
                ] as const
              ).map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
            <input
              placeholder="Buscar título"
              className="rounded-xl border border-slate-700-10 bg-white px-4 py-2.5 text-sm text-slate-700"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <div className="grid gap-3">
          {contentPlan.map((piece) => (
            <div
              key={piece.id}
              className="flex flex-col gap-3 rounded-3xl border border-slate-700-10 bg-white/80 p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-slate-900/5 px-3 py-1 text-xs font-medium text-slate-700">
                    {piece.channel}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-gold-soft/60 px-3 py-1 text-xs font-medium text-slate-800">
                    {piece.pillar}
                  </span>
                  <span className="text-xs text-slate-400">Día {piece.day}</span>
                </div>
                <h2 className="mt-2 font-serif text-xl text-slate-900">{piece.title}</h2>
                <p className="text-sm text-slate-600">{piece.hook}</p>
                <p className="text-sm font-medium text-slate-500">
                  <span className="text-slate-400">Producto:</span> {piece.product}
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
                  {piece.cta}
                </span>
                <button
                  aria-label={`Copiar ${piece.title}`}
                  className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-slate-700-10 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                  onClick={() => {
                    const content = `${piece.title} — ${piece.hook}\n${piece.cta}\n${piece.product}`;
                    navigator.clipboard.writeText(content);
                  }}
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M8 16H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2m-6 12h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z" />
                  </svg>
                  Copiar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-700-10 py-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl text-slate-900">Perfiles de comprador</h2>
          <p className="mt-2 text-slate-600">
            Cada perfil define qué les hablamos y qué productos les recomendamos.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {personas.map((p) => (
              <div key={p.id} className="rounded-3xl border border-slate-700-10 bg-white/80 p-5">
                <h3 className="font-serif text-xl text-slate-900">{p.name}</h3>
                <p className="text-sm text-slate-500">{p.age}</p>
                <p className="mt-2 text-sm text-slate-600">{p.hook}</p>
                <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-slate-600">
                  {p.pains.map((pain) => (
                    <li key={pain}>{pain}</li>
                  ))}
                </ul>
                <p className="mt-3 text-xs font-medium uppercase tracking-wider text-slate-400">
                  Productos recomendados
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.bestProducts.map((sku) => {
                    const prod = products.find((x) => x.sku === sku);
                    if (!prod) return null;
                    return (
                      <span
                        key={sku}
                        className="inline-flex items-center rounded-full bg-slate-900/5 px-3 py-1 text-xs font-medium text-slate-700"
                      >
                        {prod.name} — {prod.priceFirst} Bs
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contenido;
