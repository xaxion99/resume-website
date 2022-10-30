import React from 'react';
import './Textblock.css';

function Textblock(props) {
	return (
		<>
			<div className='textblock'>
				<h1>{props.title}</h1>
				<div className='image-container'>
					<img
						src={props.src}
						alt='Logan R. J. Drum, P.Eng'
					/>
				</div>
				<p>{props.text}</p>
			</div>
		</>
	);
}

export default Textblock;
