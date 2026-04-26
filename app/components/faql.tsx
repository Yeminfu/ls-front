"use client";

import { useEffect, useState } from "react";

export function Faq() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div
        onClick={() => {
          alert(1213);
        }}
      >
        zzzzzzzzzzz
      </div>
      <div className="container">
        <div className="bg-black ">
          <div className="py-4 max-w-5xl mx-auto px-4  ">
            <div className="text-1xl font-bold text-white">
              ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
            </div>
            {[
              {
                title: "Какую помощь оказывает отряд Лига Спас?",
                desciption:
                  "Мы осуществляем поиск и спасение пропавших по всей России.",
              },
              {
                title: "Как сообщить о пропавшем ребенке?",
                desciption:
                  "Свяжитесь с нами по телефону или через форму на сайте сразу после пропажи.",
              },
            ].map((x, i) => (
              <div
                key={i}
                className="mt-2"
                onClick={() => {
                  console.log(12312);
                  // setIsOpen(!isOpen);
                }}
              >
                <div className="bg-white p-2">
                  <div role="button">
                    <div>
                      {x.title} {JSON.stringify(["isOpen", isOpen])}
                    </div>
                  </div>

                  <div
                    style={{
                      maxHeight: isOpen ? "100px" : "0px",
                      overflow: "hidden",
                    }}
                  >
                    {x.desciption}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
