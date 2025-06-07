import React from "react";
export default function Card(props) {
    return (
        <div className="p-3 rounded-2xl border-2 max-h-24 w-fit max-w-sm min-w-90 min-h-1/2 relative justify-center flex flex-wrap">
            <h1 className="text-3xl text-center">{props.name} </h1>
            <h2 className="text-lg text-center">{props.caption}</h2>
            <p className="text-base">{props.text} </p>
            <button className="px-2 py-1 border rounded-md bg-gray-50 absolute bottom-1 hover:bg-gray-200 cursor-pointer transition" >{props.button} </button>
        </div>
    )
}