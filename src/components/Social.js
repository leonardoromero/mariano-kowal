import React from 'react'
import bg from '../img/blob.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faItunesNote, faYoutube } from '@fortawesome/free-brands-svg-icons'
import ig from '../img/ig.png'
import tiktok from '../img/tiktok.png'
import { CustomLink } from './CustomLink'

export const Social = () => {
    return (
        <div 
            className='h-screen w-full bg-cover flex flex-col items-center justify-evenly md:flex-row md:flex-wrap'
            style={{ backgroundImage:`url(${bg})`}}>

                <CustomLink link='https://www.instagram.com'>
                    <img src={ig} alt='instagram logo' className='social-img'/>
                </CustomLink>
                
                <CustomLink link='https://open.spotify.com/artist/1QdaFn6QmEMmw5s6x8NGow'>
                    <FontAwesomeIcon 
                        icon={faSpotify} 
                        className='text-[#1ed760] social-icon'/>
                </CustomLink>
                
                <CustomLink link='https://music.apple.com/us/artist/mariano-kowal/1461722789'>
                    <FontAwesomeIcon 
                        icon={faItunesNote} 
                        className='text-[#fb3f57] social-icon'/>
                </CustomLink>
                
                <CustomLink link='https://www.tiktok.com/@marianokowal'>
                    <img src={tiktok} alt='tiktok logo' className='social-img'/>
                </CustomLink>
                
                <CustomLink link='https://www.youtube.com/channel/UCzWwrh8CSFdHeNOBGd9_XIw'>
                    <FontAwesomeIcon 
                        icon={faYoutube} 
                        className='text-[#FF0000] social-icon'/>
                </CustomLink>
        </div>
    )
}
