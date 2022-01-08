import React from 'react'
import bg from '../img/asteroids-big.png'

export const Shows = () => {
    return (
        <div 
            id='#shows' 
            className='h-screen w-full flex justify-center items-center bg-fixed bg-cover'
            style={{ backgroundImage:`url(${bg})`}}>
            <div className="card lg:card-side backdrop-blur-2xl flex w-11/12 lg:w-1/2">
                <div className="card-title w-1/2 text-5xl md:text-7xl font-bold p-4 text-bg hover:text-complementary">
                    <h2>PRÓ</h2>
                    <h2>XI</h2>
                    <h2>MA</h2>
                    <h2>MEN</h2>
                    <h2>TE</h2>
                </div>

                <div className="w-3/4 lg:w-1/2 flex flex-col justify-center">
                    <div className='card border-complementary border-[1px] p-2 text-bg w-11/12 mx-auto my-2'>
                        <div className="card-body flex items-center">
                            <h2 className="card-title font-bold text-2xl md:text-3xl w-1/4 inline-block mr-1">10 ENE</h2> 
                            <div className="card-content w-3/4 text-center flex flex-col justify-center gap-2">
                                <a href='https://www.instagram.com/ladamadebollini/?hl=es' className='text-lg md:text-xl underline decoration-complementary decoration-wavy underline-offset-2 hover:line-through'>La Dama de Bollini</a> 
                                <p className='text-sm md:text-md'>Pje Bollini 2281, CABA</p>
                            </div>
                        </div>
                    </div>
                    <div className='card border-complementary border-[1px] p-2 text-bg w-11/12 mx-auto my-2'>
                        <div className="card-body flex items-center">
                            <h2 className="card-title font-bold text-2xl md:text-3xl w-1/4 inline-block mr-1">10 FEB</h2> 
                            <div className="card-content w-3/4 text-center flex flex-col justify-center gap-2">
                                <a href='https://www.instagram.com/acusticos.urbanos/' className='text-lg md:text-xl underline decoration-complementary decoration-wavy underline-offset-2 hover:line-through'>Acústicos Urbanos</a> 
                                <p className='text-sm md:text-md'>Caballito, CABA</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div> 
        </div>
    )
}
