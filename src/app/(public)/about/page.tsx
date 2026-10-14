import Image from "next/image";
import type { Metadata } from "next";
import { MISSION, MISSION_INTRO } from "./data/mission.data";
import { TASKS } from "./data/tasks.data";
import { HISTORY } from "./data/history.data";

export const metadata: Metadata = {
  title: "О нас — Лига Спас",
  description:
    "Добровольческий поисково-спасательный отряд «Лига Спас»: миссия, задачи и история отряда.",
};

export default function Page() {
  return (
    <section className="space-y-20">
      <header>
        <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
          О нас
        </h1>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          {MISSION_INTRO}
        </p>
      </header>

      {/* Кто мы */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
          Кто мы
        </p>

        <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">
          Мы — добровольцы
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {MISSION.map((point, i) => (
            <article
              key={i}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {point.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                {point.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* Задачи отряда */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
          Задачи отряда
        </p>

        <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">
          Чем мы занимаемся
        </h2>

        <ol className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TASKS.map((task, i) => (
            <li
              key={i}
              className="relative rounded-3xl border border-slate-200 bg-white p-8 pl-16 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="absolute left-6 top-8 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                {i + 1}
              </span>

              <h3 className="text-lg font-bold text-slate-900">{task.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">
                {task.description}
              </p>
            </li>
          ))}
        </ol>
      </div>

      {/* История */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
          История
        </p>

        <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">
          Жизнь отряда
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HISTORY.map((item, i) => (
            <figure
              key={i}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.caption}
                  width={1920}
                  height={1080}
                  className="h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <figcaption className="p-5 text-sm font-semibold text-slate-700">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
