
// Get the navbar element
const navbar = document.getElementById('navbar');

// Add an event listener for scroll to detect scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');  // Add the 'scrolled' class when scrolled
    } else {
        navbar.classList.remove('scrolled');  // Remove the 'scrolled' class when at the top
    }
});

