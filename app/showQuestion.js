let answered = false;
let div_answer = document.getElementById("answer");
let p_question = document.getElementById("question");
let p_option1 = document.getElementById("option0");
let p_option2 = document.getElementById("option1");
let p_option3 = document.getElementById("option2");
let p_option4 = document.getElementById("option3");
let p_options = [p_option1, p_option2, p_option3, p_option4];

function showCorrect(currentQuestion, clicked){
    if(!answered){
        for(let i = 0; i < 4; i++){
            let anOption = p_options[i];
            if(anOption.innerHTML == currentQuestion.correct){
                anOption.classList.remove("option");
                anOption.classList.add("correct");
            } else if (clicked != currentQuestion.correct) {
                anOption.classList.remove("option");
                anOption.classList.add("wrong");
            }
            anOption.classList.remove("hover");
            anOption.classList.add("disabled")
        }

        div_content = document.getElementById("questionContent");
        nextButton = document.createElement("P");
        nextButton.style.bottom = "0";
        nextButton.innerHTML = "Next";
        nextButton.className = "normalButton hover noselect";
        nextButton.id = "nextButton";
        nextButton.style.marginLeft = "2em";
        nextButton.style.marginBottom = "2em";
        nextButton.addEventListener("click", loadNextQuestion);
        div_content.appendChild(nextButton);

        answered = true;
    }
}

function loadNextQuestion(){
    if(document.getElementById("nextButton") != null){
        document.getElementById("nextButton").remove();
    }

    answered = false;
    currentQuestion = list.getNext();
    currentQuestion.shuffleOptions();
    
    p_question.innerHTML = currentQuestion.question;
    for (let i = 0; i < 4; i++) {
        let p_currentOption = p_options[i];
        p_currentOption.classList = "option hover noselect";
        p_currentOption.innerHTML = currentQuestion.options[i];
        p_currentOption.addEventListener("click", () =>{
            showCorrect(currentQuestion, currentQuestion.options[i]);
        });
    }
}

list.load();
loadNextQuestion();
