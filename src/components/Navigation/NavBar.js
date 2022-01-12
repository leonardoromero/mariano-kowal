import React from 'react'

export const NavBar = ( {children} ) => {
    return (
        <nav 
            className='fixed top-0 flex justify-between items-center h-16'
        >
            {children}
        </nav>
    )
}
