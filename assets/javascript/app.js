function populate() {
    if(quiz.isEnded()) {

        function showScores() {
            var gameOverHtml = "<h1> Result <h1>";
            gameOverHtml += "<h2 id='score'> Your Scores: " + quiz.score + "</h2>";
            var element = document.getElementsByClassName("myContainer");
            element.innerHTML = gameOverHtml;
        };
        
        showScores();
    }
    else {
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " +  currentQuestionNumber + " of " + quiz.questions.length;
};



var questions = [
    new Question("What is the name of Liverpool's stadium?", ["Stamford Bridge", "Emerites Stadium", "Anfield", "Camp Nou"], "Anfield"),
    new Question("How many times have Liverpool won the UEFA Champions League?", ["2", "5", "7", "1"], "5"),
    new Question("Which club is Liverpool's biggest rival?", ["Manchester United", "Chelsea", "Manchester City", "Arsenal"], "Manchester United"),
    new Question("How many times have Liverpool been champions of England?", ["10", "5", "14", "18"], "18"),
    new Question("Which player holds the record for all time apperances for Liverpool?", ["Ian Callaghan", "Steven Gerrard", "Michael Owen", "Ian Rush"], "Ian Callaghan"),
    new Question("Which player holds the record for the most goals all competitions for Liverpool in a single season?", ["Ian Rush", "Michael Owen", "Mohammed Salah", "Luis Suarez"], "Ian Rush"),
    new Question("Which player holds the record for most goals all time for Liverpool?", ["Michael Owen", "Robbie Fowler", "Kenny Dalglish", "Ian Rush"], "Ian Rush"),
    new Question("Who is the current manager for Liverpool?", ["Antonio Conte", "Jurgen Kloop", "Jurgen Klinsmann", "Jose Mourinho"], "Jurgen Kloop"),
    new Question("Who is Liverpools all time record signing?", ["Michael Owen", "Mohammed Salah", "Virgil Van Dijk", "Fernando Torres"], "Virgil Van Dijk"),
    new Question("How many times have Liverpool won the English FA Cup?", ["5", "2", "10", "7"], "7"),
    new Question("Which Liverpool player holds the record for most goals a debut season?", ["Luis Suarez", "Fernando Torres", "Michael Owen", "Mohammed Salah"], "Mohammed Salah"),
    new Question("Who scored the fastest hat trick in a Liverpool kit ever, and how fast was it?", ["Sadio Mane, 2min 56sec", "Robbie Fowler, 4min 33sec", "Mark Walters, 10min 33sec", "Peter Crouch, 6min 2sec"], "Robbie Fowler, 4min 33sec"),
    new Question("Who is the youngest player to score a goal for Liverpool?", ["Ben Woodburn", "Michael Owen", "Trent Alexander-Arnold", "Rasheem Sterling"], "Ben Woodburn"),
    new Question("Who is the current owner of Liverpool FC?", ["Roman Abramovich", "Fenway Sports Group", "Stan Kroenke", "Joe Lewis"], "Fenway Sports Group"),
    new Question("Who is the longest serving manager all time for Liverpool?", ["Tom Watson", "Roy Evans", "Ron Yeats", "Kenny Dalglish"], "Tom Watson"),
    new Question("Who is Liverpools current captain?", ["Mohammed Salah", "Virgil Van Dijk", "Steven Gerrard", "Jordan Henderson"], "Jordan Henderson"),
    new Question("Which team holds the record for most wins all time in England?", ["Manchester United", "Arsenal", "Everton", "Liverpool"], "Liverpool"),
    new Question("How many times has Liverpool won the League Cup?", ["7", "8", "4", "2"], "8"),
    new Question("How many times has Liverpool won the UEFA Europa Cup", ["6", "0", "3", "2"], "3"),
    new Question("What year was Liverpool founded?", ["1902", "1892", "1876", "1910"], "1892")
];

var quiz = new Quiz(questions);

populate();
