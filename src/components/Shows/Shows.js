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
						day='14'
						month='mar'
						place='Folk you Mondays'
						link='https://www.instagram.com/folkyoumondays/'
						address='Pje. Bollini 2281, CABA'
					/>
					<NewShow
						day='31'
						month='mar'
						place='921 Casa Cultural'
						link='https://www.instagram.com/921.casacultural/'
						address='San José de Calasanz 921, CABA'
					/>{' '}
				</ShowsContentCol>
			</ShowsContainer>
		</div>
	);
};
