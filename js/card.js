const cardContainer = document.querySelector('[data-js="card-container"]');

export default function cardCreation({ question, answer, tag }) {
  const newCard = document.createElement("li");
  newCard.classList.add("card");
  newCard.setAttribute("data-js", "card");
  //console.log(newCard);

  newCard.innerHTML = `
    <button class="bookmark" data-js="bookmark">
            <span
            role="img"
            aria-label="To save this question press this bookmark"></span>
        </button>
        <h2 class="card__title">
            ${question}
            <span aria-label="Quiz Question"></span>
        </h2>
        <p class="hidden "data-js="answerText">${answer}</p>
        <button class="show-answer-button" data-js="show-answer-button">
            Show Answer
            <span aria-label="Show Answer"></span></button>
        <ul class="tags">
            <span aria-label="Tags"></span>
            <li>
            <p class="tag">${tag[0]}</p>
            </li>
            <li>
            <p class="tag">${tag[1]}</p>
            </li>
            <li>
            <p class="tag">${tag[2]}</p>
            </li>
        </ul>
    `;
  cardContainer.append(newCard);
}

/* 
<ul class="main-content__cards">
    <li class="card" data-js="card">
        
    </li> */
