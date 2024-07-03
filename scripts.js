document.getElementById('contactForm').addEventListener('submit', function(event) {
event.preventDefault();

const inputs = document.querySelectorAll('#contactForm input[aria-required="true"], #contactForm textarea[aria-required="true"]');
let isValid = true;

inputs.forEach(function(input) {
    const errorElement = document.getElementById(input.getAttribute('aria-describedby'));

    if (input.value.trim() === '') {
        input.setAttribute('aria-invalid', 'true');
        errorElement.textContent = input.previousElementSibling.textContent.trim() + ' is required';
        isValid = false;
    } else {
        input.removeAttribute('aria-invalid');
        errorElement.textContent = '';
    }
});

if (isValid) {
    this.submit();

}

});