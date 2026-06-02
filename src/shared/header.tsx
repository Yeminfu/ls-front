import Image from "next/image";
import Navbar from "./navbar";
import Link from "next/link";

export function Header() {
  return (
    <div>
      <Navbar />
      <header className="border-b border-slate-200 bg-slate-100">
        <div className="my-6 px-4 text-center ">
          <Link href="/" className="inline-block">
            <Image
              src="/logo.png"
              alt="Логотип Лига Спас"
              width={96}
              height={96}
              className="mx-auto rounded-full border-4 border-white shadow-lg"
              priority
            />
          </Link>

          <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Лига Спас
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Добровольческий поисково-спасательный отряд
          </p>

          <div className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:text-sm">
            Помощь • Поиск • Спасение
          </div>
        </div>
      </header>
    </div>
  );
}
