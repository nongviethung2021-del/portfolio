// Toggle mobile menu
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


const closeMenuBtn = document.getElementById('close-menu-btn');
closeMenuBtn.addEventListener('click', () => {
    navLinks.classList.remove('active');
});