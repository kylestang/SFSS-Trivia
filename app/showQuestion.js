
let answered = false;
let questionList = new Questions();

// Link variables to document
let ShowQuestionContent = document.getElementById("questionContent");
let homeButton = document.getElementById("homeButton");
let answer = document.getElementById("answer");
let question = document.getElementById("question");
let option0 = document.getElementById("option0");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");

let options = [option0, option1, option2, option3];

// Show correct answer
function showCorrect(currentQuestion, clicked){

    if(!answered){
        // Iterare through all options
        for(let i = 0; i < 4; i++){
            let anOption = options[i];

            // If the option is correct, make it green
            if(anOption.innerHTML == currentQuestion.correct){
                anOption.classList.remove("option");
                anOption.classList.add("correct");

            // If not, make it red
            } else if (clicked != currentQuestion.correct) {
                anOption.classList.remove("option");
                anOption.classList.add("wrong");
            }

            anOption.classList.remove("hover");
            anOption.classList.add("disabled")
        }

        // Create and show next button
        let nextButton = document.createElement("P");
        nextButton.style.bottom = "0";
        nextButton.innerHTML = "Next";
        nextButton.className = "normalButton hover noselect";
        nextButton.id = "nextButton";
        nextButton.style.marginLeft = "2em";
        nextButton.style.marginBottom = "2em";
        nextButton.addEventListener("click", loadNextQuestion);
        ShowQuestionContent.appendChild(nextButton);

        answered = true;
    }
}

// Show the next question in questions
function loadNextQuestion(){
    // Remove the next button
    if(document.getElementById("nextButton") != null){
        document.getElementById("nextButton").remove();
    }

    answered = false;
    currentQuestion = questionList.getNext();
    currentQuestion.shuffleOptions();
    
    // Add question and answers
    question.innerHTML = currentQuestion.question;
    for (let i = 0; i < 4; i++) {
        let p_currentOption = options[i];
        p_currentOption.classList = "option hover noselect";
        p_currentOption.innerHTML = currentQuestion.options[i];
        
        p_currentOption.addEventListener("click", () =>{
            showCorrect(currentQuestion, currentQuestion.options[i]);
        });
    }
}

// Return to index.html
homeButton.addEventListener("click", () =>{
    window.location.href = "../index.html";
});

// Load questions and show them
questionList.load();
loadNextQuestion();
