
const password = "sea";

passwordInput = document.getElementById("passwordInput");
enterButton = document.getElementById("enterButton");

enterButton.addEventListener("click", () =>{
    if(passwordInput.value == password){
        window.location.href = "modifyQuestions.html";
    }
});