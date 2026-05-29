import Image from "next/image";
import Link from "next/link";

import { TEAM } from "../../(public)/(home)/data/team.data";

export default function Page() {
  return (
    <>
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Команда
        </h1>

        <Link
          href="/admin/team/create"
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-6 py-4 text-sm font-bold text-white shadow-lg transition hover:scale-[1.02] hover:bg-orange-600"
        >
          <span className="text-lg leading-none">+</span>
          Добавить
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {TEAM.map((teammate, i) => {
          return (
            <div
              key={i}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="overflow-hidden">
                <Image
                  src={teammate.image}
                  alt={teammate.name}
                  width={600}
                  height={320}
                  className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-8">
                <div className="text-2xl font-bold text-slate-900">
                  {teammate.name}
                </div>

                <p className="mt-4 leading-7 text-slate-600">
                  {teammate.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}