import React from 'react'
import {CustomLink} from '../CustomLink'

export const NewShow = ( {day, month, place, link, address} ) => {
    return (
        <div className='card border-complementary border-[1px] p-2 text-bg w-11/12 mx-auto my-2'>
            <div className="card-body flex items-center">
                <h2 className="card-title font-bold text-2xl md:text-3xl w-1/4 inline-block mr-1 uppercase">{day} {month}</h2> 
                <div className="card-content w-3/4 text-center flex flex-col justify-center gap-2">
                    <a 
                        href={link} 
                        className='text-lg md:text-xl underline decoration-complementary decoration-wavy underline-offset-2 hover:font-bold'>
                        {place}
                    </a> 
                    <p className='text-sm md:text-md'>{address}</p>                        
                </div>
            </div>
        </div>
    )
}
