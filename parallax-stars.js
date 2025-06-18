// Parallax effect for background stars
// Moves the .hero::before stars layer at a different speed on scroll

window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
    const offsetY = scrollY * 0.5; // increased for stronger parallax effect
    document.documentElement.style.setProperty('--stars-parallax', `${-offsetY}px`);
});
