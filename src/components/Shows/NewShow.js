import React from 'react';
import { motion } from 'framer-motion';

export const NewShow = ({ day, month, place, link, address }) => {
	return (
		<motion.div
			initial={{ x: -150 }}
			whileInView={{ x: 0 }}
			transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
			className='card border-complementary border-[1px] p-2 text-bg w-11/12 mx-auto my-2'
		>
			<div className='flex items-center card-body'>
				<h2 className='inline-block w-1/4 mr-1 text-2xl font-bold uppercase card-title md:text-3xl'>
					{day} {month}
				</h2>
				<div className='flex flex-col justify-center w-3/4 gap-2 text-center card-content'>
					<a
						href={link}
						className='text-lg underline md:text-xl decoration-complementary decoration-wavy underline-offset-2 hover:font-bold'
					>
						{place}
					</a>
					<p className='text-sm md:text-md'>{address}</p>
				</div>
			</div>
		</motion.div>
	);
};
