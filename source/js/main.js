const openButton = document.querySelector('.header-btn-open');
const closeButton = document.querySelector('.header-btn-close');
const navMainList = document.querySelector('.header__website-pages');
const navButton = document.querySelector('.header__logo-button');
const headerLogoCloseList = document.querySelector('.header__logo--close-list');
const headerLogo = document.querySelector('.header__logo');

navButton.addEventListener('click', function () {
  if (closeButton.classList.contains('hidden')) {
    closeButton.classList.remove('hidden');
    navMainList.classList.remove('hidden');
    headerLogo.classList.remove('header__logo--close-list');
    openButton.classList.add('hidden')
  } else {
    closeButton.classList.add('hidden');
    navMainList.classList.add('hidden');
    headerLogo.classList.add('header__logo--close-list');
    openButton.classList.remove('hidden')
  }
});
