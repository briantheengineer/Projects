import React from "react";

export default function Content() {
  return (
    <div className="h-screen text-center flex justify-center items-center">
      <div className="border p-5 w-full h-full">
        <h1 className="text-4xl font-bold mb-5">Explore nossa Biblioteca</h1>

        <div className="w-full h-full flex lg:flex-nowrap sm:flex-wrap justify-center p-5 gap-4">
          {/* Card 1 */}
          <div
            className="w-[30%] min-w-80 h-[95%] border rounded-2xl p-6 text-white flex flex-col items-center justify-start"
            style={{ backgroundImage: "url('/svgs/low-poly-grid-haikei.svg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            {/* Ícone ou imagem */}
            <div className="w-16 h-16 mb-4 bg-white/30 rounded-full flex items-center justify-center">
              {/* Aqui você pode colocar um <img src={...} /> ou um ícone */}
              <span className="text-2xl">🧘</span>
            </div>
            <h2 className="text-2xl font-semibold mb-2">Controlando a ansiedade</h2>
            <p className="text-sm">Cultive uma nova perspectiva sobre o medo e a ansiedade com práticas guiadas.</p>
          </div>

          {/* Card 2 */}
          <div
            className="w-[30%] min-w-80 h-[95%] border rounded-2xl p-6 text-white flex flex-col items-center justify-start"
            style={{ backgroundImage: "url('/svgs/stacked-peaks-haikei.svg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="w-16 h-16 mb-4 bg-white/30 rounded-full flex items-center justify-center">
              <span className="text-2xl">🛌</span>
            </div>
            <h2 className="text-2xl font-semibold mb-2">Sono restaurador</h2>
            <p className="text-sm">Transforme suas noites com meditações que induzem um sono profundo e tranquilo.</p>
          </div>

          {/* Card 3 */}
          <div
            className="w-[30%] min-w-80 h-[95%] border rounded-2xl p-6 text-white flex flex-col items-center justify-start"
            style={{ backgroundImage: "url('/svgs/blob-scene-haikei.svg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="w-16 h-16 mb-4 bg-white/30 rounded-full flex items-center justify-center">
              <span className="text-2xl">🌿</span>
            </div>
            <h2 className="text-2xl font-semibold mb-2">Mindfulness diário</h2>
            <p className="text-sm">Aprofunde sua conexão com o presente e encontre calma nas pequenas ações.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
