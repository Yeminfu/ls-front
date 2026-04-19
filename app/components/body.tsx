import React from "react";
import Image from "next/image";
import LogoImg from "@/app/images/logo.png";

export default function Body(): React.ReactNode {
  return (
    <>
      <main>
        <div className="max-w-4xl mx-auto px-4 container">
          <div className="mt-4">
    <button className="rounded-full p-1 cursor-pointer w-full hover:bg-gray-300 bg-white shadow-2xl shadow-black/40 transition-shadow duration-200 hover:shadow-black/50">              <div className="p-2 relative">
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
      </main>
    </>
  );
}
