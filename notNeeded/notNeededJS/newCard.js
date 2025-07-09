

console.clear();

const cardContainer = document.querySelector("[data-js='card-container'");

const form = document.querySelector("[data-js='form']");
//const input = document. querySelector ("[data-js='text-input']")
form.addEventListener("submit", (event) => {  
    event.preventDefault();
    console.log("test");
    //console.log(event.target.elements.textarea.value);

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries(formData));
    console.log ({data});
    
    const newCard = document.createElement("li");
    cardContainer.append(newCard); 
    newCard.classList.add("card");
    console.log({newCard});
    
 
    newCard.innerHTML = `
        <button class="bookmark bookmarked" data-js="bookmark">
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
    `
    console.log({newCard});
    
    newCard.querySelector('[data-js="yourQuestion"]').textContent = data.yourQuestion;
    newCard.querySelector('[data-jstwo="yourAnswer"]').textContent = data.yourAnswer;
    newCard.querySelector('[data-js="tag"]').textContent = data.tag;

    event.target. reset();
    event.target.elements.yourQuestion.focus();   
    



})

