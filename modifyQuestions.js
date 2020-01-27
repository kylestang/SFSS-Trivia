
let questionsDiv = document.getElementById("questionsDiv");
let addButton = document.getElementById("addButton");
let questionInput = document.getElementById("questionInput");
let correctInput = document.getElementById("correctInput");
let wrong1Input = document.getElementById("wrong1Input");
let wrong2Input = document.getElementById("wrong2Input");
let wrong3Input = document.getElementById("wrong3Input");

function updateQuestions(){
    while (questionsDiv.firstChild) {
        questionsDiv.removeChild(questionsDiv.firstChild);
    }
    for(let i = 0; i < list.questions.length; i++){
        let currentQuestion = list.questions[i];
        let p_newQuestion = document.createElement("P");
        p_newQuestion.className = "viewQuestion noselect";
        p_newQuestion.innerHTML = "<b>Question:</b><br>" + currentQuestion.question
            + "<br><b>Answer:</b><br>" + currentQuestion.correct;
        
        let p_newButton = document.createElement("P");
        p_newButton.className = "normalButton hover noselect";
        p_newButton.innerHTML = "Delete";
        p_newButton.addEventListener("click", () =>{
            list.remove(currentQuestion);
            updateQuestions();
        })

        questionsDiv.appendChild(p_newQuestion);
        questionsDiv.appendChild(p_newButton);
    }
}

addButton.addEventListener("click", () => {
    list.questions.push(
        new Question(questionInput.value, correctInput.value,
            wrong1Input.value, wrong2Input.value, wrong3Input.value)
    );
    updateQuestions();
    questionInput.value = "";
    correctInput.value = "";
    wrong1Input.value = "";
    wrong2Input.value = "";
    wrong3Input.value = "";
})