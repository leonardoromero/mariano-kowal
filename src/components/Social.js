import React from 'react';
import bg from '../img/blob.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faSpotify,
	faItunesNote,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import ig from '../img/ig.png';
import tiktok from '../img/tiktok.png';
import { CustomLink } from './CustomLink';
import { motion } from 'framer-motion';

export const Social = () => {
	return (
		<div
			className='flex flex-col items-center w-full h-screen bg-cover justify-evenly md:flex-row md:flex-wrap'
			style={{ backgroundImage: `url(${bg})` }}
		>
			<CustomLink link='https://www.instagram.com'>
				<motion.div
					initial={{ scale: 0.5 }}
					whileInView={{ scale: 1 }}
					transition={{ duration: 1, type: 'spring', bounce: 0.8 }}
				>
					<img src={ig} alt='instagram logo' className='social-img' />
				</motion.div>
			</CustomLink>

			<CustomLink link='https://open.spotify.com/artist/1QdaFn6QmEMmw5s6x8NGow'>
				<motion.div
					initial={{ scale: 0.5 }}
					whileInView={{ scale: 1 }}
					transition={{
						duration: 1,
						type: 'spring',
						bounce: 0.8,
						delay: 0.1,
					}}
				>
					<FontAwesomeIcon
						icon={faSpotify}
						className='text-[#1ed760] social-icon'
					/>
				</motion.div>
			</CustomLink>

			<CustomLink link='https://music.apple.com/us/artist/mariano-kowal/1461722789'>
				<motion.div
					initial={{ scale: 0.5 }}
					whileInView={{ scale: 1 }}
					transition={{
						duration: 1,
						type: 'spring',
						bounce: 0.8,
						delay: 0.2,
					}}
				>
					<FontAwesomeIcon
						icon={faItunesNote}
						className='text-[#fb3f57] social-icon'
					/>
				</motion.div>
			</CustomLink>

			<CustomLink link='https://www.tiktok.com/@marianokowal'>
				<motion.div
					initial={{ scale: 0.5 }}
					whileInView={{ scale: 1 }}
					transition={{
						duration: 1,
						type: 'spring',
						bounce: 0.8,
						delay: 0.3,
					}}
				>
					<img
						src={tiktok}
						alt='tiktok logo'
						className='social-img'
					/>
				</motion.div>
			</CustomLink>

			<CustomLink link='https://www.youtube.com/channel/UCzWwrh8CSFdHeNOBGd9_XIw'>
				<motion.div
					initial={{ scale: 0.5 }}
					whileInView={{ scale: 1 }}
					transition={{
						duration: 1,
						type: 'spring',
						bounce: 0.8,
						delay: 0.4,
					}}
				>
					<FontAwesomeIcon
						icon={faYoutube}
						className='text-[#FF0000] social-icon'
					/>
				</motion.div>
			</CustomLink>
		</div>
	);
};
