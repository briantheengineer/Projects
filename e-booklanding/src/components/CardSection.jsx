import React from "react";
import Card from "./Card";
import Testimonials from "./Testimonials";
export default function CardSection() {
    return (
        <div>
            <div className="w-full h-screen px-5 py-20 flex justify-around flex-wrap gap-6">
                <h1 className="w-full text-left">Learn More!</h1>
                <Card name='Meditações Guiadas' caption='Encontre calma em minutos' text='Sessões curtas e guiadas para ansiedade, sono e foco. Ideal para iniciantes ou praticantes experientes.' button='Descubra Mais!' />
                <Card name='Sons Relaxantes' caption='Mergulhe no som da natureza' text='Escolha entre chuva, mar, floresta e ambientes urbanos suaves para relaxar ou dormir melhor.' button='Comece Agora!' />
                <Card name='Modo Foco (Pomodoro)' caption='Trabalhe com atenção plena.' text='Use sessões de 25 minutos com pausas planejadas para manter sua produtividade sem estresse.' button='Saiba Mais!' />
            </div>
            <div>
                <h1 className="text-right w-full  ">What our clients said!</h1>
                <Testimonials className='w-full py-5 bg-black' />
            </div>
        </div>
    )
}