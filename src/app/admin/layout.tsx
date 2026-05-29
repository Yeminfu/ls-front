// app/admin/layout.tsx

import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <aside className="w-72 bg-slate-900 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">
          Панель администратора
        </h2>

        <nav className="flex flex-col gap-2">
          {/* <Link href="/admin">
            
          </Link> */}

          <Link href="/admin/team">
            Команда
          </Link>

          <Link href="/admin/news">
            Новости
          </Link>

          <Link href="/admin/searches">
            Поиски
          </Link>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-10">
        {children}
      </main>
    </div>
  );
}