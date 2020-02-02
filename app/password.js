
// Password to modify questions
const password = "sea";

// Get elements from document
passwordInput = document.getElementById("passwordInput");
enterButton = document.getElementById("enterButton");
backButton = document.getElementById("backButton");

// If password is correct, redirect to modifyQuestions.html
enterButton.addEventListener("click", () =>{
    if(passwordInput.value == password){
        window.location.href = "modifyQuestions.html";
    }
});

// return to index.html
backButton.addEventListener("click", () =>{
    window.location.href = "../index.html"
});
