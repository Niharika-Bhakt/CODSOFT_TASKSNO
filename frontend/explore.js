function startExploreQuiz(category) {

    localStorage.setItem(
        "exploreQuiz",
        category
    );

    window.location.href = "explore-quiz.html";
}