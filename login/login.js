
// Functions for showing and hiding forms
function showLoginForm() {
    hideAllForms();
    document.getElementById("userLoginForm").style.display = "block";
}

function showSignupForm() {
    hideAllForms();
    document.getElementById("userSignupForm").style.display = "block";
}

function showAdminLoginForm() {
    hideAllForms();
    document.getElementById("adminLoginForm").style.display = "block";
}

function showAdminSignupForm() {
    hideAllForms();
    document.getElementById("adminSignupForm").style.display = "block";
}

function hideAllForms() {
    var forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.style.display = 'none';
    });
}

// Placeholder functions for user and admin login/signup
function userLogin(event) {
    event.preventDefault();
    alert('User login functionality placeholder.');
    // Implement actual user login logic here
}

function userSignup(event) {
    event.preventDefault();
    alert('User signup functionality placeholder.');
    // Implement actual user signup logic here
}

function adminLogin(event) {
    event.preventDefault();
    alert('Admin login functionality placeholder.');
    // Implement actual admin login logic here
}

function adminSignup(event) {
    event.preventDefault();
    alert('Admin signup functionality placeholder.');
    // Implement actual admin signup logic here
}

// script.js
document.addEventListener("DOMContentLoaded", function() {
    var openFileButton = document.getElementById('UserLogin');

    openFileButton.addEventListener("click", function() {
        // Change the file path based on your directory structure
        window.location.href = "../employeeInfo/employee.html";
    });
});
