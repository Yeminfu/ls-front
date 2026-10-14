import type { Metadata } from "next";
import { RULES } from "./data/rules.data";

export const metadata: Metadata = {
  title: "Правила отряда — Лига Спас",
  description:
    "Правила добровольческого поисково-спасательного отряда «Лига Спас» для волонтёров.",
};

export default function Page() {
  return (
    <section>
      <header>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
          Отряд
        </p>

        <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
          Правила отряда
        </h1>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          Правила, которых придерживаются все волонтёры «Лига Спас» во время
          поисковых мероприятий.
        </p>
      </header>

      <ol className="mt-10 space-y-4">
        {RULES.map((rule, i) => (
          <li
            key={i}
            className="flex gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:shadow-lg sm:p-8"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-base font-bold text-white">
              {i + 1}
            </span>

            <p className="pt-1.5 leading-7 text-slate-700">{rule.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
