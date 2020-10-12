import React  from 'react';
import classNames from "classnames";
import './index.css'

export default function SortingOptions({handleFiltering, active}){
	return (
		<div className="filters">
		{
			["Created", "Name", "Most Popular", "Least Popular", "Approved"].map((el,i) => 
				( 
					<button 
						className={classNames({active: +active === i})} 
						index={i} 
						key={i} 
						onClick={handleFiltering} 
					>{el}</button> 
				)
			)
		}
		</div>
	);
}