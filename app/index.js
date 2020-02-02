
// Link buttons to document
let startButton = document.getElementById("startButton");
let modifyButton = document.getElementById("modifyButton");

// When start button is pushed, redirect to showQestion.html
startButton.addEventListener("click", () =>{
    window.location.href = "app/showQuestion.html";
});

// When modify button is pushed, redirect to password.html
modifyButton.addEventListener("click", () =>{
    window.location.href = "app/password.html";
});