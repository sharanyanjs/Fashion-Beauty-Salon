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
            // You can add actual login logic here (API call etc)
            // For now, just redirect
            window.location.href = 'shop.html';
        }
    });
});
