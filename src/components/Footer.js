import React from 'react';
import './Footer.css';

function Footer() {
	return (
		<div className='footer-container'>
			<div className='footer-left'>
				<small className='fl website-rights'>Logan R. J. Drum, P.Eng</small>
				<br></br>
				<small className='fl website-rights'>St. John's, NL</small>
			</div>
			<div className='footer-center'>
				<small className='fc website-rights'>Logan R. J. Drum ©2022</small>
			</div>
			<div className='footer-right'>
				<small className='fr website-rights'>Contact Email:</small>
				<br></br>
				<small className='fr website-rights'>
					logan.drum92@gmail.com{' '}
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='mailto: logan.drum92@gmail.com'
					>
						<i className='fa-solid fa-envelope'></i>
					</a>
				</small>
			</div>
		</div>
	);
}

export default Footer;
