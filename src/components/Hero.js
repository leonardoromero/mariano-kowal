import React from 'react'
import bg from '../img/hero-bg-dark.png'

export const Hero = () => {
    return (
        <div 
            className='h-screen w-full bg-cover -mt-16 pt-12 flex items-center' 
            style={{ backgroundImage:`url(${bg})`}}>
            <h1>
                <span>MARIANO KOWAL</span>
            </h1>
        </div>
    )
}
