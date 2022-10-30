import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import Footer from '../Footer';
import Textblock from '../Textblock';

function Project2() {
	return (
		<>
			<div className='project-2'>
				<Textblock
					src='images/TV.png'
					text='I have lots of media content but often never know what to
						watch.  Seeing I had most of the content for a few series, I
						had the idea to build my own TV channel focused on some of 
						these series.  First, I wanted to make one featuring Yu-Gi-Oh! 
						as I had always enjoyed the series and wanted to watch it with 
						my daughter.  The issue was, where do I start and on which of 
						the loosely related series?  The solution to this ended up being 
						easier tha expected, why not all of them?  I then created a complex
						scheduling system so that I could load in episodes with predefined
						groupings and then show the episode twice every day with a reset
						at noon or midnight.  I later attempted to expand on this, but 
						needed to convert the current system into a streaming API utilizing
						DASH or HLS as I had reached the limitations of client-side 
						rendering.  I have since gotten the streaming functionality complete 
						using Django and plan to connect it with the scheduling system in 
						the near future.'
					title='Build Your Own TV Channels'
				></Textblock>
				<Button
					className='btn'
					buttonStyle='btn--outline'
					buttonSize='btn--large'
				>
					<a
						href='https://github.com/xaxion99/video-player'
						target='_blank'
						rel='noopener noreferrer'
					>
						Link to GitHub
					</a>
				</Button>
			</div>
			<Footer></Footer>
		</>
	);
}

export default Project2;
