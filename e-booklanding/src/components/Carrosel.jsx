import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel } from 'swiper/modules';
import Caio from '../images/Caio.png';
import Frida from '../images/Frida.png';
import Jorge from '../images/Jorge.png';
import Mateus from '../images/Mateus.png';
import Samanta from '../images/Samanta.png';
import Linda from '../images/Linda.png';
import Sharon from '../images/Sharon.png'

import 'swiper/css';
import 'swiper/css/navigation';

const cards = [
  { id: '1', name: 'Caio', text: 'Com a Calmaria, consegui focar nos estudos sem me sentir sobrecarregado. É como ter um respiro no meio do caos.',time:'5 meses' , picture: Caio },
  { id: '2', name: 'Frida', text: 'As sessões de meditação me ajudam a começar o dia com clareza. Virou meu ritual matinal.',time:'2 anos', picture: Frida },
  { id: '3', name: 'Mateus', text: 'Nunca consegui seguir a técnica Pomodoro, mas com a Calmaria ficou fácil e até gostoso focar.', time:'1 ano' , picture: Mateus },
  { id: '4', name: 'Samanta', text: 'Uso a Calmaria pra pausar entre uma tarefa e outra. Me sinto muito mais leve e produtiva.',time:'8 meses' , picture: Samanta },
  { id: '5', name: 'Jorge', text: 'Reduzi minha ansiedade no trabalho com poucos minutos por dia. Funciona mesmo.',time:'3 semanas' , picture: Jorge },
  { id: '6', name: 'Sharon', text: 'Estava sempre exausta. Agora consigo organizar meu tempo sem me esgotar. Calmaria virou essencial.',time:'1 mês' , picture: Sharon },
  { id: '7', name: 'Linda', text: 'Achei que meditação não era pra mim, mas esse app mudou minha visão. Hoje, não fico sem.',time:'4 meses' , picture: Linda },
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
            <div className="bg-white p-6 rounded-2xl shadow-md text-left h-72 flex flex-col justify-between">
              <div className="flex items-start gap-4">
                <div className="h-20 w-20 rounded-full overflow-hidden border-2 flex-shrink-0">
                  <img
                    src={card.picture}
                    alt={card.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">{card.name}</h3>
                  <p className="text-gray-700 leading-relaxed text-base">
                    {card.text}
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-500 text-center mt-4">
                Usuário do Calmaria há <span className="font-medium">{card.time}</span>
              </p>
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
        <h1 className='bcblack text-6xl myblack'>
          Nossos clientes vivem a vida <br /> mais tranquilos e mais felizes
        </h1>
      </div>
      <Carro />
    </div>
  );
}
