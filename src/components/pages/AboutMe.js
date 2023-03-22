import React from 'react';
import '../../App.css';
import Skills from '../Skills';
import Textblock from '../Textblock';

function AboutMe() {
	return (
		<>
			<div className='aboutme'>
				<Textblock
					src='images/Logan.jpg'
					text='I am a Computer Engineer currently working at Innovative Development &
					Design Engineers Ltd. (IDDEL). I graduated from Memorial University of
					Newfoundland (MUN) with a B.Eng in Computer Engineering in 2017. I
					have over 7 years of experience in various computer technology fields,
					including information technology consultation, computer networking,
					hardware interfacing, and other various other computer engineering
					consulting endeavors. Additionally, I have over 5 years of experience
					working as a full-stack software developer utilizing many modern
					frameworks, languages, and libraries. I have spent most of my career
					as a developer working on software/web applications for the
					engineering profession. I have professional licensure through PEGNL
					and an engineer’s stamp.'
					title='About Me'
				></Textblock>
				<Skills></Skills>
			</div>
		</>
	);
}

export default AboutMe;
