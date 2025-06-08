import React from "react";
export default function Content () {
    return (
        <div className="h-screen mt-5 text-center flex justify-center items-center">
            <div className="border p-5 w-full h-full">
                <h1 className="text-3xl mb-5">Explore nossa Biblioteca</h1>
                <div className="w-full h-full flex flex-nowrap">
                   <div className="w-1/3 border h-[90%] rounded-2xl mx-2">
                    <h1>Sono</h1>
                    <p>Texto</p>
                    <img></img>
                   </div>
                   <div className="w-1/3 border h-[90%] rounded-2xl mx-2">
                    <h1>Sono</h1>
                    <p>Texto</p>
                    <img></img>
                   </div>
                   <div className="w-1/3 border h-[90%] rounded-2xl mx-2">
                    <h1>Sono</h1>
                    <p>Texto</p>
                    <img></img>
                   </div>

                </div>
            </div>
        </div>
    )
}