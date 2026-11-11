import { createFileRoute } from "@tanstack/react-router";
import { products, varieties, formats, containers, policies, shopLink } from "@/data/catalog";

export const Route = createFileRoute("/")({
  component: Overview,
});

function Overview() {
  const lineCount = new Set(products.map((p) => p.line)).size;
  const varietyCount = new Set(products.map((p) => p.variety)).size;
  const caliber = products.reduce((acc, p) => acc + p.totalMl, 0);

  return (
    <div>
      <section className="py-10 sm:py-16">
        <div className="max-w-3xl">
          <p className="font-serif text-5xl leading-[1.05] tracking-tight text-slate-900">
            Un caldo de huesos que tu cuerpo reconoce.
          </p>
          <h1 className="mt-4 font-serif text-6xl leading-[1.05] tracking-tight text-slate-900">
            Hecho a mano, sin aditivos.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Cocinamos caldos de huesos de res durante 48 horas, con verduras orgánicas, sal rosada y
            vinagre de sidra de manzana con la madre. Después, elegí el sabor que mejor te funciona
            y pedilo en dos minutos.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={"https://wa.me/" + "59177313568"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
              </svg>
              Pedir por WhatsApp
            </a>
            <a
              href={shopLink({ source: "home", campaign: "overview" })}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl border border-slate-700-10 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <path d="M9 22V12h6v10" />
              </svg>
              Ver el catálogo
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-700-10 py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Sabores", value: String(varietyCount), hint: "de 6 variedades" },
            { label: "Presentaciones", value: String(products.length), hint: "unidades en total" },
            {
              label: "Volumen",
              value: `${(caliber / 1000).toFixed(1)} L`,
              hint: "de caldo por lote",
            },
            { label: "Dominios", value: String(lineCount), hint: "caldo y cosmética" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-3xl border border-slate-700-10 bg-white/80 p-6 backdrop-blur"
            >
              <p className="text-sm font-medium text-slate-500">{s.label}</p>
              <p className="mt-2 font-serif text-4xl text-slate-900">{s.value}</p>
              <p className="mt-1 text-xs text-slate-400">{s.hint}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 py-10 sm:grid-cols-2">
        {Object.entries(varieties).map(([_, v]) => (
          <div key={v.label} className="rounded-3xl border border-slate-700-10 bg-white/80 p-6">
            <h2 className="font-serif text-2xl text-slate-900">{v.label}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.description}</p>
            <p className="mt-3 text-xs font-medium uppercase tracking-wider text-slate-400">
              Ingredientes
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-slate-600">
              {v.ingredients.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="border-t border-slate-700-10 py-10">
        <div className="max-w-3xl">
          <h2 className="font-serif text-3xl text-slate-900">Políticas de compra</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {Object.entries(policies).map(([key, value]) => {
              if (typeof value === "string") {
                return (
                  <li key={key} className="flex gap-3 text-sm text-slate-600">
                    <span className="font-medium text-slate-900">{value.label}</span>
                    <span className="text-slate-500">{value.description}</span>
                  </li>
                );
              }
              return (
                <ul key={key} className="border-l-2 border-slate-700-10 pl-4">
                  {value.rules.map((r) => (
                    <li key={r.frequency} className="py-1 text-sm text-slate-600">
                      <span className="font-medium text-slate-900">{r.frequency}</span> —{" "}
                      {r.minimum}
                    </li>
                  ))}
                </ul>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}
