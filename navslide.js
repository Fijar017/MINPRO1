let menuToggle = document.querySelector('.menu-toggle input');
let nav = document.querySelector('.navigation');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});