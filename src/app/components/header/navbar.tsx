'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Главная', href: '/' },
    { name: 'О нас', href: '/about' },
    { name: 'Услуги', href: '/services' },
    { name: 'Контакты', href: '/contacts' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className=''>

        <div className="flex justify-between items-center px-4 h-16">
          {/* Логотип */}
          <Link href="/" className="text-xl font-bold text-orange-500">
            Лига Спас
          </Link>

          {/* Десктоп меню */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-orange-500"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Кнопка гамбургера - ТОЛЬКО ДЛЯ МОБИЛКИ */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {/* Иконка гамбургера */}
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-gray-800 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`h-0.5 w-full bg-gray-800 transition-all ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-full bg-gray-800 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Мобильное меню - ПРОСТО ПОКАЗЫВАЕМ/СКРЫВАЕМ */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg">
            <div className="flex flex-col p-4 space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="py-2 text-gray-700 hover:text-orange-500 border-b border-gray-100"
                >
                  {item.name}
                </Link>
              ))}
              <button className="mt-2 py-2 bg-orange-500 text-white rounded-lg">
                Стать волонтером
              </button>
            </div>
          </div>
        )}
        </div>
      </nav>
      <div className="h-16" />
    </>
  );
}