document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const inputs = document.querySelectorAll('#contactForm input[aria-required="true"], #contactForm textarea[aria-required="true"]');
    let isValid = true;

    inputs.forEach(function(input) {
        const errorElement = document.getElementById(input.getAttribute('aria-describedby'));

        console.log('Checking input:', input.id);

        if (input.value.trim() === '') {
            input.setAttribute('aria-invalid', 'true');
            errorElement.textContent = input.previousElementSibling.textContent.trim() + ' is required';
            isValid = false;
            console.log('Invalid input:', input.id);
        } else {
            input.removeAttribute('aria-invalid');
            errorElement.textContent = '';
        }
    });

    if (isValid) {
        console.log('Form is valid, submitting...');
        this.submit();
    } else {
        console.log('Form is invalid, not submitting...');
    }
});
