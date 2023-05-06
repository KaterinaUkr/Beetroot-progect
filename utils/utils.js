export const getData = (url) => 
	fetch(url)
		.then((res) => res.json())
		.then((data) => data);


export const API = 'https://jsonplaceholder.typicode.com/';