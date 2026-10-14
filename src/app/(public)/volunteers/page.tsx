import Image from "next/image";
import { TEAM } from "../(home)/data/team.data";
import {
  NOT_INVOLVED,
  RESOURCES,
  WHEN_TO_INVOLVE,
} from "./data/volunteer-info.data";

export default function Page() {
  return (
    <section className="">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Наша команда
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Добровольцы, координаторы и специалисты, которые ежедневно помогают
            искать пропавших людей и участвуют в спасательных операциях.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {TEAM.map((teammate, i) => (
            <article
              key={i}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="overflow-hidden">
                <Image
                  src={teammate.image}
                  alt={teammate.name}
                  width={600}
                  height={320}
                  className="h-[280px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-8">
                <h2 className="text-2xl font-bold text-slate-900">
                  {teammate.name}
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  {teammate.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Когда привлекать волонтёров */}
        <div className="mt-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            Волонтёрам
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">
            В каких случаях привлекают волонтёров
          </h2>

          <ul className="mt-8 space-y-4">
            {WHEN_TO_INVOLVE.map((item, i) => (
              <li
                key={i}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500" />
                <span className="leading-7 text-slate-700">{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 p-6 font-semibold text-orange-700">
            {NOT_INVOLVED[0]}
          </p>
        </div>

        {/* Ресурсы отряда при ПМ */}
        <div className="mt-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            Возможности
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">
            Ресурсы отряда при ПМ
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {RESOURCES.map((item, i) => (
              <div
                key={i}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="mt-4 leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
