
let questionList = new Questions();

// Get elements from document
let questionsDiv = document.getElementById("questionsDiv");
let homeButton = document.getElementById("homeButton");
let addButton = document.getElementById("addButton");
let questionInput = document.getElementById("questionInput");
let correctInput = document.getElementById("correctInput");
let wrong1Input = document.getElementById("wrong1Input");
let wrong2Input = document.getElementById("wrong2Input");
let wrong3Input = document.getElementById("wrong3Input");

// Updates the list of questions
function updateQuestions(){

    // Remove all questions from screen
    while (questionsDiv.firstChild) {
        questionsDiv.removeChild(questionsDiv.firstChild);
    }

    // Display each question in questionList
    for(let i = 0; i < questionList.questions.length; i++){
        let currentQuestion = questionList.questions[i];

        // Display question
        let p_newQuestion = document.createElement("P");
        p_newQuestion.className = "viewQuestion noselect";
        p_newQuestion.innerHTML = "<b>Question:</b><br>" + currentQuestion.question
            + "<br><b>Answer:</b><br>" + currentQuestion.correct;
        
        // Create and display delete button
        let p_newButton = document.createElement("P");
        p_newButton.className = "normalButton hover noselect";
        p_newButton.innerHTML = "Delete";
        p_newButton.addEventListener("click", () =>{
            questionList.remove(currentQuestion);
            questionList.save();
            updateQuestions();
        })

        // Add question and delete button to page
        questionsDiv.appendChild(p_newQuestion);
        questionsDiv.appendChild(p_newButton);
    }
}

// Add a new question with fields from input boxes
addButton.addEventListener("click", () =>{
    questionList.questions.push(
        new Question(questionInput.value, correctInput.value,
            wrong1Input.value, wrong2Input.value, wrong3Input.value)
    );

    questionList.save();
    updateQuestions();

    // Clear input boxes
    questionInput.value = "";
    correctInput.value = "";
    wrong1Input.value = "";
    wrong2Input.value = "";
    wrong3Input.value = "";
});

// return to index.html
homeButton.addEventListener("click", () =>{
    window.location.href = "../index.html";
});

// Load and display questions
questionList.load();
updateQuestions();
