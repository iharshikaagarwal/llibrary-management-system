// script.js
document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // In a real application, you would perform server-side validation and database insertion here.
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Example: Check if the password and confirm password match.
    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        // Clear the password and confirm password fields.
        document.getElementById('password').value = '';
        document.getElementById('confirm-password').value = '';
    } else {
        // The signup is successful. You can redirect to a login page or perform other actions.
        alert('Signup successful! Redirecting to login page...');
        // You can use window.location.href to redirect to another page.
        // Example: window.location.href = 'login.html';
    }
});
