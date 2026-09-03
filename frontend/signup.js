const signupForm = document.getElementById("signupForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirmPassword");

const terms = document.getElementById("terms");
const signupMessage = document.getElementById("signupMessage");

const togglePassword = document.getElementById("togglePassword");
const toggleConfirm = document.getElementById("toggleConfirm");


/* Show / Hide Password */

togglePassword.addEventListener("click", () => {

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        togglePassword.textContent = "Show";
    }

});


/* Show / Hide Confirm Password */

toggleConfirm.addEventListener("click", () => {

    if (confirmInput.type === "password") {
        confirmInput.type = "text";
        toggleConfirm.textContent = "Hide";
    } else {
        confirmInput.type = "password";
        toggleConfirm.textContent = "Show";
    }

});


/* Signup */

signupForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmInput.value;


    /* Password length */

    if (password.length < 6) {

        showMessage(
            "Password must contain at least 6 characters.",
            "error"
        );

        return;
    }


    /* Password match */

    if (password !== confirmPassword) {

        showMessage(
            "Passwords do not match.",
            "error"
        );

        return;
    }


    /* Terms */

    if (!terms.checked) {

        showMessage(
            "Please accept the Terms & Conditions.",
            "error"
        );

        return;
    }


    /* Check existing account */

    const existingUser = JSON.parse(
        localStorage.getItem("quizVerseUser")
    );

    if (
        existingUser &&
        existingUser.email.toLowerCase() === email.toLowerCase()
    ) {

        showMessage(
            "An account with this email already exists.",
            "error"
        );

        return;
    }


    /* Create user */

    const user = {
        name: name,
        email: email,
        password: password
    };


    /* Save account */

    localStorage.setItem(
        "quizVerseUser",
        JSON.stringify(user)
    );


    /* Success */

    showMessage(
        "Account created successfully! 🎉",
        "success"
    );


    /* Go to Login */

    setTimeout(() => {
        window.location.href = "login.html";
    }, 1000);

});


/* Message */

function showMessage(text, type) {

    signupMessage.textContent = text;
    signupMessage.className = "message " + type;

}


/* Clickable Benefits */


/* Challenge Yourself */

function goToExplore() {
    window.location.href = "index.html#explore";
}


/* Track Progress */

function goToProgress() {
    window.location.href = "index.html#leaderboard";
}


/* Create & Share */

function goToCreate() {
    window.location.href = "index.html#create";
}