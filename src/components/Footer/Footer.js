import React from 'react'
import { FooterLink } from './FooterLink'

export const Footer = () => {
    return (
        <div className='bg-darkSecondary py-5'>
            <p className='text-gray-700 text-center'>Copyright © Todos los derechos reservados</p>
            <p className='text-gray-700 text-center pt-3'>
                Creado por <FooterLink link='https://www.instagram.com/_leorome/' content='Leo Romero'/></p>
        </div>
    )
}
