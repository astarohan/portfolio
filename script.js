// Active navigation link highlighting based on current page
const navLinks = document.querySelectorAll('.nav-link');
const currentPage = window.location.pathname.split('/').pop(); // Get the filename of the current page

navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage || (currentPage === 'index.html' && linkHref === 'index.html')) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// Animate skill bars on scroll (only relevant for skills page)
const skillBars = document.querySelectorAll('.skill-progress');

function animateSkillBars() {
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        if (isElementInViewport(bar)) {
            bar.style.width = width + '%';
        }
    });
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Run once on page load (only relevant for skills page now)
window.addEventListener('load', animateSkillBars);

// Run on scroll (only relevant for skills page now)
window.addEventListener('scroll', animateSkillBars);