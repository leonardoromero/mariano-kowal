import React from 'react';
import bg from '../../img/newspaper-bg.png';

export const Press = () => {
	return (
		<div
			className='flex justify-center min-h-screen'
			style={{ backgroundImage: `url(${bg})` }}
		>
			<div className='flex flex-col border border-red-400 lg:flex-row'>
				<h3 className='text-5xl font-bold text-center lg:-rotate-90 text-bg md:text-7xl'>
					PRENSA
				</h3>
				<div className='space-y-5 text-bg'>
					<ul>
						<li>
							{' '}
							<p>
								<span>spe</span>Mariano Kowal: "tocar en vivo
								siempre tiene una mangia especial"
							</p>
						</li>
						<li>
							{' '}
							<p>
								<span>radio click digital</span>Presentación de
								Confesiones
							</p>
						</li>
						<li>
							{' '}
							<p>
								<span>qepd.news</span>Mariano Kowal presenta
								«Desarmado», su primer EP
							</p>
						</li>
						<li>
							{' '}
							<p>
								<span>territoriorock</span>MARIANO KOWAL nos
								presenta su EP titulado DESARMADO
							</p>
						</li>
						<li>
							{' '}
							<p>
								<span>24hs noticias</span>Confesiones es el
								segundo álbum de Mariano Kowal
							</p>
						</li>
						<li>
							{' '}
							<p>
								<span>qepd.news</span>«Confesiones», lo nuevo de
								Mariano Kowal
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
