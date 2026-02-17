const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);


document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});


let hasScrolled = false;
window.addEventListener('scroll', () => {
    if (!hasScrolled && window.scrollY > 100) {
        hasScrolled = true;
        document.body.classList.add('scrolled');
    }
});


const timelines = document.querySelectorAll('.timeline');
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.scrollY;
            
            
            timelines[0].style.transform = `translateY(${scrolled * 0.05}px)`;
            timelines[1].style.transform = `translateY(${scrolled * 0.02}px)`;
            timelines[2].style.transform = `translateY(${scrolled * 0.08}px)`;
            
            ticking = false;
        });
        ticking = true;
    }
});
