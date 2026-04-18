import React from 'react';

export default function Body(): React.ReactNode {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <h1 id="hero-title" className="hero__title">
            Добровольческий поисково-спасательный отряд «Лига Спас»
          </h1>
          <p className="hero__subtitle">
            Отряд существует с 2016 года, действует на территории Хабаровского края и Еврейской автономной области. 
            Мы — дополнительный ресурс в поиске пропавших людей для УМВД, СУ СКР и МЧС России.
          </p>
          <p className="hero__subtitle" style={{
            fontWeight: 600,
            color: "var(--color-accent)"
          }}>
            ТЫ НУЖЕН ЛЮДЯМ, НУЖЕН ДАЛЬНЕМУ ВОСТОКУ!
          </p>
          
          <div className="hero__stats">
            <div className="stat-item">
              <span className="stat-item__value">2016</span>
              <span className="stat-item__label">Год основания</span>
            </div>
            <div className="stat-item">
              <span className="stat-item__value">24/7</span>
              <span className="stat-item__label">Горячая линия</span>
            </div>
            <div className="stat-item">
              <span className="stat-item__value">РФ</span>
              <span className="stat-item__label">Работаем по всей стране</span>
            </div>
          </div>
        </div>
      </section>

      <main id="main-content">
        <section id="directions" className="section" aria-labelledby="directions-title">
          <div className="container">
            <h2 id="directions-title" className="section-title">Направления деятельности</h2>
            
            <div className="directions-grid">
              <article className="direction-card">
                <div className="direction-card__icon" aria-hidden="true">🔍</div>
                <h3 className="direction-card__title">Поиск пропавших людей</h3>
                <p className="direction-card__text">
                  Информационный и физический поиск. Незамедлительное реагирование по случаям пропажи детей, 
                  пожилых людей и людей с особенностями. Круглосуточная горячая линия.
                </p>
                <a href="#contacts" className="direction-card__link">Сообщить о пропавшем →</a>
              </article>

              <article className="direction-card">
                <div className="direction-card__icon" aria-hidden="true">🎓</div>
                <h3 className="direction-card__title">Занятия по безопасности</h3>
                <p className="direction-card__text">
                  Тренеры проводят уроки с детьми и родительские обучения. 
                  Работа направлена на выстраивание в семье системы безопасности для ребёнка.
                </p>
              </article>

              <article className="direction-card">
                <div className="direction-card__icon" aria-hidden="true">🤝</div>
                <h3 className="direction-card__title">Социальная помощь</h3>
                <p className="direction-card__text">
                  Помогаем малообеспеченным и многодетным семьям продуктами, вещами и поддержкой.
                </p>
              </article>

              <article className="direction-card">
                <div className="direction-card__icon" aria-hidden="true">🪖</div>
                <h3 className="direction-card__title">СВО</h3>
                <p className="direction-card__text">
                  С 2022 года помогаем мобилизованным и военнослужащим-дальневосточникам: 
                  отправляем вещи первой необходимости, одежду, медикаменты, снаряжение.
                </p>
                <a href="https://t.me/ligaspasVpomosch" target="_blank" rel="noopener noreferrer" className="direction-card__link">
                  Группа в Telegram →
                </a>
              </article>

              <article className="direction-card">
                <div className="direction-card__icon" aria-hidden="true">📱</div>
                <h3 className="direction-card__title">Медиа группа</h3>
                <p className="direction-card__text">
                  Создание контента, освещение деятельности отряда в социальных сетях, работа со СМИ.
                </p>
              </article>

              <article className="direction-card">
                <div className="direction-card__icon" aria-hidden="true">⚙️</div>
                <h3 className="direction-card__title">Техническое обеспечение</h3>
                <p className="direction-card__text">
                  Мониторинг оборудования, тестирование, установка и применение в деятельности отряда.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="team" className="section section--alt" aria-labelledby="team-title" style={{
          background: "var(--color-bg-alt)"
        }}>
          <div className="container">
            <h2 id="team-title" className="section-title">Наша команда</h2>
            <p style={{
              color: "var(--color-text-light)",
              marginBottom: "var(--spacing-md)"
            }}>
              Профессионалы и волонтёры, объединённые одной целью — спасать жизни.
            </p>
            
            <div className="team-grid">
              <div className="team-member">
                <div className="team-member__photo" aria-hidden="true">👤</div>
                <div className="team-member__name">Алексей Петров</div>
                <div className="team-member__role">Координатор поиска</div>
              </div>
              <div className="team-member">
                <div className="team-member__photo" aria-hidden="true">👤</div>
                <div className="team-member__name">Мария Соколова</div>
                <div className="team-member__role">Психолог, работа с семьями</div>
              </div>
              <div className="team-member">
                <div className="team-member__photo" aria-hidden="true">👤</div>
                <div className="team-member__name">Дмитрий Иванов</div>
                <div className="team-member__role">Технический специалист</div>
              </div>
              <div className="team-member">
                <div className="team-member__photo" aria-hidden="true">👤</div>
                <div className="team-member__name">Елена Козлова</div>
                <div className="team-member__role">Медиа-координатор</div>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="section" aria-labelledby="gallery-title">
          <div className="container">
            <h2 id="gallery-title" className="section-title">Галерея</h2>
            <p style={{
              color: "var(--color-text-light)",
              marginBottom: "var(--spacing-md)"
            }}>
              Моменты нашей работы и важные события отряда.
            </p>
            
            <div className="gallery-grid">
              <div className="gallery-item">
                <div className="gallery-item__image" aria-label="Поисковые работы в лесу">🌲</div>
              </div>
              <div className="gallery-item">
                <div className="gallery-item__image" aria-label="Обучение волонтёров">🎯</div>
              </div>
              <div className="gallery-item">
                <div className="gallery-item__image" aria-label="Передача помощи военнослужащим">📦</div>
              </div>
              <div className="gallery-item">
                <div className="gallery-item__image" aria-label="Урок безопасности для детей">👨‍👩‍👧‍👦</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alt" style={{
          background: "#fff5f5",
          borderTop: "1px solid #ffd5d5"
          // aria-labelledby="memorial-title" — раскомментируйте при необходимости
        }}>
          <div className="container">
            <h2 id="memorial-title" className="section-title" style={{
              color: "#c01c28"
            }}>Не найденные</h2>
            <p style={{
              color: "var(--color-text-light)",
              lineHeight: "1.8"
            }}>
              Мы помним каждого, кого не удалось вернуть. Их лица — наше напоминание: 
              поиск не заканчивается, пока есть надежда. Помогите нам помочь другим.
            </p>
          </div>
        </section>

        <section id="faq" className="section" aria-labelledby="faq-title">
          <div className="container">
            <h2 id="faq-title" className="section-title">Часто задаваемые вопросы</h2>
            
            <div className="faq-list">
              <details className="faq-item" open>
                <summary className="faq-item__question">Какую помощь оказывает отряд «Лига Спас»?</summary>
                <div className="faq-item__answer">
                  Мы осуществляем поиск и спасение пропавших людей по всей России. 
                  Работаем в тесном взаимодействии с правоохранительными органами и МЧС.
                </div>
              </details>

              <details className="faq-item">
                <summary className="faq-item__question">Как сообщить о пропавшем ребёнке?</summary>
                <div className="faq-item__answer">
                  Свяжитесь с нами по телефону или через форму на сайте <strong>немедленно</strong> после пропажи. 
                  Каждая минута на счету — не ждите 24 часа!
                </div>
              </details>

              <details className="faq-item">
                <summary className="faq-item__question">Сколько времени занимает поиск?</summary>
                <div className="faq-item__answer">
                  Поиск начинается немедленно. Продолжительность зависит от ситуации: 
                  условий местности, погоды, времени с момента пропажи и других факторов.
                </div>
              </details>

              <details className="faq-item">
                <summary className="faq-item__question">Могу ли я присоединиться к отряду?</summary>
                <div className="faq-item__answer">
                  Да! Мы проводим регулярное обучение и принимаем новых участников. 
                  Важны ответственность, готовность работать в команде и желание помогать людям.
                </div>
              </details>

              <details className="faq-item">
                <summary className="faq-item__question">Когда начинается поиск?</summary>
                <div className="faq-item__answer">
                  <div className="faq-highlight">
                    ⚠️ Помните: правила «трёх суток» не существует!<br />
                    Если ваш близкий не выходит на связь, и это для него нетипично — 
                    сразу обращайтесь в полицию и к волонтёрам.
                  </div>
                  Поиск запускается сразу после поступления заявки и подтверждения информации.
                </div>
              </details>
            </div>
          </div>
        </section>

        <section id="contacts" className="section contacts" aria-labelledby="contacts-title">
          <div className="container">
            <h2 id="contacts-title" className="section-title">Контакты</h2>
            
            <div className="contacts-grid">
              <div className="contact-card">
                <div className="contact-card__title">📞 Горячая линия</div>
                <p className="contact-card__text">
                  Круглосуточно, без выходных:<br />
                  <strong>+7 (4212) 00-00-00</strong>
                </p>
                <a href="tel:+74212000000" className="contact-card__link">Позвонить сейчас</a>
              </div>

              <div className="contact-card">
                <div className="contact-card__title">📍 Адрес</div>
                <address className="contact-card__text address">
                  г. Хабаровск,<br />
                  ул. Муравьёва-Амурского, 54 /<br />
                  ул. Гоголя, 31
                </address>
                <a href="https://osm.org/go/..." target="_blank" rel="noopener noreferrer" className="contact-card__link">
                  Открыть на карте →
                </a>
              </div>

              <div className="contact-card">
                <div className="contact-card__title">🌐 Соцсети</div>
                <p className="contact-card__text">Следите за новостями и нашими операциями:</p>
                <div className="social-links">
                  <a href="#" className="social-link" aria-label="Telegram">TG</a>
                  <a href="#" className="social-link" aria-label="ВКонтакте">ВК</a>
                  <a href="#" className="social-link" aria-label="Rutube">RT</a>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card__title">✉️ Написать нам</div>
                <p className="contact-card__text">
                  Есть вопрос или хотите стать волонтёром?<br />
                  Заполните форму или напишите на почту:
                </p>
                <a href="mailto:help@ligaspas.ru" className="contact-card__link">help@ligaspas.ru</a>
                <a href="#form" className="btn" style={{ marginTop: '0.5rem' }}>Написать сообщение</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}