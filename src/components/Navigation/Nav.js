import React from 'react'
import logo from '../../img/logo-viejo.png'
import { NavBar } from './NavBar'

export const Nav = () => {

    return (
        <NavBar>
            <img src={logo} alt='logo de mariano kowal' className='h-14 ml-5 opacity-50 pt-1'/>
        </NavBar>
    )
}
