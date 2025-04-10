// Navbar scroll handling
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
const loadingOverlay = document.querySelector('.loading-overlay');

// Hide loading overlay when page is loaded
window.addEventListener('load', () => {
    loadingOverlay.style.opacity = '0';
    setTimeout(() => {
        loadingOverlay.style.display = 'none';
    }, 500);
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add/remove scrolled class based on scroll position
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Add/remove hidden class based on scroll direction
    if (currentScroll > lastScrollTop && currentScroll > 100) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});