document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const inputs = document.querySelectorAll('#contactForm input[aria-required="true"], #contactForm textarea[aria-required="true"]');
    let isValid = true;
    const errorMessages = [];

    inputs.forEach(function(input) {
        const errorElement = document.getElementById(input.getAttribute('aria-describedby'));
        const labelText = input.previousElementSibling.querySelector('.label-text').textContent.trim();

        if (input.value.trim() === '') {
            input.setAttribute('aria-invalid', 'true');
            errorElement.textContent = labelText + ' is required';
            errorMessages.push(labelText + ' is required');
            isValid = false;
        } else {
            input.removeAttribute('aria-invalid');
            errorElement.textContent = '';
        }
    });

    const formSummary = document.getElementById('form-summary');
    formSummary.innerHTML = '';

    if (isValid) {
        formSummary.classList.remove('error-summary');
        formSummary.classList.add('success-summary');
        formSummary.innerHTML = '<i class="ph-fill ph-check-circle"></i> Contact Form Successful! Thanks for contacting me.';

        this.submit();
    } else {
        formSummary.classList.remove('success-summary');
        formSummary.classList.add('error-summary');
        formSummary.innerHTML = '<i class="ph-fill ph-warning"></i> Contact Form Failed. ' + errorMessages.join(' ');
    }
});
