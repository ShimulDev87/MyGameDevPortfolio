// Scroll Animations
const animatedElements = document.querySelectorAll('.animate');

function animateOnScroll() {
    animatedElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', animateOnScroll);

// Initialize animation styles
animatedElements.forEach((element) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
});

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
});
