import React from 'react'
import { Hero } from './Hero';
import { Nav } from './Navigation/Nav';
import { Shows } from './Shows/Shows';
import { Discography } from './Discography/Discography';
import { Social } from './Social';
import { Quote } from './Quote';
import { Footer } from './Footer/Footer';
import { About } from './About/About';
import { Press } from './Press/Press';

export const Main = () => {
    return (
        <>
            <Nav/>
            <Hero/>
            <Shows/>
            <Discography/>
            <About/>
            <Social/>
            <Quote/>
            <Footer/>
        </>
    )
}
