/* =========================
   GET PUBLISHED QUIZ
========================= */

const quizData = localStorage.getItem(
    "quizVerseCreatedQuiz"
);


if (!quizData) {

    document.getElementById("quizTitle").textContent =
        "No Quiz Published Yet";

    document.getElementById("quizDescription").textContent =
        "Create a quiz first and publish it to see it here.";

} else {

    const quiz = JSON.parse(quizData);


    /* =========================
       QUIZ INFORMATION
    ========================= */

    document.getElementById("quizTitle").textContent =
        quiz.title || "Untitled Quiz";


    document.getElementById("quizDescription").textContent =
        quiz.description ||
        "Challenge yourself and test your knowledge.";


    document.getElementById("quizCategory").textContent =
        quiz.category || "General";


    document.getElementById("quizDifficulty").textContent =
        quiz.difficulty || "Medium";


    document.getElementById("quizTheme").textContent =
        quiz.theme || "QuizVerse Theme";


    document.getElementById("quizCount").textContent =
        quiz.questions
            ? quiz.questions.length
            : 0;


    /* =========================
       CREATOR INFORMATION
    ========================= */

    document.getElementById("quizCreator").textContent =
        quiz.creator || "QuizVerse Creator";


    document.getElementById("quizTeam").textContent =
        quiz.team || "QuizVerse Team";


    document.getElementById("quizDate").textContent =
        quiz.createdAt || "Today";


    /* =========================
       QUESTIONS
    ========================= */

    const questionsList =
        document.getElementById("questionsList");


    questionsList.innerHTML = "";


    const questions = quiz.questions || [];


    if (questions.length === 0) {

        questionsList.innerHTML = `
            <div class="question-card">
                <h3>No questions available.</h3>
            </div>
        `;

    } else {

        questions.forEach((item, index) => {

            const card =
                document.createElement("div");


            card.className = "question-card";


            /* Get options */

            const options = item.options || {};


            card.innerHTML = `

                <div class="question-number">
                    QUESTION ${String(index + 1).padStart(2, "0")}
                </div>


                <h3>
                    ${item.question || "Question not available"}
                </h3>


                <div class="options">

                    <div class="option">
                        <strong>A.</strong>
                        ${options.A || ""}
                    </div>


                    <div class="option">
                        <strong>B.</strong>
                        ${options.B || ""}
                    </div>


                    <div class="option">
                        <strong>C.</strong>
                        ${options.C || ""}
                    </div>


                    <div class="option">
                        <strong>D.</strong>
                        ${options.D || ""}
                    </div>

                </div>

            `;


            questionsList.appendChild(card);

        });

    }

}


/* =========================
   START QUIZ
========================= */

function startQuiz() {

    const quiz = localStorage.getItem(
        "quizVerseCreatedQuiz"
    );


    if (!quiz) {

        alert("No quiz available.");

        return;
    }


    localStorage.setItem(
        "quizToAttempt",
        quiz
    );


    window.location.href = "quiz.html";
}