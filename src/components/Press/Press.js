import React from 'react';
import bg from '../../img/newspaper-bg.png';
import qepd from '../../img/press/qepd.png';
import spe from '../../img/press/spe.png';
import territorioRock from '../../img/press/territorio-rock.png';
import radioClickDigital from '../../img/press/radio-click-digital.png';
import picaEnPunta from '../../img/press/pica-en-punta.jpg';
import telefe from '../../img/press/telefe.png';

export const Press = () => {
	return (
		<div
			className='flex justify-center'
			style={{ backgroundImage: `url(${bg})` }}
		>
			<div className='my-24'>
				<h3 className='p-12 decoration-wavy underline-offset-4 decoration-4 decoration-[#FDC341] text-6xl font-bold text-center underline lg:text-7xl font-orbitron text-bg'>
					Prensa
				</h3>
				<div className='flex flex-col flex-wrap items-center space-y-10 justify-items-center md:grid md:grid-cols-3 md:gap-5 max-w-10/12'>
					<a
						href='https://www.instagram.com/tv/CT8CT1hBrNz/?utm_source=ig_web_button_share_sheet'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img
							src={telefe}
							alt='logo telefe'
							loading='lazy'
							className='w-32 transition-all hover:scale-110 '
						/>
					</a>
					<a
						href='https://qepd.news/confesiones-lo-nuevo-de-mariano-kowal/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img
							src={qepd}
							alt='logo qepd'
							loading='lazy'
							className='h-16 transition-all hover:scale-110 '
						/>
					</a>
					<a
						href='https://territoriorock.com/conociendo-bandas/mariano-kowal-nos-presenta-su-ep-titulado-desarmado/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img
							src={territorioRock}
							alt='logo territorio rock'
							loading='lazy'
							className='h-10 transition-all md:h-14 hover:scale-110 '
						/>
					</a>
					<a
						href='https://suenaspe.com/notas/mariano-kowal-tocar-en-vivo-siempre-tiene-una-magia-especial/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img
							src={spe}
							alt='logo spe'
							loading='lazy'
							className='w-32 transition-all hover:scale-110 '
						/>
					</a>
					<a
						href='https://anchor.fm/pica-en-punta/episodes/PicaEnPunta---Msica-EN-VIVO-Entrevista-a-Mariano-Kowal-e178a9m'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img
							src={picaEnPunta}
							alt='logo pica en punta'
							loading='lazy'
							className='w-32 transition-all hover:scale-110'
						/>
					</a>
					<a
						href='https://www.radioclickdigital.com.ar/confesiones/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img
							src={radioClickDigital}
							alt='logo radio click digital'
							loading='lazy'
							className='w-32 transition-all hover:scale-110'
						/>
					</a>
				</div>
			</div>
			{/* <div className='flex flex-col border border-red-400 lg:flex-row'>
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
			</div> */}
		</div>
	);
};
