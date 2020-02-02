const Store = require('electron-store');
const store = new Store();

class Question {
    constructor(question, correct, fake1, fake2, fake3) {
        this.question = question;
        this.correct = correct;
        this.options = [correct, fake1, fake2, fake3];
    }

    shuffleOptions() {
        var currentIndex = this.options.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle
        while (0 !== currentIndex) {

            // Pick a remaining element
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element
            temporaryValue = this.options[currentIndex];
            this.options[currentIndex] = this.options[randomIndex];
            this.options[randomIndex] = temporaryValue;
        }
    }
}

class Questions {

    constructor() {
        this.questions = [];
        this.current = 0;
    }

    // Create default question in case questions list is empty
    defaultQuestion = new Question(
        "This is a sample question that only appears when you have no questions.\
         Add questions from the start menu",
        "Correct answer", "Wrong answer", "Still wrong", "Nope");

    // return the next question in the list,
    // or first question if at end
    getNext(){

        // If the list has questions
        if(this.questions.length > 0){
            this.current++;

            // If at the end, restart at question 0
            if(this.current >= this.questions.length){
                this.current = 0;
            }

            // Return the next question
            return this.questions[this.current];
        }
        // If no questions, return the default question
        else{
            return this.defaultQuestion;
        }
    }

    // Remove question at index
    remove(toRemove){
        let index = this.questions.indexOf(toRemove);
        if(index !== -1){
            this.questions.splice(index, 1);
        }
    }

    // Save this set of questions
    save(){
        store.set("questions", this.questions);
    }

    // Load the questions
    load(){
        let loaded = store.get("questions", null);
        if(loaded != null){
            for(let i = 0; i < loaded.length; i++){
                let toAdd = new Question();
                Object.assign(toAdd, loaded[i]);
                this.questions.push(toAdd);
            }
        }
    }
}
