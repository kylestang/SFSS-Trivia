class Question {
    constructor(question, correct, fake1, fake2, fake3) {
        this.question = question;
        this.correct = correct;
        this.options = [correct, fake1, fake2, fake3];
    }

    shuffleOptions() {
        var currentIndex = this.options.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
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

    getNext(){
        if(this.questions.length > 0){
            this.current++;
            if(this.current >= this.questions.length){
                this.current = 0;
            }
            return this.questions[this.current];
        }
        else{
            return new Question(
            "This is a sample question that only appears when you have no questions.\
             Add questions from the start menu",
            "Correct answer", "Wrong answer", "Still wrong", "Nope");
        }
    }
}

let list = new Questions();
//list.questions.push(new Question("What colour is the Salish Sea?", "Blue", "Mauve", "Orange", "Four"));