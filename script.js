// Smooth scrolling for internal nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault(); // only prevent default for internal anchors
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
        // external links work normally
    });
});