let selectedQuiz =
    localStorage.getItem("selectedQuiz");

let currentQuestions = [];
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const quizTitle =
    document.getElementById("quizTitle");

const scoreElement =
    document.getElementById("score");

const questionNumber =
    document.getElementById("questionNumber");

const totalQuestions =
    document.getElementById("totalQuestions");

const questionIndex =
    document.getElementById("questionIndex");

const questionText =
    document.getElementById("questionText");

const optionA =
    document.getElementById("optionA");

const optionB =
    document.getElementById("optionB");

const optionC =
    document.getElementById("optionC");

const optionD =
    document.getElementById("optionD");

const optionButtons =
    document.querySelectorAll(".option");

const nextButton =
    document.getElementById("nextButton");

const feedback =
    document.getElementById("feedback");

const progressBar =
    document.getElementById("progressBar");

const progressPercent =
    document.getElementById("progressPercent");

const questionCard =
    document.getElementById("questionCard");

const resultCard =
    document.getElementById("resultCard");

const finalScore =
    document.getElementById("finalScore");

const percentage =
    document.getElementById("percentage");

const resultTitle =
    document.getElementById("resultTitle");

const resultMessage =
    document.getElementById("resultMessage");

const retryButton =
    document.getElementById("retryButton");


function loadQuiz() {

    if (!selectedQuiz) {

        alert("Please choose a quiz first.");

        window.location.href =
            "quiz-select.html";

        return;
    }


    if (
        typeof quizData === "undefined" ||
        !quizData[selectedQuiz]
    ) {

        alert(
            "Quiz not found: " +
            selectedQuiz
        );

        window.location.href =
            "quiz-select.html";

        return;
    }


    currentQuestions =
        quizData[selectedQuiz];


    if (
        !Array.isArray(currentQuestions) ||
        currentQuestions.length === 0
    ) {

        alert("No questions available.");

        window.location.href =
            "quiz-select.html";

        return;
    }


    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;


    if (quizTitle) {

        quizTitle.textContent =
            selectedQuiz;
    }


    if (totalQuestions) {

        totalQuestions.textContent =
            currentQuestions.length;
    }


    if (scoreElement) {

        scoreElement.textContent =
            "0";
    }


    if (questionCard) {

        questionCard.style.display =
            "block";
    }


    if (resultCard) {

        resultCard.style.display =
            "none";
    }


    showQuestion();
}


function showQuestion() {

    const item =
        currentQuestions[currentQuestion];


    if (!item) {

        showResult();

        return;
    }


    selectedAnswer = null;


    const number =
        currentQuestion + 1;


    if (questionNumber) {

        questionNumber.textContent =
            number;
    }


    if (questionIndex) {

        questionIndex.textContent =
            String(number).padStart(2, "0");
    }


    if (questionText) {

        questionText.textContent =
            item.q;
    }


    if (optionA) {

        optionA.textContent =
            item.a[0] || "";
    }


    if (optionB) {

        optionB.textContent =
            item.a[1] || "";
    }


    if (optionC) {

        optionC.textContent =
            item.a[2] || "";
    }


    if (optionD) {

        optionD.textContent =
            item.a[3] || "";
    }


    optionButtons.forEach(button => {

        button.classList.remove(
            "selected",
            "correct",
            "wrong"
        );

        button.disabled = false;

    });


    if (feedback) {

        feedback.textContent = "";

        feedback.className =
            "feedback";
    }


    if (nextButton) {

        nextButton.disabled = true;


        if (
            currentQuestion ===
            currentQuestions.length - 1
        ) {

            nextButton.textContent =
                "Finish Quiz";

        } else {

            nextButton.textContent =
                "Next Question →";
        }
    }


    const percent =
        Math.round(
            (number /
                currentQuestions.length) *
            100
        );


    if (progressBar) {

        progressBar.style.width =
            percent + "%";
    }


    if (progressPercent) {

        progressPercent.textContent =
            percent + "%";
    }

}


optionButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            selectedAnswer =
                this.dataset.option;


            optionButtons.forEach(btn => {

                btn.classList.remove(
                    "selected"
                );

            });


            this.classList.add(
                "selected"
            );


            if (nextButton) {

                nextButton.disabled =
                    false;
            }

        }
    );

});


if (nextButton) {

    nextButton.addEventListener(
        "click",
        function () {

            if (!selectedAnswer) {

                return;
            }


            const item =
                currentQuestions[currentQuestion];


            if (
                selectedAnswer ===
                item.answer
            ) {

                score++;
            }


            if (scoreElement) {

                scoreElement.textContent =
                    score;
            }


            if (
                currentQuestion ===
                currentQuestions.length - 1
            ) {

                showResult();

                return;
            }


            currentQuestion++;

            showQuestion();

        }
    );

}


function showResult() {

    if (questionCard) {

        questionCard.style.display =
            "none";
    }


    if (resultCard) {

        resultCard.style.display =
            "block";
    }


    const total =
        currentQuestions.length;


    const percent =
        Math.round(
            (score / total) * 100
        );


    if (finalScore) {

        finalScore.textContent =
            score +
            " / " +
            total;
    }


    if (percentage) {

        percentage.textContent =
            percent + "%";
    }


    if (resultTitle) {

        if (percent === 100) {

            resultTitle.textContent =
                "Perfect Score! 🏆";

        } else if (percent >= 80) {

            resultTitle.textContent =
                "Excellent! 🔥";

        } else if (percent >= 60) {

            resultTitle.textContent =
                "Great Job! 👏";

        } else if (percent >= 40) {

            resultTitle.textContent =
                "Good Attempt! 💜";

        } else {

            resultTitle.textContent =
                "Keep Learning! 🌱";
        }

    }


    if (resultMessage) {

        if (percent === 100) {

            resultMessage.textContent =
                "Amazing! You answered every question correctly.";

        } else if (percent >= 80) {

            resultMessage.textContent =
                "Fantastic performance! You really know your stuff.";

        } else if (percent >= 60) {

            resultMessage.textContent =
                "Great attempt! Keep challenging yourself.";

        } else if (percent >= 40) {

            resultMessage.textContent =
                "Keep practicing and try again.";

        } else {

            resultMessage.textContent =
                "Don't give up. Try again!";
        }

    }


    if (progressBar) {

        progressBar.style.width =
            "100%";
    }


    if (progressPercent) {

        progressPercent.textContent =
            "100%";
    }

}


if (retryButton) {

    retryButton.addEventListener(
        "click",
        function () {

            currentQuestion = 0;
            score = 0;
            selectedAnswer = null;


            if (scoreElement) {

                scoreElement.textContent =
                    "0";
            }


            if (resultCard) {

                resultCard.style.display =
                    "none";
            }


            if (questionCard) {

                questionCard.style.display =
                    "block";
            }


            showQuestion();

        }
    );

}


loadQuiz();