const openButton = document.querySelector('.header__btn-open');
const closeButton = document.querySelector('.header__btn-close');
const navMainList = document.querySelector('.header__website-pages');
const navButton = document.querySelector('.header__logo-button');
const headerLogoCloseList = document.querySelector('.header__logo--close-list');
const headerLogo = document.querySelector('.header__logo');
const headerBack = document.querySelector('.header__back-color');


navButton.addEventListener('click', function () {
  if (closeButton.classList.contains('header__hidden')) {
    closeButton.classList.remove('header__hidden');
    navMainList.classList.remove('header__hidden');
    headerLogo.classList.remove('header__logo--close-list');
    headerBack.classList.remove('header__back-color--absent');
    openButton.classList.add('header__hidden')
  } else {
    closeButton.classList.add('header__hidden');
    navMainList.classList.add('header__hidden');
    headerLogo.classList.add('header__logo--close-list');
    headerBack.classList.add('header__back-color--absent');
    openButton.classList.remove('header__hidden')
  }
});
