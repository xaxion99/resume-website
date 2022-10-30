import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import Footer from '../Footer';
import Textblock from '../Textblock';

export default function Project5() {
	return (
		<>
			<div className='project-5'>
				<Textblock
					src='images/Wordle.png'
					text='Earlier in 2022, with Wordle taking over the world’s attention,
						I looked at it and thought, how can I solve this game?  I looked up a
						dataset of 5-letter English words and built a cryptographic application
						that can solve any Wordle game in the six guesses allowed.  The 
						application has tools for determining various useful statistics about
						all the five-letter words in the compiled dataset and displaying the 
						information in charts and graphs.  There is also a simple UI for taking 
						in manual user inputs and showing the user what words are possible in the
						dataset after each guess.  I tested the software for 150 days with no 
						failures.  Ultimately, the Wordle solver was a huge success and a great 
						learning experience for cryptography, English language statistics, and 
						of course bragging to your friends.'
					title='Wordle Solver'
				></Textblock>
				<Button
					className='btn'
					buttonStyle='btn--outline'
					buttonSize='btn--large'
				>
					<a
						href='https://github.com/xaxion99/wordle'
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
