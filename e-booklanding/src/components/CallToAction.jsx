import React from "react";
import Sky from '../images/pexels-pixabay-158827.jpg';

export default function CallToAction() {
  return (
    <div className="h-screen flex justify-center items-center w-full p-3">
      <div className="border border-amber-400 w-full h-full rounded-4xl overflow-hidden relative">
        {/* Imagem de fundo */}
        <img className="h-full w-full object-cover absolute top-0 left-0 z-0" src={Sky} alt="" />

        {/* Conteúdo sobreposto */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center text-white p-4">
          <div className="p-8 bg-black/50 rounded-2xl w-5/6 max-w-6xl">
            <h1 className="sugo-font text-4xl font-bold mb-6">431.5 mil meditando</h1>

            <h2 className="text-3xl font-semibold mb-2">Se junte aos milhões de usuários</h2>
            <p className="text-lg text-white/80 mb-8">que usam o Calmaria diariamente</p>

            {/* Blocos perfeitamente alinhados */}
            <div className="grid grid-cols-3 gap-8 place-items-center">
              {/* Bloco 1: Avaliação */}
              <div className="flex flex-col items-center">
                <div className="flex mb-2 text-amber-400 text-3xl">
                  {Array(5).fill('★').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <p className="text-xl font-semibold">Avaliação App Store</p>
              </div>

              {/* Bloco 2: Downloads */}
              <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold">105M+</h1>
                <p className="text-lg">Downloads</p>
              </div>

              {/* Bloco 3: Minutos */}
              <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold">500M+</h1>
                <p className="text-lg">Minutos Meditados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
