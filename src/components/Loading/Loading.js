import React from 'react';
import './index.css';

export default function Loading(){
	return (
		<div>
			<div className="gif">
				<img src="/assets/bobsBurgerDance.gif" alt="loading"/>
			</div>
			<p>...........Loading</p>
		</div>
	);
}