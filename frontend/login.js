const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

const forgotPassword = document.getElementById("forgotPassword");


/* Show / Hide Password */

togglePassword.addEventListener("click", () => {

    if (password.type === "password") {
        password.type = "text";
        togglePassword.textContent = "Hide";
    } else {
        password.type = "password";
        togglePassword.textContent = "Show";
    }

});


/* Login */

loginForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const email = document
        .getElementById("email")
        .value
        .trim();

    const passwordValue = password.value;

    const savedUser = JSON.parse(
        localStorage.getItem("quizVerseUser")
    );


    /* Account not found */

    if (!savedUser) {

        showMessage(
            "No account found. Please create an account first.",
            "error"
        );

        return;
    }


    /* Check email & password */

    const correctEmail =
        email.toLowerCase() === savedUser.email.toLowerCase();

    const correctPassword =
        passwordValue === savedUser.password;


    if (!correctEmail || !correctPassword) {

        showMessage(
            "Incorrect email or password. Please try again.",
            "error"
        );

        return;
    }


    /* Save Login */

    localStorage.setItem(
        "quizVerseLoggedIn",
        "true"
    );

    localStorage.setItem(
        "quizVerseCurrentUser",
        JSON.stringify({
            name: savedUser.name,
            email: savedUser.email
        })
    );


    showMessage(
        "Welcome back! Login successful ✨",
        "success"
    );


    /* Go Home */

    setTimeout(() => {
        window.location.href = "index.html";
    }, 800);

});


/* Message Function */

function showMessage(text, type) {

    loginMessage.textContent = text;
    loginMessage.className = "message " + type;

}
