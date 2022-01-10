import React from 'react'

export const CustomLink = ( {link, text = '', classes = '', children} ) => {
    return (
        <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className={classes}>
            {text === '' && children}
        </a>
    )
}
