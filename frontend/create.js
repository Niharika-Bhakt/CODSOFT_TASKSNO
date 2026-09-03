let questions = [];

const title = document.getElementById("quizTitle");
const description = document.getElementById("quizDescription");
const category = document.getElementById("category");
const difficulty = document.getElementById("difficulty");

const question = document.getElementById("question");
const optionA = document.getElementById("optionA");
const optionB = document.getElementById("optionB");
const optionC = document.getElementById("optionC");
const optionD = document.getElementById("optionD");
const correct = document.getElementById("correctAnswer");

function updatePreview() {

    document.getElementById("previewCategory").textContent =
        category.value || "Your Category";

    document.getElementById("previewDifficulty").textContent =
        difficulty.value || "Difficulty";

    document.getElementById("previewQuestion").textContent =
        question.value || "Your question will appear here...";

    document.querySelector("#previewA span").textContent =
        optionA.value || "Option A";

    document.querySelector("#previewB span").textContent =
        optionB.value || "Option B";

    document.querySelector("#previewC span").textContent =
        optionC.value || "Option C";

    document.querySelector("#previewD span").textContent =
        optionD.value || "Option D";

    document.getElementById("previewNumber").textContent =
        String(questions.length + 1).padStart(2, "0");

    document.getElementById("previewCount").textContent =
        questions.length + 1;

    updateProgress();
}

[
    title,
    description,
    category,
    difficulty,
    question,
    optionA,
    optionB,
    optionC,
    optionD
].forEach(input => {

    input.addEventListener("input", updatePreview);

    input.addEventListener("change", updatePreview);

});

function updateProgress() {

    let completed = 0;

    if (title.value.trim()) completed++;

    if (description.value.trim()) completed++;

    if (category.value) completed++;

    if (difficulty.value) completed++;

    if (questions.length > 0) completed++;

    const percent = completed * 20;

    document.getElementById("progressBar").style.width =
        percent + "%";

    document.getElementById("progressText").textContent =
        percent + "% Complete";
}

document.getElementById("addQuestion")
    .addEventListener("click", function () {

        if (
            !question.value.trim() ||
            !optionA.value.trim() ||
            !optionB.value.trim() ||
            !optionC.value.trim() ||
            !optionD.value.trim() ||
            !correct.value
        ) {

            alert(
                "Please complete the question, all four options and select the correct answer."
            );

            return;
        }

        questions.push({

            question: question.value.trim(),

            options: {
                A: optionA.value.trim(),
                B: optionB.value.trim(),
                C: optionC.value.trim(),
                D: optionD.value.trim()
            },

            correct: correct.value

        });

        showQuestions();

        clearQuestion();

    });

function showQuestions() {

    const list = document.getElementById("questionList");

    list.innerHTML = "";

    document.getElementById("questionCount").textContent =
        questions.length +
        (
            questions.length === 1
                ? " question added"
                : " questions added"
        );

    questions.forEach((item, index) => {

        const div = document.createElement("div");

        div.className = "question-item";

        div.innerHTML = `

            <div class="question-top">

                <h3>
                    Q${index + 1}. ${item.question}
                </h3>

                <button
                    class="delete-btn"
                    onclick="deleteQuestion(${index})">
                    ✕
                </button>

            </div>

            <div class="answers">

                <p class="${item.correct === "A" ? "correct" : ""}">
                    A. ${item.options.A}
                </p>

                <p class="${item.correct === "B" ? "correct" : ""}">
                    B. ${item.options.B}
                </p>

                <p class="${item.correct === "C" ? "correct" : ""}">
                    C. ${item.options.C}
                </p>

                <p class="${item.correct === "D" ? "correct" : ""}">
                    D. ${item.options.D}
                </p>

            </div>

        `;

        list.appendChild(div);

    });

    updateProgress();
}

function deleteQuestion(index) {

    questions.splice(index, 1);

    showQuestions();

    updatePreview();
}

function clearQuestion() {

    question.value = "";

    optionA.value = "";

    optionB.value = "";

    optionC.value = "";

    optionD.value = "";

    correct.value = "";

    updatePreview();
}

async function publishQuizToBackend() {

    const formattedQuestions = questions.map(item => {

        return {
            questionText: item.question,
            options: [
                item.options.A,
                item.options.B,
                item.options.C,
                item.options.D
            ],
            correctAnswer: item.correct
        };

    });

    const quiz = {

        title: title.value.trim(),

        description: description.value.trim(),

        category: category.value,

        difficulty: difficulty.value,

        theme: "QuizVerse Purple & Pink",

        creator:
            localStorage.getItem("quizUserName")
            || "QuizVerse Creator",

        team: "QuizVerse Team",

        questions: formattedQuestions

    };

    try {

        const response =
            await fetch(
                "http://localhost:5000/api/quizzes/create",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(quiz)
                }
            );

        const data =
            await response.json();

        if (!response.ok) {

            throw new Error(
                data.error ||
                "Failed to publish quiz"
            );

        }

        localStorage.setItem(
            "quizVerseCreatedQuiz",
            JSON.stringify(quiz)
        );

        alert(
            "Quiz published successfully and saved to MongoDB!"
        );

        window.location.href =
            "published.html";

    } catch (error) {

        console.error(
            "Publish error:",
            error
        );

        alert(
            "Quiz could not be published. Please make sure the backend server is running."
        );

    }

}

document.getElementById("publishQuiz")
    .addEventListener("click", async function () {

        if (
            !title.value.trim() ||
            !description.value.trim() ||
            !category.value ||
            !difficulty.value
        ) {

            alert(
                "Please complete your quiz title, description, category and difficulty first."
            );

            return;
        }

        if (questions.length === 0) {

            alert(
                "Please add at least one question before publishing."
            );

            return;
        }

        await publishQuizToBackend();

    });

updatePreview();