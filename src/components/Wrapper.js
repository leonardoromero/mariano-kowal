import React from 'react'
import { Nav } from './Nav'
import { Shows } from './Shows'

export const Wrapper = () => {
    return (
        <div className='max-w-7xl min-h-screen'>
            <Nav/>
            <Shows/>
        </div>
    )
}
