const mobileMenuOpen = document.querySelector('#hamburger');
const mobileMenuClose = document.querySelector('#close-hamburger');
const header = document.querySelector('#header');
const mobileMenu = document.querySelector('#mobile-menu');

mobileMenuOpen.addEventListener('click', () => {
  header.classList.toggle("mobile-menu-open");
  mobileMenu.classList.toggle("menu-open")
});

mobileMenuClose.addEventListener('click', () => {
  header.classList.toggle("mobile-menu-open");
  mobileMenu.classList.toggle("menu-open")
});