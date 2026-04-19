import LogoImg from "@/app/images/logo.png";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className="header" role="banner">
        <div className="flex items-center justify-center ">
          <Image
            src={LogoImg}
            alt=""
            width={95}
            height={95}
            className="rounded-full mt-5"
            placeholder="blur"
          />
        </div>
        <div className="mt-5">
          <div className="flex items-center justify-center ">
            <h1 className="text-1xl font-bold">
              ДОБРОВОЛЬЧЕСКИЙ ПОИСКОВО-СПАСАТЕЛЬНЫЙ ОТРЯД ‌ «ЛИГА СПАС»
            </h1>
          </div>
        </div>

        <div className="mt-5">
          <div className="max-w-4xl mx-auto px-4 container">
            Отряд существует с 2016 года, действует на территории Хабаровского
            края и Еврейской автономной области, является некоммерческой
            организацией и одним из сильнейших поисковых отрядов нашей страны.
            Отряд служит дополнительным ресурсом в поиске пропавших людей для
            УМВД, СУ СКР и МЧС России по региону. С 2018 года является
            региональным отделением Национального центра помощи.
          </div>
        </div>

        <div className="mt-5">
          <div className="max-w-4xl mx-auto px-4 container">
            <div className="flex items-center justify-center ">
              <div>
                <span style={{ color: "#fd7e14" }} className="text-2xl">
                  ТЫ НУЖЕН ЛЮДЯМ, НУЖЕН ДАЛЬНЕМУ ВОСТОКУ!
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
