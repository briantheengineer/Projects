import React from "react";
import Card from "./Card";

export default function CardSection() {
    return (
        <div>
            <div className="w-full h-screen px-5 py-20 flex justify-around flex-wrap gap-6">
                <h1 className="w-full text-center text-3xl">Estamos aqui para você se sentir melhor.</h1>
                <Card name='Meditações Guiadas' caption='Encontre calma em minutos' text='Sessões curtas e guiadas para ansiedade, sono e foco.' button='Saiba Mais' />
                <Card name='Sons Relaxantes' caption='Mergulhe no som da natureza' text='Escolha entre chuva, mar, floresta e ambientes urbanos suaves para relaxar ou dormir melhor.' button='Saiba Mais' />
                <Card name='Modo Foco (Pomodoro)' caption='Trabalhe com atenção plena.' text='Use sessões de 25 minutos com pausas planejadas para manter sua produtividade sem estresse.' button='Saiba Mais' />
            </div>
        </div>
    )
}