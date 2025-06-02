import React from 'react';
export default function Navbar() {
    return(
        <div className='flex flex-nowrap justify-between  p-5 h-fit bg-transparent'>
            <div>
                <h1>hey</h1>
            </div>
            <div className='flex [&:nth-child(2)]:[&_button]:ps-7'>
                <button>about</button>
                <button>contact</button>
                <button>know more!</button>
            </div>
        </div>
    )
}