var mainNavList = document.querySelector('.main-nav__list');
var mainNavToggler = document.querySelector('.main-nav__toggler');
var mainLogo = document.querySelector('.page-header__logo')

mainNavToggler.classList.remove('main-nav__toggler--nojs');
mainNavList.classList.toggle('main-nav__list--closed');
mainNavList.classList.toggle('main-nav__list--opened');
mainNavToggler.classList.toggle('main-nav__toggler--open');
mainNavToggler.classList.toggle('main-nav__toggler--close');
mainLogo.classList.remove('page-header__logo--filled');

mainNavToggler.addEventListener('click', function () {
  mainNavList.classList.toggle('main-nav__list--closed');
  mainNavList.classList.toggle('main-nav__list--opened');
  mainNavToggler.classList.toggle('main-nav__toggler--open');
  mainNavToggler.classList.toggle('main-nav__toggler--close');
  mainLogo.classList.toggle('page-header__logo--filled');
});
