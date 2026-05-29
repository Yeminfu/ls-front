import Image from "next/image";
import Navbar from "./navbar";

export function Header() {
  return (
    <div>
      <Navbar/>
      <header className="text-center mb-14 sm:mb-20">
        <div className="inline-flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-orange-400 blur opacity-30 animate-pulse" />
            <Image
              src={"/logo.png"}
              alt="Логотип Лига Спас"
              width={96}
              height={96}
              className="relative rounded-full border-4 border-white shadow-lg"
              priority
            />
          </div>
        </div>

        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
          Лига Спас
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
          Добровольческий поисково-спасательный отряд
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full" />
          <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
            Помощь • Поиск • Спасение
          </span>
          <div className="h-1 w-16 bg-gradient-to-l from-blue-600 to-orange-500 rounded-full" />
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Присоединиться
          </button>
          <button className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-lg border border-slate-200 shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2">
            Поддержать отряд
          </button>
        </div>
      </header>
    </div>
  );
}
