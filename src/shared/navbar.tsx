"use client";

import Link from "next/link";
import { useState } from "react";

type MenuItem = {
  text: string;
  link: string;
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems: MenuItem[] = [
    { text: "Главная", link: "/" },
    { text: "Наша команда", link: "/volunteers" },
  ];
  return (
    <nav className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <div className="hidden items-center gap-6 md:flex">
          {menuItems.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              className="text-sm font-medium text-slate-700 transition hover:text-orange-500"
            >
              {item.text}
            </Link>
          ))}
        </div>

        <button className="hidden rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600 md:block">
          Помочь
        </button>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="h-6 w-6 text-slate-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="flex flex-col px-4 py-4">
            {menuItems.map((item,i) => (
              <Link
                key={i}
                href={item.link}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-orange-50 hover:text-orange-500"
              >
                {item.text}
              </Link>
            ))}

            <button className="mt-4 rounded-xl bg-orange-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-600">
              Помочь
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
