import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel } from 'swiper/modules';
import Caio from '../images/Caio.png';
import Frida from '../images/Frida.png';
import Jorge from '../images/Jorge.png';
import Mateus from '../images/Mateus.png';
import Samanta from '../images/Samanta.png';

import 'swiper/css';
import 'swiper/css/navigation';

const cards = [
  { id: '1', name: 'Caio', text: 'Texto do Caio', picture: Caio },
  { id: '2', name: 'Frida', text: 'Texto da Frida', picture: Frida },
  { id: '3', name: 'Jorge', text: 'Texto do Jorge', picture: Jorge },
  { id: '4', name: 'Mateus', text: 'Texto do Mateus', picture: Mateus },
  { id: '5', name: 'Carlos', text: 'Texto do Carlos', picture: 'https://via.placeholder.com/150' },
  { id: '6', name: 'Lucia', text: 'Texto da Lucia', picture: 'https://via.placeholder.com/150' },
  { id: '7', name: 'Renato', text: 'Texto do Renato', picture: 'https://via.placeholder.com/150' },
];

const Carro = () => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <Swiper
        modules={[Autoplay, Mousewheel]}
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={800}
        mousewheel={true}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="bg-white p-4 rounded-lg shadow text-center border h-80 flex flex-col items-center justify-between">
              <div>
                <h3 className="font-bold text-lg">{card.name}</h3>
                <p className="text-sm text-gray-600">{card.text}</p>
              </div>
              <div className="rounded-xl h-40 w-40 overflow-hidden border-2 sugo-font">
                <img
                  src={card.picture}
                  alt={card.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default function Carrosel() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center text-4xl font-semibold mb-10">
        <h1>
          Nossos clientes vivem a vida <br /> mais tranquilos e mais felizes
        </h1>
      </div>
      <Carro />
    </div>
  );
}
