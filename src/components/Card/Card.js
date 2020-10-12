import React from 'react';
import classNames from "classnames";
import { patchBurger } from "../../utils";
import './index.css'

export default function Card({ burgers, setCards, id, votes, name, approved, active}){

	const handlevote = (e) => {
		const id = +e.currentTarget.getAttribute("dataid");
		const name = e.currentTarget.getAttribute("name");
		const obj = burgers.find(el => el.id === id);
		if(name === "upvote"){
			obj.votes += 1;
		} else {
			obj.votes = obj.votes === 0 ? 0 : --obj.votes;
		}
		setCards({ burgers: [...burgers], active,})	
	}

	const handleApprove = (e) => {
		const targetClicked = e.target.getAttribute("name");
		if(targetClicked) return;

		const id = +e.currentTarget.getAttribute("dataid")
		const obj = burgers.find(el => el.id === id);

		obj.approved = obj.approved ? false : true;
		obj.updated = Date.now();

		patchBurger(id,obj);
	  	setCards({ burgers: [...burgers], active,});	
	}

	return (
		<div className={classNames({card: true, approved,})} 
			 dataid={id}
			 onDoubleClick={handleApprove}
			 title="Click twice to approve"
			 >
			<h1>{ votes > 9 ? votes : `0${votes}`}</h1>
			<h3> {name}</h3>
			<i className="upvote" name="upvote" onClick={handlevote} dataid={id}></i>
			<i className="downvote" name="downvote" onClick={handlevote} dataid={id}></i>			
		</div>
	);
}