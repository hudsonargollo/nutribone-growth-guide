"use client";

import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { products, pricePerMl, formats, containers, varieties, shopLink } from "@/data/catalog";

export const Route = createFileRoute("/calculadora")({
  component: Calculator,
});

function Calculator() {
  const [units, setUnits] = useState(7);
  const [fillRefill, setFillRefill] = useState(false);

  const selected = products.find((p) => p.sku === "SEM-ORG-7x150-PP") ?? products[0];
  const ml = selected.totalMl;
  const total = ml * units;
  const perDay = units > 0 ? total / units : 0;

  return (
    <div>
      <section className="py-10 sm:py-16">
        <div className="max-w-3xl">
          <p className="font-serif text-5xl leading-[1.05] tracking-tight text-slate-900">
            Calculadora del costo.
          </p>
          <h1 className="mt-4 font-serif text-6xl leading-[1.05] tracking-tight text-slate-900">
            Cuánto cuesta tu hábito.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Te muestra el costo por día del pack que elijas. Con los precios reales del catálogo.
          </p>
        </div>
      </section>

      <section className="border-t border-slate-700-10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => {
              const ml = p.totalMl;
              const daily = p.priceFirst / ml;
              return (
                <button
                  key={p.sku}
                  onClick={() => {}}
                  className={`rounded-3xl border p-4 text-left transition-colors ${
                    selected.sku === p.sku
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-700-10 bg-white hover:border-slate-900"
                  }`}
                >
                  <span className="text-sm font-medium text-slate-400">
                    {formats[p.format].label} · {containers[p.container]}
                  </span>
                  <span className="mt-1 block font-serif text-2xl text-slate-900">
                    {p.priceFirst} Bs
                  </span>
                  <span className="mt-1 text-xs text-slate-400">≈ {daily.toFixed(1)} Bs/día</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-700-10 py-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl text-slate-900">Tu cálculo</h2>
          <p className="mt-2 text-slate-600">
            Palabras detrás del resultado: el pack elegido, cuántas porciones tomas al día y cuánto
            te sale al mes.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="units" className="text-sm font-medium text-slate-700">
                Porciones al día
              </label>
              <input
                id="units"
                type="range"
                min={1}
                max={30}
                value={units}
                onChange={(e) => setUnits(Number(e.target.value))}
                className="mt-2 w-full accent-slate-900"
              />
              <div className="mt-1 flex justify-between text-sm text-slate-500">
                <span>1</span>
                <span>2</span>
                <span>30</span>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-3">
              <div className="text-sm text-slate-500">
                <span className="font-medium text-slate-700">Apparent volume</span>
                <p className="mt-1">
                  {selected.units} x {selected.unitMl} ml ={" "}
                  <strong className="text-slate-900">{ml} ml</strong>
                </p>
              </div>
              <div className="text-sm text-slate-500">
                <span className="font-medium text-slate-700">Select a pack to calculate</span>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3 rounded-3xl border border-slate-700-10 bg-white/80 p-6 text-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Total</p>
              <p className="mt-1 font-serif text-4xl text-slate-900">{total} Bs</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Por día</p>
              <p className="mt-1 font-serif text-4xl text-slate-900">{perDay.toFixed(1)} Bs</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Por mes</p>
              <p className="mt-1 font-serif text-4xl text-slate-900">{perDay * 30} Bs</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              aria-label="Abrir WhatsApp"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              onClick={() => {
                const text = `¡Hola! Quería empezar el Pack Semanal. ¿Me confirming el producto?`;
                window.open(`https://wa.me/59177313568?text=${encodeURIComponent(text)}`, "_blank");
              }}
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
              </svg>
              Pedir por WhatsApp
            </button>
            <a
              href={shopLink({ source: "calculadora", campaign: "calculadora" })}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700-10 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            >
              <svg
                className="h-4 w-4"
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
    </div>
  );
}

export default Calculator;
