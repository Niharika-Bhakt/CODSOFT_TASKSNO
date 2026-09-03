const form = document.getElementById("forgotPasswordForm");

const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");

const resetButton = document.getElementById("resetButton");

const successMessage = document.getElementById("successMessage");
const sentEmail = document.getElementById("sentEmail");


function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


emailInput.addEventListener("input", function () {
    emailError.textContent = "";
});


form.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = emailInput.value.trim();

    emailError.textContent = "";


    if (email === "") {

        emailError.textContent =
            "Please enter your email address.";

        emailInput.focus();

        return;
    }


    if (!isValidEmail(email)) {

        emailError.textContent =
            "Please enter a valid email address.";

        emailInput.focus();

        return;
    }


    resetButton.classList.add("loading");

    resetButton.innerHTML = `
        <i class="ri-loader-4-line"></i>
        <span>Sending...</span>
    `;


    /*
        Demo reset process.

        Real password reset ke liye
        backend API connect kar sakte hain.
    */

    setTimeout(function () {

        sentEmail.textContent = email;

        form.style.display = "none";

        successMessage.classList.add("show");

        resetButton.classList.remove("loading");

    }, 1200);

});


/* Back to Login */

document
    .querySelector(".back-login")
    .addEventListener("click", function (event) {

        event.preventDefault();

        window.location.href = "login.html";

    });