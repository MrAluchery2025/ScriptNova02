document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const statusMessage = document.getElementById('statusMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            // Hide any previous status messages
            statusMessage.classList.add('hidden');

            try {
                const formData = new FormData(contactForm);
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Success message
                    statusMessage.textContent = '✅ Thank you! Your message has been sent successfully.';
                    statusMessage.className = 'mb-4 p-4 rounded-lg bg-green-100 text-green-800 border border-green-300';
                    statusMessage.classList.remove('hidden');
                    contactForm.reset();
                } else {
                    // Error message
                    statusMessage.textContent = '❌ Oops! There was a problem sending your message. Please try again.';
                    statusMessage.className = 'mb-4 p-4 rounded-lg bg-red-100 text-red-800 border border-red-300';
                    statusMessage.classList.remove('hidden');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                statusMessage.textContent = '❌ Network error. Please check your connection and try again.';
                statusMessage.className = 'mb-4 p-4 rounded-lg bg-red-100 text-red-800 border border-red-300';
                statusMessage.classList.remove('hidden');
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            }
        });
    }
});
