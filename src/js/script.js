import "/src/sass/style.scss";

let openNavButton = document.querySelector('.main-header__open-nav-button');
let mainNav = document.querySelector('.main-nav');
let closeNavButton = document.querySelector('.main-nav__close-button');

openNavButton.addEventListener('click', () => {
    mainNav.classList.add('openNav');
    mainNav.classList.remove('closeNav');
});

closeNavButton.addEventListener('click', () => {
    mainNav.classList.remove('openNav');
    mainNav.classList.add('closeNav');
});