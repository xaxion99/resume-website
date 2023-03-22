import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import Textblock from '../Textblock';

function Project1() {
	return (
		<>
			<div className='project-1'>
				<Textblock
					src='images/FOW.png'
					text='The Force of Will TCG official card database has always 
					been considered lacking by the community.  A fan-made 
					alternative, FoWDB, was built and maintained until 2020, when 
					the website owner decided to end support.  In need of an 
					alternative for modern sets, I took it upon myself to design 
					and develop a functional card database for the local NL 
					community.  The website was developed in Angular 2.0 and was
					built with a serverless design whereby all the pertainent card 
					data was store in ~10MB of JSON and only the card images were
					retrieved from the official databases API.  This architecture 
					proved to be very efficient with reducing load time. Sadly, at 
					this time the official database API has changed so card images 
					no longer load, but the core functionality is still operational.'
					title='Force of Will TCG Web Database'
				></Textblock>
				<br></br>
				<Button
					className='btn'
					buttonStyle='btn--outline'
					buttonSize='btn--large'
				>
					<a
						href='https://github.com/xaxion99/fow-cube-simulator'
						target='_blank'
						rel='noopener noreferrer'
					>
						Link to GitHub
					</a>
				</Button>
			</div>
		</>
	);
}

export default Project1;
