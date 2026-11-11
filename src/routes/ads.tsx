"use client";

import { createFileRoute } from "@tanstack/react-router";
import { ads, adLink, personas } from "@/data/content";
import { products, varieties, formats, containers } from "@/data/catalog";
import { shopLink } from "@/data/catalog";

export const Route = createFileRoute("/ads")({
  component: Ads,
});

function Ads() {
  return (
    <div>
      <section className="py-10 sm:py-16">
        <div className="max-w-3xl">
          <p className="font-serif text-5xl leading-[1.05] tracking-tight text-slate-900">
            Anuncios que venden.
          </p>
          <h1 className="mt-4 font-serif text-6xl leading-[1.05] tracking-tight text-slate-900">
            Cada anuncio lleva al carrito.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Los 15 anuncios directos ya escritos más nuevos. Cada uno tiene gancho, cuerpo, CTA y un
            enlace que rastrea de dónde llegó.
          </p>
        </div>
      </section>

      <section className="border-t border-slate-700-10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap gap-3">
            <select
              aria-label="Filtrar por funil"
              className="rounded-xl border border-slate-700-10 bg-white px-4 py-2.5 text-sm text-slate-700"
            >
              <option value="all">Todos los funeles</option>
              {(["TOFU", "MOFU", "BOFU"] as const).map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
            <select
              aria-label="Filtrar por persona"
              className="rounded-xl border border-slate-700-10 bg-white px-4 py-2.5 text-sm text-slate-700"
            >
              <option value="all">Todas las personas</option>
              {(Array.from(personas.map((p) => p.id)) as string[]).map((id) => (
                <option key={id} value={id}>
                  {personas.find((p) => p.id === id)?.name ?? id}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <div className="grid gap-4">
          {ads.map((a) => {
            const persona = personas.find((p) => p.id === a.persona);
            return (
              <div
                key={a.id}
                className="flex flex-col gap-3 rounded-3xl border border-slate-700-10 bg-white/80 p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex shrink-0 items-center gap-2">
                    <span
                      className={`inline-flex rounded-xl px-3 py-1 text-xs font-medium ${
                        a.funnel === "TOFU"
                          ? "bg-slate-900/5 text-slate-700"
                          : a.funnel === "MOFU"
                            ? "bg-brand-soft/40 text-brand-foreground"
                            : "bg-gold-soft/60 text-gold-soft"
                      }`}
                    >
                      {a.funnel}
                    </span>
                    <span className="text-xs text-slate-400">{a.format}</span>
                  </div>
                  <div>
                    <h2 className="font-serif text-xl text-slate-900">{a.hook}</h2>
                    <p className="text-sm text-slate-600">{a.body}</p>
                    {persona ? <p className="text-xs text-slate-400">{persona.name}</p> : null}
                  </div>
                </div>
                <div className="flex shrink-0 flex-wrap items-center gap-3">
                  <a
                    href={
                      adLink(a) ||
                      shopLink({ source: "meta", medium: "paid", campaign: a.campaign })
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                  >
                    {a.cta}
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                  <button
                    aria-label={`Copiar anuncio ${a.id}`}
                    className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-slate-700-10 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                    onClick={() => {
                      const content = `${a.hook} — ${a.body}\nCTA: ${a.cta}\n${adLink(a)}`;
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
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Ads;
