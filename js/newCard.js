/* const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {


  const formData = new FormData(formElement);
  const data = Object.fromEntries(formData);
}) */


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

/* newQuestion. innerHTML =*
<button data-js="btn_bookmark_quiz" class="ph-fill ph-bookmark">
</button>
<div class="container_question">
<h3 class="question" data-js="question">‹/hЗ>
</div>
<div class-"container_answer">
<div class="answer hidden" data-js="answer"></div>
<button class="btn_show-answer" data-js="btn_show_answer">
Show Answer
</button>
</div>
<div class="container_tags">
<p class="tag" data-js="tag"></p>

</div>




newQuestion querySelector ('[data-js="question"]*). textContent = data question;
newQuestion querySelector ('[data-js="answer"]'). textContent = data.answer;
newQuestion. querySelector (' [data-js="tag"]'). textContent = *#${data.tag1}*;
appontainer append (newQuestion);
newForm.reset();
conct charCountonc = document quenySolectondll/"ldata.ic_"chan-counton"]?)• 

const questions = [
{question: ,
answer: ,
tag: ,
isBookmarked: false,
answerShown: false,
}
]
*/