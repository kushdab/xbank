// Mobile Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Close mobile menu if open
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Form Handling
document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const message = document.getElementById('form-message');
    
    if (email) {
        message.textContent = 'Thank you for signing up! We’ll send you more information soon.';
        message.style.color = '#0a0a1a';
        document.getElementById('signup-form').reset();
    } else {
        message.textContent = 'Please enter a valid email address.';
        message.style.color = '#ff5555';
    }
});
