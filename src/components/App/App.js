import React, { useState, useEffect} from 'react';
import NewBurgerInput from '../NewBurgerInput';
import SortingOptions from '../SortingOptions';
import SearchInput from '../SearchInput';
import Card from '../Card';
import Paging from '../Paging';
import Loading from '../Loading';
import { loadBurgers } from "../../utils";
import './App.css'

function App() {

	const [cards, setCards] = useState({
		burgers: [],
		active: 0,
	});

	const [index, setIndex] = useState(0);
	const [searchValue, setSearchValue] = useState("");
	
	const { burgers, active } = cards;



	useEffect(() => {
		(async () => {
			const data =  await loadBurgers();
			setCards({
				burgers: data.sort((a,b) => a.created - b.created).reverse(),
				active: 0,
			});
		})();
	},[]);

	const handleFiltering = (e,arr=[]) => {
		const value = typeof e === 'string' ? e : e.currentTarget.innerText;
		const newActive = typeof e === 'string' ? 0 : e.currentTarget.getAttribute("index");
		const sortedCards = arr.length ? arr : burgers;
		switch(value) {
			case "Name":
				sortedCards.sort((a,b) => a.name.localeCompare(b.name));
			break;
			case "Most Popular":
				sortedCards.sort((a,b) => a.votes - b.votes).reverse();
			break;
			case "Least Popular":
				sortedCards.sort((a,b) => a.votes - b.votes);
			break;
			case "Approved":
				sortedCards.sort((a,b) => a.approved - b.approved).reverse();
			break;		    		    		    
			default:
				sortedCards.sort((a,b) => a.created - b.created).reverse();
		}
		setCards({
			burgers: [...sortedCards],
			active: newActive
		});
	}

	return (
		<div className="App">
			<header>
				<h1 className="title">New Burger Idea</h1>
				<NewBurgerInput handleFiltering={handleFiltering} burgers={burgers}/>
				<hr />
		    </header>
		    <h1 className="blTitle">Burgers List</h1>
		    <SortingOptions handleFiltering={handleFiltering} active={active}/>
		    <SearchInput setSearchValue={setSearchValue} />
		    {
				burgers.length ? burgers
					.filter(el => searchValue ? el.name.toLowerCase().includes(searchValue.toLowerCase()) : true)
					.slice(index,index + 4).map((el,i) => 
						(<Card 
							{...el} 
							key={"key-" + i} 
							setCards={setCards} 
							burgers={burgers} 
							active={active} 
						/>)) :  (<Loading />)
		  	}
		  	<Paging setIndex={setIndex} length={burgers.length}/>
		  	<div className="imageContainer">
		    	<img src="/assets/bobBurgers.png" alt="Bobs peeking" />
		  	</div>
		</div>
	);
}

export default App;
