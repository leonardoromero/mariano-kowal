import React from 'react';
import marian from '../../img/artistica8.jpg';
import bg from '../../img/space.png';
import lines from '../../img/lines.png';
import { motion } from 'framer-motion';

export const About = () => {
	return (
		<div
			className='flex items-center justify-center min-h-screen'
			style={{ backgroundImage: `url(${bg})` }}
		>
			<div className='flex flex-wrap items-center justify-center w-11/12 py-10 mx-auto gap-x-10 justify-items-center'>
				<div className='flex justify-center w-3/4 pb-3 lg:w-5/12'>
					<motion.div
						initial={{ x:-200 }}
                        whileInView={{ x:0 }}
                        transition={{ duration: 1.5, type:'spring', bounce:0.4 }}
                        
                      
						className='bg-no-repeat'
						style={{ backgroundImage: `url(${lines})` }}
					>
						<img
							className='translate-x-[30px] -translate-y-[30px]'
							src={marian}
							alt='mariano kowal'
                            loading='lazy'
						/>
					</motion.div>
				</div>
				<motion.div className='space-y-2 text-xl text-center text-bg lg:w-5/12 lg:space-y-4 lg:text-2xl'>
					<p>
						<span className='font-bold text-complementary'>
							Mariano Kowal
						</span>{' '}
						es un compositor y músico argentino que, desde el
						ambiente emergente, trae una propuesta musical híbrida
						entre el rock/pop/indie.
					</p>
					<p>
						Su música busca ser versátil y cálida, mediante melodías
						coloridas y armonías elaboradas.
					</p>
				</motion.div>
			</div>
		</div>
	);
};
