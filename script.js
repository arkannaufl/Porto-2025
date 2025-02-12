// Responsive Navbar
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

menuBtn.addEventListener('click', () => {
    // Toggle menu visibility with animation
    mobileMenu.classList.toggle('scale-y-0');
    mobileMenu.classList.toggle('opacity-0');
    mobileMenu.classList.toggle('scale-y-100');
    mobileMenu.classList.toggle('opacity-100');

    // Toggle icons
    menuIcon.classList.toggle('opacity-0');
    closeIcon.classList.toggle('opacity-0');

    // Rotate hamburger button
    menuBtn.classList.toggle('rotate-90');
});


// Smooth Scroll
const scrollLinks = document.querySelectorAll('nav a[href^="#"]');
for (let scrollLink of scrollLinks) {
    scrollLink.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(scrollLink.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}
