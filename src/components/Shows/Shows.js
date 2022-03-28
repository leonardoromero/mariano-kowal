import React from 'react';
import bg from '../../img/asteroids-big.png';
import { NewShow } from './NewShow';
import { ShowsContainer } from './ShowsContainer';
import { ShowsContentCol } from './ShowsContentCol';
import { ShowsTitleCol } from './ShowsTitleCol';

export const Shows = () => {
	return (
		<div
			className='flex items-center justify-center w-full h-screen lg:bg-fixed'
			style={{ backgroundImage: `url(${bg})` }}
		>
			<ShowsContainer>
				<ShowsTitleCol>
					<h2>PRÓ</h2>
					<h2>XI</h2>
					<h2>MA</h2>
					<h2>MEN</h2>
					<h2>TE</h2>
				</ShowsTitleCol>

				<ShowsContentCol>
					<NewShow
						
						place='Próximamente'
						
					/>
					
				</ShowsContentCol>
			</ShowsContainer>
		</div>
	);
};
