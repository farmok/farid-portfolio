var nav = document.querySelector('.js-nav');
var container = document.querySelector('.c-main');

nav.addEventListener('click', function card_handler(e){
	e.preventDefault();
	if (!container.classList.contains('c-main--is-open')) {
		container.classList.add('c-main--is-open');
	} else if (e.target && e.target.classList.contains('c-menu__button')) {
		container.classList.remove('c-main--is-open');
	}
});