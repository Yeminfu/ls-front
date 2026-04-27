"use client";

import { useEffect, useState } from "react";

export function Faq() {
  return (
    <div>
      <div>
        <div className="bg-black ">
          <div className="py-4 px-4  ">
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
                // onClick={() => {
                //   setIsOpen(true);
                // }}
              >
                <Wrapper title={x.title} description={x.desciption} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Wrapper(props: { title: string; description: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="bg-white text-black p-2">
        <div
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <div>{props.title}</div>
        </div>
        <div
          style={{
            maxHeight: isOpen ? "100px" : "0px",
            overflow: "hidden",
          }}
        >
          <div className="py-2">{props.description}</div>
        </div>
      </div>
    </>
  );
}
