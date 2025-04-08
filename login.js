// login.js

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.login-form');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault(); // prevent form from actually submitting

        const email = document.querySelector('input[type="text"]').value;
        const password = document.querySelector('input[type="password"]').value;

        if (email === '' || password === '') {
            alert('Please fill in all fields');
        } else {
            // Scroll to the products section instead of redirecting
            const productsSection = document.getElementById('products');
            productsSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
