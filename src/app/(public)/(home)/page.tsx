import type { Metadata } from "next";
import { Cause } from "./components/cause";
import { CAUSES } from "./data/causes.data";
import { Header } from "@/src/shared/header";

export const metadata: Metadata = {
  title: "Лига Спас — Добровольческий поисково-спасательный отряд",
  description:
    "Официальный сайт ДПСО «Лига Спас». Направления деятельности, помощь, волонтёрство.",
  icons: {
    icon: "/logo.ico",
    apple: "/images/icon.jpg",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-orange-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <Header />

        <section aria-label="Направления деятельности" className="scroll-mt-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-800">
              Наши направления
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {CAUSES.map((cause, i) => (
              <Cause
                key={i}
                cause={cause}
              />
            ))}
          </div>
        </section>

        <section className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-8 sm:p-10 text-white">
            <h3 className="text-2xl font-bold mb-3">Каждая минута на счету</h3>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
              Присоединяйтесь к команде спасателей или поддержите нас — ваша
              помощь спасает жизни.
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
