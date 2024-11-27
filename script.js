// script.js
const mobileMenu = document.getElementById('mobile-menu');
const navItems = document.querySelector('.nav-items');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navItems.classList.toggle('active');
});
