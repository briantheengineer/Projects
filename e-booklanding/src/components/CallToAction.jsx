import React from "react";
import Sky from '../images/pexels-pixabay-158827.jpg';

export default function CallToAction() {
  return (
    <div className="h-screen flex justify-center items-center w-full p-12 bcregular">
      <div className=" w-full h-full rounded-4xl overflow-hidden relative">
        <img className="h-full w-full object-cover absolute top-0 left-0 z-0" src={Sky} alt="" />

        <div className="absolute inset-0 z-10 flex justify-center items-center text-center text-white p-4">
          <div className="p-8 bg-black/50 rounded-2xl w-10/12 max-w-6xl h-[70vh] flex flex-col justify-between">
            <div className="flex flex-col items-center">
              <div className="border rounded-full w-fit px-4 py-2 mb-4">
                <h1 className="text-5xl font-bold">431.5 mil meditando</h1>
              </div>
              <h2 className="text-3xl mb-2">Se junte aos milhões de usuários</h2>
              <p className="text-3xl mb-8">que usam o Calmaria diariamente</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
              <div className="flex flex-col items-center">
                <div className="flex mb-2 text-amber-400 text-3xl">
                  {Array(5).fill('★').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <p className="text-2xl">Avaliação App Store</p>
              </div>

              <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold">105M+</h1>
                <p className="text-2xl">Downloads</p>
              </div>

              <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold">500M+</h1>
                <p className="text-2xl">Minutos Meditados</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
