import "/src/sass/style.scss";

let openNav = document.querySelector('.main-header__open-nav');
let mainNav = document.querySelector('.main-nav');
let closeNav = document.querySelector('.main-nav__close');

openNav.addEventListener('click', () => {
    openNav.classList.add('visibtleButtonNav');
    mainNav.classList.add('navVisible');
});

closeNav.addEventListener('click', () => {
    openNav.classList.remove('visibtleButtonNav');
    mainNav.classList.remove('navVisible');
});