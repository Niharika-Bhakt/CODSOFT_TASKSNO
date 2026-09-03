function startQuiz() {
    alert("🎯 Quiz will start soon!");
}

function createQuiz() {
    alert("✏️ Quiz Creation feature will open soon!");
}

function exploreCategory(category) {
    window.location.href = "explore.html";
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});