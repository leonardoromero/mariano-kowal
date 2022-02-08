import React from 'react'
import marian from '../../img/artistica8.jpg'
import bg from '../../img/space.png'
import lines from '../../img/lines.png'


export const About = () => {
    return (
        <div className='flex items-center justify-center min-h-screen' style={{ backgroundImage:`url(${bg})`}}>
            <div className='flex flex-wrap items-center justify-center w-11/12 py-10 mx-auto gap-x-10 justify-items-center'>
                <div className='flex justify-center w-3/4 pb-3 lg:w-5/12'>
                    <div className="bg-no-repeat" style={{ backgroundImage:`url(${lines})`}}>
                        <img className='translate-x-[30px] -translate-y-[30px]' src={marian} alt='mariano kowal'/>
                    </div> 
                </div>
                <div className='space-y-2 text-xl text-center text-bg lg:w-5/12 lg:space-y-4 lg:text-2xl'>
                    <p><span className='font-bold text-complementary'>Mariano Kowal</span> es un compositor y músico argentino que, desde el ambiente emergente, trae una propuesta musical híbrida entre el rock/pop/indie.</p>
                    <p>Su música busca ser versátil y cálida, mediante melodías coloridas y armonías elaboradas.</p>
                </div>
            </div>
        </div>
    )
}
