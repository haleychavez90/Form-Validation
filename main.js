// Confirm form validation script is linked
    const form = document.getElementById('registrationForm');
    form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    let isValid = true;

// Clear error messages
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

// Confirm username
    const username = document.getElementById('username').value;
    if (username.length < 3) {
        showError('username', 'Username must be at least 3 characters long.');
        isValid = false;
        }
    
// Confirm email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        showError('email', 'Please enter a valid email address.');
        isValid = false;
        }
    
// Confirm password
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        showError('password', 'Password must be at least 6 characters long.');
        isValid = false;
        }
    
    if (isValid) {
        alert('Form submitted successfully!');
        this.reset();
        }

// Checkbox
    const terms = document.getElementById('terms').checked;
    if (!terms) {
        showError('terms', 'You must agree to the terms and conditions.');
        isValid = false;
        }   
    });

    // Sports Checkbox
    const sport = document.getElementById('sport').checked;
    if (!sport) {
        showError('sport', 'You must agree to the favorite sports.');
        isValid = false;
        }
    
    
// Errors
    function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorDiv = field.nextElementSibling;
    errorDiv.textContent = message;
    }