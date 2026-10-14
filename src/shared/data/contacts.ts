export const PHONES = [
  { label: "+7 (914) 190-12-17", href: "tel:+79141901217" },
  { label: "+7 (914) 167-37-77", href: "tel:+79141673777" },
] as const;

export const CONTACTS = {
  email: "ligaspas@mail.ru",
  emailHref: "mailto:ligaspas@mail.ru",
  site: "лигаспас.рф",
  siteHref: "https://лигаспас.рф",
  siteLabel: "www.лигаспас.рф",
  address: "г. Хабаровск",
  region: "Хабаровский край и ЕАО",
} as const;

export const SOCIALS = [
  { label: "ВКонтакте", href: "https://vk.com/ligaspas", color: "#0077FF", icon: "vk" },
  { label: "Одноклассники", href: "https://ok.ru/ligaspas", color: "#EE8208", icon: "ok" },
  { label: "Telegram", href: "https://t.me/ligaspas", color: "#229ED9", icon: "telegram" },
  { label: "Max", href: "https://max.ru/id2724250231_biz", color: undefined, icon: "max" },
] as const;
