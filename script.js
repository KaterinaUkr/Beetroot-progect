// const promise = new Promise((resolve, reject) => {
// 	resolve('resolve');
// 	reject('reject')
// });

// promise.then((res) => console.log(res))


// const promise = new Promise((resolve, reject) => {
// 	try {
// 		throw new Error()
// 		resolve('resolve');
// 	} catch (error) {
// 		reject('reject fsxgftcdh')
// 	}
// });
// promise.then((res) => console.log(res)).catch((e) => console.warn(e))

// promise
// 	.then{
// 		(res) => console.log{ res }
// 	return 'some'
// }
// 	.then((res2) => console.log(res2))
// 	.catch((e) => console.warn(e))
// 	.finally(() => console.log('finally'))


// const API = 'https://jsonplaceholder.typicode.com/todos';

// fetch(API, {
// 	method: 'GET' | 'POST' | 'DELETE' | 'PUT',
// 	body: 'some'
// })
// 	.then((res) => res.json())
// 	.then((data) => console.log(data));



// const todo = {
// 		"id": 5,
//     "title": "laboriosam",
//     "completed": false
// 	}
	
// 	fetch(API, {
// 	method: 'POST',
// 	body: JSON.stringify(todo)
// })
// 	.then((res) => res.json())
// 	.then((data) => console.log(data))


// const API = 'https://swapi.dev/api/planets/';


// fetch(API)
// 	.then((res) => res.json())
// 	.then((data) => {
// 		const planets = data.results;
// 		planets.map((item) => {
// 			console.log(data.results)
// 		})
// 		);
// 	}
		
// function generator() {
// 	yield 1;
// 	yield 2;
// 	return 3;
// };

// const res = generator();

// console.log(res.next())
// console.log(res.next())
// console.log(res.next())




// const API = 'https://swapi.dev/api/planets/';

// const getData = (url) => {
// 	return fetch(url)
// 		.then((res) => res.json()) // отримуєм дані
// 		.then((data) => data); // отримуєм дані
// }

// const renderPlanets = (planets) => {
// 	// document.body.innerHTML = '';    //підчищаєм, щоб виводилось замість предидущего
// 	planets.forEach(element => {
// 		const div = document.createElement('div');
// 		div.innerText = element.name;
// 		document.body.appendChild(div);
// 	});
// }

// async function* displayPlanets () {
// 	let url = API;
// 	while (url) {
// 		const data = await getData(url); // отримуєм дані з fetch
// 		url = data.next;
// 		console.log(data)
// 		renderPlanets(data.results);
// 		if (url) {
// 			const button = document.createElement('button');
// 			button.innerText = 'Next';
// 			button.onclick = () => getPage.next();
// 			document.body.appendChild(button);
// 		}
// 		yield
// 	}

// // const displayPlanets = async () => {
// // 	let planets = [];
// // 	let url = API;
// // 	while (url) {
// // 		const data = await getData(url);
// // 		url = data.next;
// // 		planets = [...planets, ...data.results];
// // 	}

// 	// console.log(planets)

// };

// // displayPlanets();
// // displayPlanets().next();

// const getPage = displayPlanets();
// getPage.next();


