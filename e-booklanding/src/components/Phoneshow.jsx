import React from "react"
import Computermockup from '../images/pomodoro-mockup.png'
export default function Phoneshow () {
    return (
        <div className="h-screen flex  flex-wrap content-center justify-center myblack">
            <div id="text-div" className="w-2/6 p-5 flex flex-wrap items-center">
            <div className="h-full">
                <h1 className="bcblack text-7xl py-5">Novidade: Pomodoro!</h1>
                <h2 className="bcregular text-5xl">Agora você poderá utilizar o relógio de Pomodoro e ser mais produtivo!</h2>
            </div>
            </div>
            <div id="image-div" className="w-[50%] p-5 ">
                <img src={Computermockup}></img>
            </div>
        </div>
    )
}