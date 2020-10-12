import React, { useRef, useState } from 'react';
import classNames from "classnames";
import { addBurger } from "../../utils";
import './index.css';

export default function NewBurgerInput({ burgers, handleFiltering }) {

	const [error, setError] = useState(false);
	const burgerInput = useRef(null)

	const createNewBurger = async () => {
		const value = burgerInput.current.value;

		if(!value.length) return;
		const burger = burgers.find(el => {
			return el.name.toLowerCase().match(/(["])(?:(?=(\\?))\2.)*?\1/)[0] === `"${value.toLowerCase()}"`
		});
		if(burger){
			burgerInput.current.value = "";
			setError(true)
			return;
		};

		const newBurger = await addBurger(value);
	  	burgerInput.current.value = "";
		handleFiltering("Created", [newBurger, ...burgers]);
	}


	return (
		<div className="burgerInput">
			<input
				onFocus={() => error ? setError(false) : null}
				className={classNames({error,})} 
				placeholder={!error ? "Burger Name" : "Name Already Exist"} 
				onKeyDown={(e) => e.key === 'Enter' ? createNewBurger() : null}
				ref={burgerInput} 
			/>
			<button onClick={createNewBurger}>Save</button>
		</div>
	);
}