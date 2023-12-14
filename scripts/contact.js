document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submit').addEventListener('click', submitForm);
});

const submitForm = () => {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    let isValid;

    if (name.value == '') {
        name.nextElementSibling.textContent = 'This field is required';
    } else {
        name.nextElementSibling.textContent = '';
    }

    if (email.value == '') {
        email.nextElementSibling.textContent = 'This field is required';
    } else {
        email.nextElementSibling.textContent = '';
    }

    if (message.value == '') {
        message.nextElementSibling.textContent = 'This field is required';
    } else {
        message.nextElementSibling.textContent = '';
    }

    if (name.value != '' && email.value != '' && message.value != '') {
        isValid = true;
    }

    if (isValid) {
        document.getElementById("contact-form").reset();
        $("#ontact-form").submit();
        name.nextElementSibling.textContent = '';
        email.nextElementSibling.textContent = '';
        message.nextElementSibling.textContent = '';
        $(".alert-success").slideToggle("slow").delay(2000).slideToggle("slow");
    }
}