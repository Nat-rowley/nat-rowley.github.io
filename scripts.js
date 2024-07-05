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
            errorMessages.push(labelText);
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
        formSummary.innerHTML = '<i class="ph-fill ph-check-circle"></i> <strong>Contact Form Successful.</strong> Thanks for contacting me.';

        this.submit();
    } else {
        formSummary.classList.remove('success-summary');
        formSummary.classList.add('error-summary');

        let errorMessage = '<strong>Contact Form Failed.</strong> ';
        if (errorMessages.length > 1) {
            const lastError = errorMessages.pop();
            errorMessage += `${errorMessages.join(', ')} and ${lastError} are required.`;
        } else {
            errorMessage += `${errorMessages[0]} is required.`;
        }

        

        formSummary.innerHTML = `<i class="ph-fill ph-warning"></i> ${errorMessage}`;
    }
});
