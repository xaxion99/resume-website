import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
	return (
		<div className='cards'>
			<h1>Projects</h1>
			<div className='cards__container'>
				<div className='cards__wrapper'>
					<h2>Angular Projects</h2>
					<ul className='cards__items'>
						<CardItem
							src='images/FOW.png'
							text='Force of Will CCG Web Database'
							label='FOWDB'
							path='/project-1'
						/>
						<CardItem
							src='images/TV.png'
							text='Build Your Own TV'
							label='TV'
							path='/project-2'
						/>
					</ul>
					<h2>Python Projects</h2>
					<ul className='cards__items'>
						<CardItem
							src='images/Crypto.png'
							text='Cryptocurrency Grid Trading Bot'
							label='Trading'
							path='/project-3'
						/>
						<CardItem
							src='images/Numbers.png'
							text='Number Simulator - Idle Game'
							label='Game'
							path='/project-4'
						/>
						<CardItem
							src='images/Wordle.png'
							text='Wordle Solver'
							label='Wordle'
							path='/project-5'
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
