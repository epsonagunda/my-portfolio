// Toggle mobile menu
const toggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav-menu');

if (toggle && nav) {
    toggle.addEventListener('click', () => {
        nav.classList.toggle('show');
    });
}
