import Image from "next/image";
import { TEAM } from "../(home)/data/team.data";

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
          {TEAM.map((teammate) => (
            <article
              key={teammate.name}
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
      </div>
    </section>
  );
}
