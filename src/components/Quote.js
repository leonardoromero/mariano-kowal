import React from 'react'
import {fragments} from '../helpers/fragments.js'

export const Quote = () => {

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
    
    const random = getRandomInt(1, 12) 

    return (
        <div className='flex justify-center bg-primary text-lg'>
            <blockquote className='p-4 italic text-neutral-700 w-10/12 md:w-max'>
                <div className="quote-sign" aria-hidden="true">&ldquo;</div>
                <p className='ml-10 z-10'>{fragments[random].verse}</p>
                <cite className='text-right block text-neutral-600 hover:text-neutral-500'>
                    <a href={fragments[random].link} target='_blank' rel="noopener noreferrer">{fragments[random].song}</a>
                </cite>
            </blockquote>
        </div>
    )
}
