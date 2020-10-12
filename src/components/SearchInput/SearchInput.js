import React from 'react';
import './index.css'

export default function SearchInput({ setSearchValue }){
	return (
		<div className="searchContainer">
			<span className="searchIcon"></span>
			<input 
				className="searchInput" 
				placeholder="search" 
				onChange={(e) => setSearchValue(e.currentTarget.value)}
			/>
		</div>
	);
}