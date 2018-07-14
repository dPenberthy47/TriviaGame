setTimeout(timeUp, 1000 * 180);

function timeUp() {
    
    function showScores() {
        var gameOverHTML = "<h1>Result</h1>";
        gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    
        if (quiz.score > 0 && quiz.score < 6) {
            gameOverHTML += "<img src='https://media.giphy.com/media/l3vR1tPS6ZMyxKRq0/giphy.gif'/>";
            
        } else if (quiz.score > 4 && quiz.score < 11) {
            gameOverHTML += "<img src='https://media.giphy.com/media/3o7qDYnQOKtC0zNuRa/giphy.gif'/>";
            
        } else if (quiz.score > 9 && quiz.score < 16) {
            gameOverHTML += "<img src='https://media.giphy.com/media/1UUa9X1s4R4XhweIGP/giphy.gif'/>";
           
        } else if (quiz.score > 14 && quiz.score < 20) {
            gameOverHTML += "<img src='https://media.giphy.com/media/xUA7b2uqotaDunMxaw/giphy.gif'/>";
           
        } else if (quiz.score === 20) {
            gameOverHTML += "<img src='https://media.giphy.com/media/l0Iy294JIZv3s2FEs/giphy.gif'/>";
            
        } 
        gameOverHTML += "<p style='color: #E0202C; fontSize: 1em;'> click the header to play again! </p>";
        var element = document.getElementById("quiz");
        element.innerHTML = gameOverHTML;
        
    };

   var element = document.getElementById("timer");
   element
}