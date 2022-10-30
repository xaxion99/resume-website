import React from 'react';
import './Skills.css';
import { Button } from './Button';

function Skills() {
	return (
		<>
			<div className='skills-container'>
				<h3>My Skills</h3>
				<div className='skills'>
					<div className='skill'>Agile</div>
					<div className='skill'>Angular 2.0</div>
					<div className='skill'>AWS</div>
					<div className='skill'>C/C++</div>
					<div className='skill'>C#</div>
					<div className='skill'>CSS</div>
					<div className='skill'>Fortran</div>
					<div className='skill'>Git</div>
					<div className='skill'>Java</div>
					<div className='skill'>JavaScript</div>
					<div className='skill'>HTML</div>
					<div className='skill'>Matlab</div>
					<div className='skill'>MVC</div>
					<div className='skill'>MySQL</div>
					<div className='skill'>Objective-C</div>
					<div className='skill'>PostgreSQL</div>
					<div className='skill'>Python</div>
					<div className='skill'>R</div>
					<div className='skill'>React.js</div>
					<div className='skill'>TypeScript</div>
					<div className='skill'>Vue.js</div>
				</div>
				<Button
					className='btn'
					buttonStyle='btn--outline'
					buttonSize='btn--large'
				>
					<a
						href='Resume - Logan R. J. Drum 2022.pdf'
						download
					>
						Resume <i className='fa-solid fa-file-arrow-down' />
					</a>
				</Button>
			</div>
		</>
	);
}

export default Skills;
