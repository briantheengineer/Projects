import React from "react";
export default function Content () {
    return (
        <div className="h-max text-center flex justify-center items-center">
            <div className="border p-5 w-full h-full">
                <h1 className="text-3xl mb-5">Explore nossa Biblioteca</h1>
                <div className="w-full h-full flex flex-nowrap justify-center p-5">
                   <div className="w-4/6 border h-full rounded-2xl mx-2 overflow-hidden" 
                   style={{ backgroundImage: "url('/svgs/blurry.svg')" }}>
                    <h1>asdasda</h1>
                   </div>
                   <div className="w-4/6 border h-fit rounded-2xl mx-2 overflow-hidden">
                    <img></img>
                   </div>
                   <div className="w-4/6 border h-fit rounded-2xl mx-2 overflow-hidden">
                    <img></img>
                   </div>

                </div>
            </div>
        </div>
    )
}