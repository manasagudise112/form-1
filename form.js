document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    clearErrors();
    let isValid = true;

    // Validate full name
    const fullName = document.getElementById('fullName').value;
    if (fullName.length < 5) {
        showError('nameError', 'Name must not be less than 5 characters');
        isValid = false;
    }

    // Validate email
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
        showError('emailError', 'Enter a valid email');
        isValid = false;
    }

    // Validate phone number
    const phone = document.getElementById('phone').value;
    if (phone === '123456789' || phone.length !== 10 || isNaN(phone)) {
        showError('phoneError', 'Enter a valid 10-digit phone number');
        isValid = false;
    }

    // Validate password
    const password = document.getElementById('password').value;
    const fullNameLower = fullName.toLowerCase();
    if (password === 'password' || password.toLowerCase() === fullNameLower || password.length < 8) {
        showError('passwordError', 'Password is not strong');
        isValid = false;
    }

    // Validate confirm password
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match');
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        // Code to submit the form
    }
}

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function clearErrors() {
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';
}
