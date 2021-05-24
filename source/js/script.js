const link = document.querySelector(".user-nav__burger");
const modal = document.querySelector(".user-nav__list");
const nav = document.querySelector('.page-nav');
const toggle = document.querySelector(".user-nav__line");

nav.classList.remove('page-nav--nojs');

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.toggle("user-nav__list--active");
});

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  link.classList.toggle("user-nav__burger--active");
});

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  toggle.classList.toggle("user-nav__line--active");
});
