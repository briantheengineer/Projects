import React from "react";
import Phone from "../images/phone-mockup.png";

export default function Hero() {
  return (
    <div
      className="w-full h-screen bg-no-repeat bg-cover bg-center border-b relative flex flex-wrap"
      style={{ backgroundImage: "url('/svgs/blurry.svg')" }}
    >
      <div className="flex h-full px-10 md:px-20 justify-between flex-wrap">
        <div className="flex flex-col justify-center max-w-2/5 text-white border">
          <h1 className="text-4xl font-bold mb-4">
            Foco, calma e produtividade — na palma da sua mão.
          </h1>
          <h2 className="text-xl mb-6">
            Um app de meditação e produtividade criado para quem quer mais foco, menos ansiedade e mais controle da própria rotina.
          </h2>
          <button className="border rounded-md px-4 py-2 mt-2 hover:bg-amber-200 hover:text-black transition">
            Comece Agora!
          </button>
        </div>

        <div className="max-w-3/6 flex items-center justify-center border">
          <img className="object-contain" src={Phone} alt="Phone mockup" />
        </div>
      </div>
    </div>
  );
}
