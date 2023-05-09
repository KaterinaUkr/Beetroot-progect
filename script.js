const API = 'https://www.omdbapi.com/?i=tt3896198';
const API_KEY = '&apikey=f97d33df&';

// const API = 'https://api.themoviedb.org/3/';

const searchResult = document.querySelector('#search-result');

const getData = (url) =>
	fetch(url)
		.then((res) => res.json())
		.then((data) => data);

const createSearchElement = (film) => {
	const cardFilm = document.createElement('div');
	cardFilm.classList.add('card');
	
	let imageURL = film.Poster
	const img = document.createElement('img');
	img.classList.add('p-3');
	img.classList.add('card-img-top');
	img.src = imageURL;
	img.alt = 'film photo';

	const infoList = document.createElement('div');
	infoList.classList.add('card-body');

	const title = document.createElement('h5');
	title.classList.add('card-title');
	title.innerText = film.Title;

	const plot = document.createElement('p');
	plot.classList.add('card-text');
	plot.innerText = film.Plot;

	const linkDetails = document.createElement('a');
	linkDetails.classList.add = ('btn');
	linkDetails.classList.add = ('btn-outline-success');
	linkDetails.href = '#';
	linkDetails.role = 'button';

	const linkFilms = document.createElement('a');
	linkFilms.classList.add = ('btn');
	linkFilms.classList.add = ('btn-outline-success');
	linkFilms.href = '#';
	linkFilms.role = 'button';


	infoList.appendChild(title);
	infoList.appendChild(plot);
	infoList.appendChild(linkDetails);
	infoList.appendChild(linkFilms);
	cardFilm.appendChild(img);
	cardFilm.appendChild(infoList);
	
	return cardFilm;
};

const getFilms = async () => {
	const data = await getData(API+API_KEY);
	// data.for(element => {
		searchResult.appendChild(createSearchElement(data));		
	// });
	
	
};
getFilms()

let btnSearch = document.querySelector('#search-result');

btnSearch.onclick = getParams;

function getParams() {
	let nameSearch = document.querySelector('#inputName').value;
	console.log(nameSearch);
	let typeSearch = document.querySelector('#filmtype').value;
	console.log(typeSearch);
}
	
	


