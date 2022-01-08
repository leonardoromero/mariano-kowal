import React from 'react'
import bg from '../img/blob.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faItunesNote, faYoutube } from '@fortawesome/free-brands-svg-icons'
import ig from '../img/ig.png'
import tiktok from '../img/tiktok.png'

export const Social = () => {
    return (
        <div 
            id='social' 
            className='h-screen w-full bg-cover flex flex-col items-center justify-evenly md:flex-row md:flex-wrap'
            style={{ backgroundImage:`url(${bg})`}}>
                <a href='https://www.instagram.com' target='_blank' rel="noopener noreferrer"><img src={ig} alt='instagram logo' className='w-16 md:w-32 hover:invert hover:scale-125 transition-all'/></a>
                <a href='https://open.spotify.com/artist/1QdaFn6QmEMmw5s6x8NGow' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faSpotify} className='text-7xl md:text-9xl text-[#1ed760] hover:invert hover:scale-125 transition-all'/></a>
                <a href='https://music.apple.com/us/artist/mariano-kowal/1461722789' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faItunesNote} className='text-7xl md:text-9xl text-[#fb3f57] hover:invert hover:scale-125 transition-all'/></a>
                <a href='https://www.tiktok.com/@marianokowal' target='_blank' rel="noopener noreferrer"><img src={tiktok} alt='tiktok logo' className='w-16 md:w-32 hover:invert hover:scale-125 transition-all'/></a>
                <a href='https://www.youtube.com/channel/UCzWwrh8CSFdHeNOBGd9_XIw' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} className='text-7xl md:text-9xl text-[#FF0000] hover:invert hover:scale-125 transition-all'/></a>
        </div>
    )
}
