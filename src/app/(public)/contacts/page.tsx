import type { Metadata } from "next";
import {
  EnvelopeIcon,
  GlobeAltIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { FaOdnoklassniki, FaTelegramPlane, FaVk } from "react-icons/fa";
import { CONTACTS, PHONES, SOCIALS } from "@/src/shared/data/contacts";
import { MaxIcon } from "@/src/shared/max-icon";

export const metadata: Metadata = {
  title: "Контакты — Лига Спас",
  description:
    "Контакты ДПСО «Лига Спас»: горячая линия, e-mail, официальный сайт и социальные сети.",
};

const ICONS = {
  vk: FaVk,
  ok: FaOdnoklassniki,
  telegram: FaTelegramPlane,
  max: MaxIcon,
} as const;

export default function Page() {
  return (
    <section>
      <header>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
          Связаться с нами
        </p>

        <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
          Контакты
        </h1>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          Если пропал человек — звоните на горячую линию. Мы на связи
          круглосуточно.
        </p>
      </header>

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Горячая линия */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="flex items-center gap-3 text-lg font-bold text-slate-900">
            <PhoneIcon className="h-6 w-6 text-orange-500" />
            Горячая линия
          </h2>

          <ul className="mt-5 space-y-3">
            {PHONES.map((phone) => (
              <li key={phone.href}>
                <a
                  href={phone.href}
                  className="text-2xl font-black text-slate-900 transition-colors hover:text-orange-600"
                >
                  {phone.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Реквизиты */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Реквизиты</h2>

          <ul className="mt-5 space-y-4 text-slate-700">
            <li>
              <a
                href={CONTACTS.emailHref}
                className="inline-flex items-center gap-3 transition-colors hover:text-orange-600"
              >
                <EnvelopeIcon className="h-5 w-5 shrink-0 text-orange-500" />
                <span className="break-all">{CONTACTS.email}</span>
              </a>
            </li>

            <li>
              <a
                href={CONTACTS.siteHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 transition-colors hover:text-orange-600"
              >
                <GlobeAltIcon className="h-5 w-5 shrink-0 text-orange-500" />
                <span>{CONTACTS.siteLabel}</span>
              </a>
            </li>

            <li className="inline-flex items-center gap-3">
              <MapPinIcon className="h-5 w-5 shrink-0 text-orange-500" />
              <span>
                {CONTACTS.address} · {CONTACTS.region}
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Соцсети */}
      <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">Мы в социальных сетях</h2>

        <div className="mt-5 flex flex-wrap gap-3">
          {SOCIALS.map(({ label, href, color, icon }) => {
            const Icon = ICONS[icon];

            return (
              <a
                key={label}
                href={href}
                aria-label={label}
                title={label}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-orange-400 hover:text-orange-600"
              >
                <Icon
                  className="h-5 w-5"
                  style={color ? { color } : undefined}
                />
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
