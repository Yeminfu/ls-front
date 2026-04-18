import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="header" role="banner">
        <div className="container header__inner">
          <Link
            href="/"
            className="logo"
            aria-label="Лига Спас — главная страница"
          >
            <span className="logo__icon" aria-hidden="true">
              🛟
            </span>
            <span className="logo__text">
              Лига Спас
              <span className="logo__subtitle">
                Поисково-спасательный отряд
              </span>
            </span>
          </Link>

          <nav className="nav" role="navigation" aria-label="Основное меню">
            <a href="#directions" className="nav__link nav__link--active">
              Направления
            </a>
            <a href="#team" className="nav__link">
              Команда
            </a>
            <a href="#gallery" className="nav__link">
              Галерея
            </a>
            <a href="#faq" className="nav__link">
              Вопросы
            </a>
            <a href="#contacts" className="nav__link">
              Контакты
            </a>
          </nav>

          <div className="header__cta">
            <a
              href="tel:+74212000000"
              className="header__phone"
              aria-label="Позвонить на горячую линию"
            >
              📞 Горячая линия: <strong>24/7</strong>
            </a>
            <a href="#help" className="btn btn-outline">
              Помочь отряду
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
