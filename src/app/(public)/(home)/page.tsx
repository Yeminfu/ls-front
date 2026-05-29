import type { Metadata } from "next";
import { Cause } from "./components/cause";
import { CAUSES } from "./data/causes.data";
import Image from "next/image";

// 💡 Логотип лучше положить в папку /public и импортировать строкой
// Если используете import-логотип, убедитесь, что путь корректен для вашего alias
// import Logo from "@/../public/logo.png"; // или просто "/logo.png", если файл в public/

export const metadata: Metadata = {
  title: "Лига Спас — Добровольческий поисково-спасательный отряд",
  description:
    "Официальный сайт ДПСО «Лига Спас». Направления деятельности, помощь, волонтёрство.",
  icons: {
    icon: "/favicon.ico",
    apple: "/images/icon.jpg",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Декоративный фон (опционально) */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-orange-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Шапка с логотипом */}
        <header className="text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center justify-center">
            <div className="relative">
              {/* Декоративное кольцо вокруг логотипа */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-orange-400 blur opacity-30 animate-pulse" />
              {/* <Image
                src={Logo || "/logo.png"}
                alt="Логотип Лига Спас"
                width={96}
                height={96}
                className="relative rounded-full border-4 border-white shadow-lg"
                placeholder="blur"
                priority
              /> */}
            </div>
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
            Лига Спас
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Добровольческий поисково-спасательный отряд
          </p>

          {/* Акцентная линия */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full" />
            <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
              Помощь • Поиск • Спасение
            </span>
            <div className="h-1 w-16 bg-gradient-to-l from-blue-600 to-orange-500 rounded-full" />
          </div>

          {/* Кнопки действий */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Присоединиться
            </button>
            <button className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-lg border border-slate-200 shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2">
              Поддержать отряд
            </button>
          </div>
        </header>

        {/* Сетка направлений */}
        <section aria-label="Направления деятельности" className="scroll-mt-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-800">
              Наши направления
            </h2>
            <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
              {CAUSES.length} программ
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {CAUSES.map((cause,i) => (
              <Cause
                key={i}
                cause={cause}
                // className="hover:-translate-y-1 transition-transform duration-300"
              />
            ))}
          </div>
        </section>

        {/* Футер-призыв (опционально) */}
        <section className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-8 sm:p-10 text-white">
            <h3 className="text-2xl font-bold mb-3">
              Каждая минута на счету
            </h3>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
              Присоединяйтесь к команде спасателей или поддержите нас — ваша помощь спасает жизни.
            </p>
            <button className="px-8 py-3 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg">
              Связаться с нами
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}