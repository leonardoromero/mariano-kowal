import React from 'react';
import rosas from '../../img/portadas/rosasdevictoria.jpeg';
import confesiones from '../../img/portadas/confesiones.jpeg';
import desarmado from '../../img/portadas/desarmado.jpg';
import { DiscographyGrid } from './DiscographyGrid';
import { DiscographyCover } from './DiscographyCover';
import { DiscographyTitle } from './DiscographyTitle';

export const Discography = () => {
	return (
		<div className='py-20 bg-cover bg-gradient-to-r from-primary via-secondary to-darkSecondary'>
			<DiscographyGrid>
				<DiscographyTitle title='Álbumes' />
				<div className='flex gap-4 mx-auto'>
					<DiscographyCover
						link='https://open.spotify.com/album/6nBKNkbMaRrNH7gDj1OziU'
						cover={rosas}
						alt='portada rosas de victoria'
					/>
					<DiscographyCover
						link='https://open.spotify.com/album/4Ho3mwnvHzsTFgcQmAaU3r'
						cover={confesiones}
						alt='portada confesiones'
					/>
				</div>
				<DiscographyTitle title='EPs' />
				<div className='flex gap-4 mx-auto'>
					<DiscographyCover
						link='https://open.spotify.com/album/2H9RyTpLYQamKhdlV4T6oJ'
						cover={desarmado}
						alt='portada desarmado'
					/>
				</div>
			</DiscographyGrid>
		</div>
	);
};
