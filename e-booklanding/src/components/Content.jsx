import React from "react";
export default function Content () {
    return (
        <div className="h-screen text-center flex justify-center items-center">
            <div className="border p-5 w-full h-full">
                <h1 className="text-3xl mb-5">Explore nossa Biblioteca</h1>
                <div className="w-full h-full flex lg:flex-nowrap sm:flex-wrap justify-center p-5">
                   <div className="w-[30%] min-w-80 h-[95%] border rounded-2xl mx-2" 
                   style={{ backgroundImage: "url('/svgs/low-poly-grid-haikei.svg')" }}>
                    <h1>asdasda</h1>
                   </div>
                   <div className="w-[30%] min-w-80 border  h-[95%] rounded-2xl mx-2"
                   style={{ backgroundImage: "url('/svgs/stacked-peaks-haikei.svg')" }}>
                   </div>
                   <div className="min-w-80 w-[30%] border  h-[95%] rounded-2xl mx-2"
                   style={{ backgroundImage: "url('/svgs/blob-scene-haikei.svg')" }}>
                   </div>

                </div>
            </div>
        </div>
    )
}