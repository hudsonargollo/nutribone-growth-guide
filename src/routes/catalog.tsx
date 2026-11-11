"use client";

import { createFileRoute } from "@tanstack/react-router";
import {
  products,
  varieties,
  formats,
  containers,
  shopLink,
  catalogToCsv,
  catalogToJson,
} from "@/data/catalog";

export const Route = createFileRoute("/catalog")({
  component: Catalog,
});

function Catalog() {
  const varietySet = new Set(products.map((p) => p.variety));
  const sizes = new Set(products.map((p) => `${p.totalMl} ml`));

  return (
    <div>
      <section className="py-10 sm:py-16">
        <div className="max-w-3xl">
          <p className="font-serif text-5xl leading-[1.05] tracking-tight text-slate-900">
            Elegí tu presentación.
          </p>
          <h1 className="mt-4 font-serif text-6xl leading-[1.05] tracking-tight text-slate-900">
            Catálogo del lote.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Cada producto incluye precio de primera compra y, cuando corresponde, precio de
            reposición al devolver el envase limpio. Los precios están en bolivianos.
          </p>
        </div>
      </section>

      <section className="border-t border-slate-700-10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap gap-3">
            <select
              aria-label="Filtrar por línea"
              className="rounded-xl border border-slate-700-10 bg-white px-4 py-2.5 text-sm text-slate-700"
            >
              <option value="all">Todas las líneas</option>
              {(["caldo", "cosmetica"] as const).map((l) => (
                <option key={l} value={l}>
                  {l === "caldo" ? "Caldo de huesos" : "Cosmética"}
                </option>
              ))}
            </select>
            <select
              aria-label="Filtrar por variedad"
              className="rounded-xl border border-slate-700-10 bg-white px-4 py-2.5 text-sm text-slate-700"
            >
              <option value="all">Todas las variedades</option>
              {(Array.from(varietySet) as import("@/data/catalog").Variety[]).map((v) => (
                <option key={v} value={v}>
                  {varieties[v].label}
                </option>
              ))}
            </select>
            <select
              aria-label="Filtrar por tamaño"
              className="rounded-xl border border-slate-700-10 bg-white px-4 py-2.5 text-sm text-slate-700"
            >
              <option value="all">Todos los tamaños</option>
              {(Array.from(sizes) as string[]).map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <a
              key={p.sku}
              href={shopLink({ source: "catalog", medium: "product", content: p.sku })}
              className="group flex flex-col rounded-3xl border border-slate-700-10 bg-white/80 p-5 backdrop-blur transition-shadow hover:shadow-lg"
            >
              <div className="flex gap-4">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-24 w-24 shrink-0 rounded-2xl object-contain bg-slate-100"
                />
                <div className="min-w-0 flex-1">
                  <h2 className="truncate font-serif text-xl text-slate-900">{p.name}</h2>
                  <p className="mt-1 text-sm text-slate-500">
                    {formats[p.format].label} · {containers[p.container]}
                  </p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-wider text-slate-400">
                    {varieties[p.variety].label}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                {p.priceRefill !== null ? (
                  <>
                    <span className="font-serif text-3xl text-slate-900">{p.priceFirst} Bs</span>
                    <span className="text-sm text-slate-400">/ reposición {p.priceRefill} Bs</span>
                  </>
                ) : (
                  <span className="font-serif text-3xl text-slate-900">{p.priceFirst} Bs</span>
                )}
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">{p.notes}</p>
              <span className="mt-4 inline-flex shrink-0 items-center gap-2 self-start rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800">
                Ver precio y pedido
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-700-10 py-10">
        <div className="flex flex-wrap gap-3">
          <a
            href={catalogToCsv()}
            download="catalog.csv"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700-10 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
            </svg>
            Descargar CSV
          </a>
          <a
            href={catalogToJson()}
            download="catalog.json"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700-10 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
              <path d="M13 2v7h7" />
            </svg>
            Descargar JSON
          </a>
          <a
            href={"https://wa.me/" + "59177313568"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
            </svg>
            Pedir por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}

export default Catalog;
