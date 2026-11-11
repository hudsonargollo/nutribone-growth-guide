"use client";

import { createFileRoute } from "@tanstack/react-router";
import { whatsappLink } from "@/data/catalog";
import { scriptStages, scripts } from "@/data/content";

export const Route = createFileRoute("/whatsapp")({
  component: WhatsApp,
});

function WhatsApp() {
  return (
    <div>
      <section className="py-10 sm:py-16">
        <div className="max-w-3xl">
          <p className="font-serif text-5xl leading-[1.05] tracking-tight text-slate-900">
            Guía de conversación.
          </p>
          <h1 className="mt-4 font-serif text-6xl leading-[1.05] tracking-tight text-slate-900">
            Cada respuesta, con enlace de compra.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Los scripts cierran con un enlace directo al catálogo. Copiá y pegá en WhatsApp Business
            o usá el botón de abrir el chat.
          </p>
        </div>
      </section>

      <section className="border-t border-slate-700-10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap gap-3">
            <select
              aria-label="Filtrar por etapa"
              className="rounded-xl border border-slate-700-10 bg-white px-4 py-2.5 text-sm text-slate-700"
            >
              <option value="all">Todas las etapas</option>
              {(Array.from(scriptStages) as string[]).map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <input
              placeholder="Buscar por título"
              className="rounded-xl border border-slate-700-10 bg-white px-4 py-2.5 text-sm text-slate-700"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <div className="space-y-6">
          {scripts.map((s) => (
            <div key={s.id} className="rounded-3xl border border-slate-700-10 bg-white/80 p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-medium text-xs uppercase tracking-wider text-slate-400">
                    {s.stage}
                  </p>
                  <h2 className="mt-1 font-serif text-2xl text-slate-900">{s.title}</h2>
                  <p className="text-sm text-slate-500">{s.when}</p>
                </div>
                <button
                  aria-label="Abrir en WhatsApp"
                  className="inline-flex shrink-0 items-center gap-2 self-start rounded-xl border border-slate-700-10 bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                  onClick={() => {
                    const text = s.text(
                      "https://wa.me/59177313568?text=" +
                        encodeURIComponent("Hola, quería más información"),
                    );
                    window.open(
                      `https://wa.me/59177313568?text=${encodeURIComponent(text)}`,
                      "_blank",
                    );
                  }}
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                  </svg>
                  Abrir en WhatsApp
                </button>
              </div>
              <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-slate-700">
                {s.text("https://wa.me/59177313568?text=Hola")}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default WhatsApp;
