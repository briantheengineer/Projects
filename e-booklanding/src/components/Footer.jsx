import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-10 px-4 md:px-20">
      <h1 className="text-center text-xl md:text-2xl font-semibold mb-10">
        Calmaria — sua mente em paz, um momento de cada vez.
      </h1>
      
      <div className="flex flex-col md:flex-row justify-center gap-10 text-sm">
        
        <div>
          <h2 className="font-bold mb-2">Links úteis</h2>
          <ul className="space-y-1">
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Funcionalidades</a></li>
            <li><a href="#">Planos</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold mb-2">Legal / Institucional</h2>
          <ul className="space-y-1">
            <li><a href="#">Política de Privacidade</a></li>
            <li><a href="#">Termos de Uso</a></li>
            <li><a href="#">Política de Cookies</a></li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold mb-2">Redes sociais</h2>
          <ul className="space-y-1">
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">YouTube</a></li>
            <li><a href="#">X (Twitter)</a></li>
          </ul>
        </div>

      </div>

      <div className="text-center text-gray-400 mt-10 text-xs">
        &copy; 2025 Calmaria. Todos os direitos reservados.
      </div>
    </footer>
  );
}
