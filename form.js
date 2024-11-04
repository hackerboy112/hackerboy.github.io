function toggleContactForm() {
    const contactForm = document.getElementById('contactForm');
    const thankYouMessage = document.getElementById('thankYouMessage');
    contactForm.style.display = contactForm.style.display === 'none' || contactForm.style.display === '' ? 'block' : 'none';
    thankYouMessage.style.display = 'none';
}

function handleSubmit(event) {
    event.preventDefault();
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('thankYouMessage').style.display = 'block';
}