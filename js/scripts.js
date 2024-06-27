document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation for contact form
    const contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
        } else {
            alert('Form submitted successfully!');
            // Here you can add code to send form data to your email or server
            contactForm.reset();
        }
    });

    // Modal for project details
    const projectLinks = document.querySelectorAll('.projects ul li');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    document.body.appendChild(modal);

    projectLinks.forEach(project => {
        project.addEventListener('click', function() {
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-button">&times;</span>
                    <h2>${project.textContent}</h2>
                    <p>Details about ${project.textContent}</p>
                </div>
            `;
            modal.style.display = 'block';

            // Close modal
            document.querySelector('.close-button').addEventListener('click', function() {
                modal.style.display = 'none';
            });

            // Close modal on outside click
            window.addEventListener('click', function(event) {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
        });
    });
});
