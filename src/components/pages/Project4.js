import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import Textblock from '../Textblock';

export default function Project4() {
	return (
		<>
			<div className='project-4'>
				<Textblock
					src='images/Numbers.png'
					text='I have always been fascinated with mathematics and numbers.
						I became an engineer in part because I am good with numbers. 
						Number Simulator is a clicker and idle game inspired from the 
						classic JavaScript web game, Cookie Clicker.  For this game, I
						wanted take a game like Cookie Clicker and strip it down to the 
						rudimentary mathematics to make a bigger and bigger number.  The
						application was build in Python and has a UI developed in tKinter.
						The core concept of the game is that there is a clock that will 
						cause a tick every second change growing the number and the user 
						can additionally click to grow the number asynchronously. As the 
						player’s number grows they will be given opportunities to purchase 
						upgrades for their clicking and the clock tick.  I plan to continue 
						adding more future mathematical concepts to the game as upgrades 
						and adding in mini-games utilizing several of the already developed
						functionality in new and unique ways.'
					title='Number Simulator - Idle Game'
				></Textblock>
				<br></br>
				<Button
					className='btn'
					buttonStyle='btn--outline'
					buttonSize='btn--large'
				>
					<a
						href='https://github.com/xaxion99/number_simulator'
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
