console.clear();

const bookmarkButton = document.querySelector("[data-js='bookmark']");
const card = document.querySelector("[data-js='card']");
const answerText = document.querySelector("[data-js='answerText']");
const showAnswerButton = document.querySelector("[data-js='show-answer-button']");


bookmarkButton.addEventListener("click", () => {
    bookmarkButton.classList.toggle("bookmarked");
})

showAnswerButton.addEventListener("click", () => {
    answerText.classList.toggle("hidden");

    if (answerText.classList.contains("hidden") === true) {
        showAnswerButton.textContent = "Show Answer";
    } else {
        showAnswerButton.textContent = "Hide Answer";
    }
})
