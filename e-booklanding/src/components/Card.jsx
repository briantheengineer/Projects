import React from "react";
export default function Card(props) {
    return (
        <div className="p-3 rounded-2xl border w-fit max-w-sm min-w-90 min-h-1/2 justify-center flex flex-wrap text-center relative">
            <div className="">
                <h1 className="text-4xl bcblack font-black bcblack w-full ">{props.name} </h1>
                <h2 className="text-3xl bcbold font-medium bcbold w-full pt-5">{props.caption}</h2>
                <p className="text-2xl bcregular font-medium bcregular w-full pt-3">{props.text} </p>
            </div>
            <button className="bottom-1 bcregular text-2xl absolute w-fit h-fit p-2 border rounded-md bg-gray-50  hover:bg-gray-200 hover:border-gray-300 cursor-pointer transition" >{props.button} </button>
        </div>
    )
}