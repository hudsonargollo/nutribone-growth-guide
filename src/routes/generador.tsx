"use client";

import { createFileRoute } from "@tanstack/react-router";
import { generatePrompts, promptTemplates } from "@/data/prompts";
import { products, varieties, formats, containers } from "@/data/catalog";

export const Route = createFileRoute("/generador")({
  component: Generador,
});

function Generador() {
  return (
    <div>
      <section className="py-10 sm:py-16">
        <div className="max-w-3xl">
          <p className="font-serif text-5xl leading-[1.05] tracking-tight text-slate-900">
            Generador de prompts.
          </p>
          <h1 className="mt-4 font-serif text-6xl leading-[1.05] tracking-tight text-slate-900">
            Pide lo que quieres, y te armo el prompt.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Elegí formato, producto, público y objetivo. Te devuelvo los prompts para imagen, la
            captura y la secuencia de Stories. Listos para copiar.
          </p>
        </div>
      </section>

      <section className="border-t border-slate-700-10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: "Formato",
                options: ["feed", "reel", "story", "carousel", "highlight"] as const,
              },
              { label: "Producto", options: products.map((p) => p.name) },
              { label: "Público", options: ["mujer35", "mama", "digestivo", "atleta", "senior"] },
              { label: "Objetivo", options: ["educate", "sell", "refill", "social proof"] },
            ].map((f) => (
              <div key={f.label}>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  {f.label}
                </p>
                <select className="mt-1 w-full rounded-xl border border-slate-700-10 bg-white px-4 py-2.5 text-sm text-slate-700">
                  {(f.options as string[]).map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-700-10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {promptTemplates.map((t) => (
              <div key={t.id} className="rounded-3xl border border-slate-700-10 bg-white/80 p-5">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-serif text-xl text-slate-900">{t.name}</h3>
                    <p className="text-xs text-slate-400">
                      {t.format} · {t.buyer} · {t.goal} · {t.tone}
                    </p>
                  </div>
                  <button
                    aria-label={`Copiar prompt ${t.id}`}
                    className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                    onClick={() => {
                      const content = [
                        `# Prompt para imagen — ${t.name}`,
                        t.cover,
                        ``,
                        `# Captura — ${t.format}`,
                        t.body,
                        ``,
                        `# Caption — ${t.format}`,
                        t.caption,
                        ``,
                        `# Hashtags`,
                        t.hashtags.join(" "),
                        ``,
                        `# Secuencia de Stories (5)`,
                        ...t.story.map((s, i) => `${i + 1}. ${s}`),
                      ].join("\n");
                      navigator.clipboard.writeText(content);
                    }}
                  >
                    Copiar
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M8 16H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2m-6 12h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z" />
                    </svg>
                  </button>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{t.cover}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{t.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Generador;
