window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show-menu');
});

const dynamicText = document.getElementById("dynamic-text");
const messages = [
    "Interstellar, the best executor after Hyperion",
    
];
let messageIndex = 0;

setInterval(() => {
    messageIndex = (messageIndex + 1) % messages.length;
    dynamicText.innerText = messages[messageIndex];
}, 50);
