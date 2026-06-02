import Image from "next/image";
import Navbar from "./navbar";
import Link from "next/link";

export function Header() {
  return (
    <div>
      <Navbar />
      <header className="my-10 text-center">
        <Link href="/" className="inline-block">
          <Image
            src="/logo.png"
            alt="Логотип Лига Спас"
            width={96}
            height={96}
            className="rounded-full border-4 border-white shadow-lg"
            priority
          />
        </Link>

        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
          Лига Спас
        </h1>

        <p className="mt-2 text-lg text-slate-600">
          Добровольческий поисково-спасательный отряд
        </p>

        <div className="mt-4 flex items-center justify-center gap-3">
          <div className="h-1 w-12 rounded-full bg-gradient-to-r from-blue-600 to-orange-500" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Помощь • Поиск • Спасение
          </span>
          <div className="h-1 w-12 rounded-full bg-gradient-to-l from-blue-600 to-orange-500" />
        </div>
      </header>
    </div>
  );
}
