import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const cards = [
  { id: '1', name: 'Jorge', text: 'Texto do Jorge', picture: 'https://via.placeholder.com/150' },
  { id: '2', name: 'Patrícia', text: 'Texto da Patrícia', picture: 'https://via.placeholder.com/150' },
  { id: '3', name: 'Tadeu', text: 'Texto do Tadeu', picture: 'https://via.placeholder.com/150' },
  { id: '4', name: 'Ana', text: 'Texto da Ana', picture: 'https://via.placeholder.com/150' },
  { id: '5', name: 'Carlos', text: 'Texto do Carlos', picture: 'https://via.placeholder.com/150' },
  { id: '6', name: 'Lucia', text: 'Texto da Lucia', picture: 'https://via.placeholder.com/150' },
  { id: '7', name: 'Renato', text: 'Texto do Renato', picture: 'https://via.placeholder.com/150' },
];

const Carrossel = () => {
  return (
    <Swiper spaceBetween={20} slidesPerView={3}>
      {cards.map((card) => (
        <SwiperSlide key={card.id}>
          <div className="card" style={{
            background: '#fff',
            padding: '16px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <img src={card.picture} alt={card.name} style={{ width: '100%', borderRadius: '8px' }} />
            <h3>{card.name}</h3>
            <p>{card.text}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carrossel;
