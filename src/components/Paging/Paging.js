import React from 'react';
import './index.css';


export default function Paging({ setIndex, length }){

	return (
		<div className="paging">
			<label>Page: </label>
			<input 
				type="number" 
				defaultValue={1} 
				min={1} 
				max={Math.ceil(length/4)} 
				onChange={(e) => setIndex((+e.currentTarget.value - 1) * 4)}
			/>
		</div>
	);
}