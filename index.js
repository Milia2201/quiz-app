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
})

/* When the user clicks on the button the previously hidden 
answer should be displayed
When the user clicks this button again the answer is hidden 
again
The user can click on this button endlessly and the answer 
will either be displayed or hidden after each click
The toggle functionality should be applied by using a class 
which is named "hidden" */

