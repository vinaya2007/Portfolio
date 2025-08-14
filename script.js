document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('Contact-name').value.trim();

    if (name.length === 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }

    if (!name.match(/^[A-Za-z]+ [A-Za-z]+$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }

    nameError.innerHTML = ''; 
    return true;
}


function validatePhone() {
    var phone = document.getElementById('Contact-phone').value;

    if (phone.length === 0) {
        phoneError.innerHTML = 'Phone number is required';
        return false;
    }

    if (!/^\d+$/.test(phone)) {
        phoneError.innerHTML = 'Only digits are allowed';
        return false;
    }

    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone number must be exactly 10 digits';
        return false;
    }

    phoneError.innerHTML = ''; 
    return true;
}

function validateEmail() {
    var email = document.getElementById('Contact-email').value;

    if (email.length === 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email.match(emailPattern)) {
        emailError.innerHTML = 'Email is invalid';
        return false;
    }

    return true;
}

function validateMessage() {
    var message = document.getElementById('Contact-message').value.trim();
    var required = 30;
    var left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + ' more characters required';
        return false;
    }

    messageError.innerHTML = ''; 
    return true;
}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function () { submitError.style.display = 'none'; }, 3000);
        return false;
    }
    alert("Form submitted");
    return true;
}