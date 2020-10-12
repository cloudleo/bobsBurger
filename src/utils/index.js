

const URL = "http://localhost:3001/burgers";

const toCapitalize = (string) => {
	return string.split(" ").map(el => el[0].toUpperCase() + el.slice(1)).join(" ");
};

export const loadBurgers = async () => {
	const response = await fetch(URL);
	const data = await response.json();
	return data;
}

export const patchBurger = async (id,obj) => {
	fetch(`${URL}/${id}`, {
	    method: 'PATCH', 
	    mode: 'cors', 
	    cache: 'no-cache', 
	    credentials: 'same-origin', 
	    headers: {
	      'Content-Type': 'application/json'
	    },
	    body: JSON.stringify(obj) 
	});	
}

export const addBurger = async (value) => {
		const entry = {
			name: `"${toCapitalize(value)}" Burger`,
			votes: 0,
			approved: false,
			created: Date.now(),
			updated: Date.now()
		}
		const response = await fetch(URL, {
		    method: 'POST', 
		    mode: 'cors', 
		    cache: 'no-cache', 
		    credentials: 'same-origin', 
		    headers: {
		      'Content-Type': 'application/json'
		    },
		    body: JSON.stringify(entry) 
	  	});
	  	const data = await response.json();
	  	return data;
}
