const hamburgerElm = document.querySelector('.hamburger');
    const navElm = document.querySelector('.nav');


hamburgerElm.addEventListener('click', () => {
	hamburgerElm.classList.toggle('is-active');
	navElm.classList.toggle('is-active');
});