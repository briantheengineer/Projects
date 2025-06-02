import React from "react";
import Card from "./Card";
import Testimonials from "./Testimonials";
export default function CardSection() {
    return (
        <div>
            <div className="w-full px-5 py-20 flex justify-around flex-wrap gap-6">
                <Card name={'selton'} text={'mds'} button={'carai'} />
                <Card />
                <Card />
            </div>
            <div>
                <Testimonials className='w-full py-5 bg-black' />
            </div>
        </div>
    )
}