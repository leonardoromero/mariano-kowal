import React from 'react'
import bg from '../img/hero-bg-dark.png'

export const Hero = () => {
    return (
        <div 
            className='h-screen w-full bg-cover flex items-center' 
            style={{ backgroundImage:`url(${bg})`}}>
            <h1>
                <span className='lg:mix-blend-color-burn hover:mix-blend-overlay '>MARIANO KOWAL</span>
            </h1>
        </div>
    )
}
