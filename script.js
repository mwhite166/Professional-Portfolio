// Fade-in animation on scroll
const observers = document.querySelectorAll('.animate-fade-up');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-show');
        }
    });
});

observers.forEach(el => observer.observe(el));

// Mobile Navbar Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.onclick = () => {
    navLinks.classList.toggle('open');
};
