import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Banner.css';

function Banner() {
	return (
		<div className='banner-container'>
			<video
				src='/videos/video_2.mp4'
				autoPlay
				loop
				muted
			/>
			<h1>Hi, my name is Logan!</h1>
			<p>Click below to find about more about who I am and what I do</p>
			<div className='banner-btns'>
				<Link
					to='/aboutme'
					className='btn-mobile'
				>
					<Button
						className='btn'
						buttonStyle='btn--outline'
						buttonSize='btn--large'
					>
						ABOUT ME <i className='fa-solid fa-user' />
					</Button>
				</Link>
				<Link
					to='/projects'
					className='btn-mobile'
				>
					<Button
						className='btn'
						buttonStyle='btn--primary'
						buttonSize='btn--large'
					>
						Projects <i className='fa-solid fa-diagram-project' />
					</Button>
				</Link>
			</div>
		</div>
	);
}

export default Banner;
