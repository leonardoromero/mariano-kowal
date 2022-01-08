import React from 'react'

export const DiscographyCover = ( {link, cover, alt} ) => {

    return (
        <a href={link} target='_blank' rel="noopener noreferrer">
            <img src={cover} alt={alt} className='discography-cover'/>
        </a>
    )
}
