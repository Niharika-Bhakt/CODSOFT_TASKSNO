/* =========================
   QUIZ SELECTION
========================= */

const quizSelection = document.getElementById("quizSelection");
const startQuiz = document.getElementById("startQuiz");
const errorMessage = document.getElementById("errorMessage");


/* =========================
   START QUIZ
========================= */

startQuiz.addEventListener("click", function () {

    const selectedQuiz = quizSelection.value;


    /* CHECK QUIZ */

    if (selectedQuiz === "") {

        errorMessage.textContent =
            "Please choose a quiz first.";

        return;
    }


    /* SAVE SELECTED QUIZ */

    localStorage.setItem(
        "selectedQuiz", 
        quizSelection.value
    );
    window.location.href = "quiz.html";

    });