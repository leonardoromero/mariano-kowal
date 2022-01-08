import React from 'react'

export const FooterLink = ( {link, content} ) => {
    return (
        <a 
            href={link} 
            target='_blank' 
            rel="noopener noreferrer" 
            className='font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600'>
            {content}
        </a>
    )
}
