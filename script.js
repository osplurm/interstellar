// Scroll animation for smooth transitions
window.addEventListener('scroll', function() {
    const title = document.querySelector('#interstellar-title');
    const scrollPos = window.scrollY;
    
    if (scrollPos > 150) {
        title.style.transform = 'translateY(-20px)';
        title.style.opacity = '0.9';
    } else {
        title.style.transform = 'translateY(0)';
        title.style.opacity = '1';
    }
});
