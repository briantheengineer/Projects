import React from "react";
export default function Card(props) {
    return (
        <div className="p-3 rounded-2xl  max-h-24 w-fit max-w-sm min-w-90 min-h-1/2 justify-center flex flex-wrap text-center">
            <div>
                <h1 className="text-2xl ">{props.name} </h1>
                <h2 className="text-lg ">{props.caption}</h2>
                <p className="text-base">{props.text} </p>
            </div>
            <button className=" w-fit h-fit p-2 border rounded-md bg-gray-50  hover:bg-gray-200 hover:border-gray-300 cursor-pointer transition" >{props.button} </button>
        </div>
    )
}