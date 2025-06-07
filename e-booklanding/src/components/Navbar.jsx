import React from 'react';
export default function Navbar() {
    return(
        <div className='w-full flex flex-nowrap justify-between fixed backdrop-blur-md p-5 h-fit bg-transparent z-10'>
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