import { getData } from "./utils/utils.js";

import { API } from "./utils/utils.js";

const postsWrapper = document.body.querySelector('#postsWrapper');


const createPostElements = (post) => {
	const link = document.createElement('a');
	link.href = '/post.html?id=' + post.id;
	link.classList.add('card');
	link.classList.add('w-25');
	const div = document.createElement('div');
	div.classList.add('card-body');
	const h5 = document.createElement('h5');
	h5.classList.add('card-title');
	h5.innerText = post.title;
	const p = document.createElement('p');
	p.classList.add('card-text');
	p.innerText = post.body;

	div.appendChild(h5);
	div.appendChild(p);
	link.appendChild(div);

	return link;
};

const getPosts = async () => {
	const data = await getData(API + 'posts'); 
	// console.log(data)
	data.forEach(element => {
		postsWrapper.appendChild(createPostElements(element))
	});
		
}
getPosts();



	

