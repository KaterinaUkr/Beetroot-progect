const API = 'http://www.omdbapi.com/?i=tt3896198&apikey=f97d33df';

const searchResult = document.querySelector('search-result');

const getData = (url) => 
	fetch(url)
		.then((res) => res.json())
		.then((data) => console.log(data));



const createSearchElement = (film) => {
	const cardFilm = document.createElement('div');
	cardFilm.classList.add('card');
	
	const img = document.createElement('img');
	img.classList.add('p-3');
	img.classList.add('card-img-top');
	img.src = 'film.Poster';
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

// const getFilms = async () => {
// 	const data = await getData(API); 
// 	// console.log(data)
// 	data.forEach(element => {
// 		searchResult.appendChild(createSearchElement(element))
// 	});		
// }

const getFilms = async () => {
	const data = await getData(API); 
	// console.log(data)
	// data.forEach(element => {
		searchResult.appendChild(createSearchElement(element))
	// });		
}

getFilms();