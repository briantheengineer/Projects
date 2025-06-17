import React from 'react';
export default function Navbar() {
    return(
        <div className='w-full flex flex-nowrap justify-between fixed backdrop-blur-lg p-5 pl-9 h-fit bg-transparent z-10'>
            <div>
                <h1 className='bcblack text-2xl'>hey</h1>
            </div>
            <div className='flex bcbold text-2xl [&:nth-child(2)]:[&_button]:ps-7'>
                <button>about</button>
                <button>contact</button>
                <button>know more!</button>
            </div>
        </div>
    )
}