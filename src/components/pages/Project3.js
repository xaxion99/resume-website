import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import Textblock from '../Textblock';

export default function Project3() {
	return (
		<>
			<div className='project-3'>
				<Textblock
					src='images/Crypto.png'
					text='With the rise of cyptocurrency in our economy, I was
						interested in building a trading bot that could try to take 
						advantage of the crypto market’s volatility.  I initially
						started off trying to interface with another open-source
						crypto trading bot, but came to realize their system was
						not designed to do grid trading like I wanted to do.  Grid
						trading is an established forex trading strategy, which is
						why I chose it.  I ended up using a Python library and API 
						for the NDAX exchange to get the relevant trading stats and 
						functionality, then I was able to write an algorithm 
						for establishing the grid, and last I built a live updating 
						UI in tKinter. While the market has been extra volatile, the 
						bot has proven to be somewhat succesful.'
					title='Cryptocurrency Grid Trading Bot'
				></Textblock>
				<br></br>
				<Button
					className='btn'
					buttonStyle='btn--outline'
					buttonSize='btn--large'
				>
					<a
						href='https://github.com/xaxion99/grid-bot'
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
