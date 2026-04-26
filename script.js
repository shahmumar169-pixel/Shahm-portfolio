// Toggle menu icon and navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // Remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Form Submission Logic
const contactForm = document.getElementById('contactForm');
const hiddenIframe = document.getElementById('hidden_iframe');

if (contactForm && hiddenIframe) {
    let isSubmitting = false;

    contactForm.addEventListener('submit', () => {
        isSubmitting = true;
        
        // Change button state
        const btn = contactForm.querySelector('button');
        btn.textContent = 'Sending...';
    });

    hiddenIframe.addEventListener('load', () => {
        if (isSubmitting) {
            const btn = contactForm.querySelector('button');
            const originalText = 'Send Message';
            
            btn.textContent = 'Message Sent!';
            btn.style.background = '#10b981'; // Green success color
            btn.style.boxShadow = '0 0 1rem #10b981';
            
            contactForm.reset();
            isSubmitting = false;
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
                btn.style.boxShadow = '';
            }, 3000);
        }
    });
}
