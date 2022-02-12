import React from 'react';
import { motion } from 'framer-motion';

export const DiscographyCover = ({ link, cover, alt }) => {
	return (
		<a href={link} target='_blank' rel='noopener noreferrer'>
			<motion.div
				initial={{ scale: 0.5 }}
				whileInView={{ scale: 1 }}
				transition={{ duration: 1.2, type: 'spring', bounce: 0.2 }}
			>
				<img src={cover} alt={alt} className='discography-cover' />
			</motion.div>
		</a>
	);
};
