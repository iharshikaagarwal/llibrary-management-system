// script.js
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // In a real application, you would perform authentication here.
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example: Check if the username and password match.
    if (username === 'admin' && password === 'password') {
        // Redirect to the dashboard or library management system.
        alert('Login successful! Redirecting...');
        // You can use window.location.href to redirect to another page.
        // Example: window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password. Please try again.');
        // Clear the password field.
        document.getElementById('password').value = '';
    }
});
