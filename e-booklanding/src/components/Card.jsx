import React from "react";
export default function Card(props) {
    return (
        <div className="p-3 rounded-2xl border-2 w-fit max-w-3xl min-w-90 min-h-60">
            <h1>{props.name} </h1>
            <p>{props.text} </p>
            <button>{props.button} </button>
        </div>
    )
}