import LogoImg from "@/app/images/logo.png";
import Image from "next/image";
import React from "react";
import { Faq } from "../faql";

export default function Body(): React.ReactNode {
  return (
    <>
      <main>
        <div className="max-w-5xl mx-auto px-4 container">
          <div className="mt-4">
            <button className="rounded-full p-1 cursor-pointer w-full hover:bg-gray-300 bg-white shadow-2xl shadow-black/40 transition-shadow duration-200 hover:shadow-black/50">
              {" "}
              <div className="p-2 relative">
                <Image
                  src={LogoImg}
                  alt="Background"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="absolute left-0 top-0 z-10 h-full w-auto" // ← -z-10
                  priority
                />
                <div className="text-center relative z-10">
                  {" "}
                  {/* ← z-10 для текста */}
                  <div>СТАТЬ ДОБРОВОЛЬЦЕМ</div>
                  <div>стать частью команды</div>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="mt-7">
          <div className="max-w-5xl mx-auto px-4 container">
            <div className="text-center text-2xl font-bold">НАПРАВЛЕНИЯ</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: `ПОИСК ПРОПАВШИХ ЛЮДЕЙ`,
                  desciption:
                    "Информационный и физический поиск пропавших людей. Незамедлительное реагирование по случаям пропади детей, пожилых людей и людей с физическими или ментальными особенностями. Круглосуточная горячая линия",
                },
                {
                  title: `ЗАНЯТИЯ ПО БЕЗОПАСНОСТИ`,
                  desciption:
                    "Тренеры проводят уроки с детьми и родительские обучения. Работа направлена на выстраивание в семье системы безопасности для ребёнка и предотвращение случаев пропажи среди детей",
                },
                {
                  title: `СОЦИАЛЬНАЯ ПОМОЩЬ`,
                  desciption: "Помогаем малообеспеченным и многодетным семьям",
                },
                {
                  title: `СВО`,
                  desciption:
                    "С 2022 года мы помогаем мобилизованным и военнослужащим дальневосточникам на СВО. Отправляем вещи первой необходимости, одежду, медикаменты, перевязочный материал, снаряжение. Группа в Telegram:",
                },
                {
                  title: `МЕДИА ГРУППА`,
                  desciption:
                    "Создание контента, освещение деятельности отряда в социальных сетях, работа со СМИ",
                },
                {
                  title: `ТЕХНИЧЕСКОЕ ОБЕСПЕЧЕНИЕ`,
                  desciption:
                    "Мониторинг оборудования, тестирование, установка и применение в деятельности отряда",
                },
              ]
                // Array.from({ length: 6 })
                .map((item, i) => {
                  return (
                    <div key={i} className="text-center rounded-lg p-4">
                      <div className="flex items-center justify-center mb-2">
                        <figure>
                          <svg
                            role="none"
                            data-mode="fill"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                          >
                            <path
                              className="fox-orange"
                              fill="currentColor"
                              d="M29.984 28.064c-.16-.64-.544-1.152-1.216-1.248-.48-.064-.736-.288-.992-.64-.128-.16-.256-.352-.416-.512-.192-.192-.224-.384-.224-.64v-5.952c0-.224.032-.416.16-.608 1.696-3.04 1.376-6.016-.512-8.832l-4.16-5.76c-.064-.096-.096-.224-.288-.256v3.296l-.096.032-2.4-3.36-.064 2.624c-.032.608.128 1.248-.064 1.76-.224.48-.8.832-1.184 1.28-.224.224-.448.32-.8.32L15.2 9.536c0 .096 0 .16.032.192.512 1.824 2.272 3.232 4.192 3.296h2.24l-.288.352-5.216 5.184c-1.088 1.12-2.016 2.336-2.624 3.808-.736 1.856-.832 3.808-.832 5.76 0 .288.192.256.352.256h11.328c.384 0 .416-.16.352-.448-.16-.64-.768-1.152-1.44-1.152-.448-.032-.864 0-1.344 0 .8-1.248 1.056-2.176.768-3.84l.352.416 3.776 4.736c.128.16.224.32.48.32h2.368c.32 0 .352-.128.288-.352zM21.216 10.08a.63.63 0 0 1-.608-.608c-.032-.288.256-.608.576-.608.32-.032.608.256.64.576 0 .32-.288.64-.608.64zM7.168 9.984c-1.696-.64-3.456-.352-5.152-.384 1.856.576 2.752 2.08 2.688 3.936v7.744a7.04 7.04 0 0 0 6.56 7.072c.512.032.512.032.512-.512V16.608a7.02 7.02 0 0 0-4.608-6.624z"
                            ></path>
                          </svg>
                        </figure>
                      </div>
                      <div className="text-1xl font-bold uppercase">
                        {item.title}
                      </div>
                      <div>
                        {item.desciption}
                        {/* Информационный и физический поиск пропавших людей.
                        Незамедлительное реагирование по случаям пропади детей,
                        пожилых людей и людей с физическими или ментальными
                        особенностями. Круглосуточная горячая линия */}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="max-w-5xl mx-auto px-4 container">
            <div className="text-center text-2xl font-bold">НАША КОМАНДА</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {[
                {
                  title: `Ольга Щукина, позывной «Ёлка»`,
                  desciption:
                    "Руководитель ДПСО «Лига Спас», региональный директор Национального центра помощи детям в ДФО. Моя задача — эффективная команда, где каждый поисковик ценен и важен, где каждый знает, ради чего он в отряде. У отряда есть поддержка, это наши семьи, это люди, которые выходят с нами в поиски, которые делают репосты ориентировок. Спасибо каждому за эту бесценную помощь.",
                },
              ].map((item, i) => {
                return (
                  <div key={i} className="rounded-lg p-4">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                      {(() => {
                        return (
                          <img src="/68397240.jpg" />
                        );
                      })()}
                      <div className="px-6 py-4">
                        <div className="font-bold text-m mb-2">
                          {item.title}
                        </div>
                        <p className="text-gray-700 text-base">
                          {item.desciption}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="max-w-5xl mx-auto px-4 container">
            <div className="text-center text-2xl font-bold">ГАЛЕРЕЯ</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {[
                {
                  title: `«Он просто переходил дорогу, то туда, то обратно»`,
                  desciption:
                    "25 июля, девятый час вечера. Хабаровчанин с другом двигался в потоке других машин по Карла Маркса, когда заметил странную картину: пожилой человек никак не мог определиться, на какую сторону улицы ему нужно. «Он просто переходил дорогу, то туда, то обратно», — вспоминает автомобилист Фёдор. Это насторожило водителя......",
                },
              ].map((item, i) => {
                return (
                  <div key={i} className="rounded-lg p-4">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                      {(() => {
                        return (
                          <img src="./68397560.jpg" />
                        );
                      })()}
                      <div className="px-6 py-4">
                        <div className="font-bold text-m mb-2">
                          {item.title}
                        </div>
                        <p className="text-gray-700 text-base">
                          {item.desciption}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="max-w-5xl mx-auto px-4 container">
            <div className="text-center text-2xl font-bold">НЕ НАЙДЕННЫЕ</div>
            <div className="">
              {[
                {
                  title: `НЕ НАЙДЕНЫ`,
                  desciption:
                    "Этих и других людей дома ждут близкие. Если у вас есть какая-либо информация, свяжитесь с нами по телефонам, указанным в ориентировках. Возможно, именно ваш отклик поможет в поиске.",
                },
              ].map((item, i) => {
                return (
                  <div key={i} className=" p-4">
                    <div className=" shadow-lg rounded-lg overflow-hidden">
                      {(() => {
                        return (
                          <img
                            style={{ width: "100%" }}
                            alt=""
                            src="/68397655.png"
                          />
                        );
                      })()}
                      <div className="px-6 py-4">
                        <div className="font-bold text-m mb-2">
                          {item.title}
                        </div>
                        <p className="text-gray-700 text-base">
                          {item.desciption}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-4">
          <Faq />
        </div>
      </main>
    </>
  );
}
