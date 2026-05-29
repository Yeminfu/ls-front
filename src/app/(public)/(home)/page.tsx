import type { Metadata } from "next";
import { Cause } from "./components/cause";
import { CAUSES } from "./data/causes.data";

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
    <div>
      <section aria-label="Направления деятельности" className="scroll-mt-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-800">
            Наши направления
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CAUSES.map((cause, i) => (
            <Cause key={i} cause={cause} />
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
  );
}
