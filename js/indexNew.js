console.clear();

import navBar from "./nav.js";
import cardCreation from "./card.js";
import { questions } from "./questions.js";
import bookmarkCardToggle from "./bookmarkCard.js";

function callTheFunctionsBecauseIDontKnowHowElseToDoThis() {
  /* nav Bar Creation */
  navBar();

  /*    Card Creation */
  questions.forEach((question) => {
    cardCreation({ ...question });
  });

  /* toggle Bookmark */
}

callTheFunctionsBecauseIDontKnowHowElseToDoThis();

//doesnt work either.. fuck.

const bookmarkButton = document.querySelector("[data-js='bookmark']");
const card = document.querySelector("[data-js='card']");
const answerText = document.querySelector("[data-js='answerText']");
const showAnswerButton = document.querySelector(
  "[data-js='show-answer-button']"
);

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmarked");
});

showAnswerButton.addEventListener("click", () => {
  answerText.classList.toggle("hidden");

  if (answerText.classList.contains("hidden") === true) {
    showAnswerButton.textContent = "Show Answer";
  } else {
    showAnswerButton.textContent = "Hide Answer";
  }
});

const pageHomeSection = document.querySelector('[data-js="home-page"]');
const pageBookmarkSection = document.querySelector(
  '[data-js="page-bookmarked"]'
);
const pageNewCardSection = document.querySelector('[data-js="page-plus"]');
const pageProfileSection = document.querySelector('[data-js="page-profile"]');
const pageHomeButton = document.querySelector('[data-js="home"]');
const pageBookmarkButton = document.querySelector('[data-js="bookmark-nav"]');
const pageNewCardButton = document.querySelector('[data-js="new-card"]');
const pageProfileButton = document.querySelector('[data-js="profile"]');

pageHomeButton.addEventListener("click", () => {
  pageHomeSection.classList.remove("hidden");
  pageBookmarkSection.classList.add("hidden");
  pageNewCardSection.classList.add("hidden");
  pageProfileSection.classList.add("hidden");
});

pageBookmarkButton.addEventListener("click", () => {
  pageHomeSection.classList.add("hidden");
  pageBookmarkSection.classList.remove("hidden");
  pageNewCardSection.classList.add("hidden");
  pageProfileSection.classList.add("hidden");
});

pageNewCardButton.addEventListener("click", () => {
  pageHomeSection.classList.add("hidden");
  pageBookmarkSection.classList.add("hidden");
  pageNewCardSection.classList.remove("hidden");
  pageProfileSection.classList.add("hidden");
});

pageProfileButton.addEventListener("click", () => {
  pageHomeSection.classList.add("hidden");
  pageBookmarkSection.classList.add("hidden");
  pageNewCardSection.classList.add("hidden");
  pageProfileSection.classList.remove("hidden");
});

const cardContainer = document.querySelector("[data-js='card-container'");
const cardContainerUnderForm = document.querySelector(
  '[data-js="card-container-own"]'
);

const form = document.querySelector("[data-js='form']");
//const input = document. querySelector ("[data-js='text-input']")
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("test");
  //console.log(event.target.elements.textarea.value);

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries(formData));
  console.log({ data });

  const newCard = document.createElement("li");

  cardContainerUnderForm.append(newCard);
  //cardContainer.append(newCard);
  newCard.classList.add("card");
  console.log({ newCard });

  newCard.innerHTML = `
        <button class="bookmark" data-js="bookmark">
            <span
            role="img"
            aria-label="To save this question press this bookmark"></span>
        </button>
        <h2 class="card__title" data-js="yourQuestion">
            <span aria-label="Quiz Question"></span>
        </h2>
        <p class="hidden" data-js="answerText" data-jstwo="yourAnswer"></p>
        <button class="show-answer-button" data-js="show-answer-button">
            Show Answer
            <span aria-label="Show Answer"></span></button>
        <ul class="tags">
            <span aria-label="Tags"></span>
            <li>
                <p class="tag" data-js="tag"></p>
            </li>
        </ul>
    `;
  console.log({ newCard });

  newCard.querySelector('[data-js="yourQuestion"]').textContent =
    data.yourQuestion;
  newCard.querySelector('[data-jstwo="yourAnswer"]').textContent =
    data.yourAnswer;
  newCard.querySelector('[data-js="tag"]').textContent = data.tag;

  event.target.reset();
  event.target.elements.yourQuestion.focus();
});

const textInputQuestion = document.querySelector('[data-js="yourQuestion"]');
const characterCountQuestion = document.querySelector('[data-js="characterCountQuestion"]');


textInputQuestion.addEventListener("input", function () {
  const remaining = 150 - textInputQuestion.value.length;
  characterCountQuestion.textContent = `${remaining} characters remaining`;
});


const textInputAnswer = document.querySelector('[data-js="yourAnswer"]');
const characterCountAnswer = document.querySelector('[data-js="characterCountAnswer"]');


textInputAnswer.addEventListener("input", function () {
  const remaining = 150 - textInputAnswer.value.length;
  characterCountAnswer.textContent = `${remaining} characters remaining`;
});