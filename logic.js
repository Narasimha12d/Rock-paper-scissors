const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorButton = document.getElementById("scissor");
const resultArea = document.getElementById("result");
const yourScoreHtml = document.getElementById("your-score");
const computerScoreHtml = document.getElementById("computer-score");

let yourScore = 0, computerScore = 0;


function gameEngine (yourMove) {
    const moves = ["paper", "rock", "scissors"];
    const computerMove = moves[Math.floor(Math.random() * 3)];
    console.log(yourMove, computerMove);
   
 if (yourMove === "paper") {
    if (computerMove === "scissor") {
        computerScore++;
    } else if (computerMove === "rock") {
        yourScore++;
    }else {
        resultArea.innerHTML = `this is tie both picked same`;
        return;
    }
 }
 else if (yourMove === "rock") {
    if (computerMove === "paper") {
        computerScore++;
    }else if (computerMove === "scissors") {
        yourScore++;
    } else {
        // tie
        resultArea.innerHTML = `this is tie both picked same`;
        return;
    }
 }
 else {
    if (computerMove === "rock"){
        computerScore++;
    } else if (computerMove === "paper") {
        yourScore++;
    }else {
        // tie
        resultArea.innerHTML = `this is tie both picked same`;
        return;
    }
 }
    resultArea.innerHTML = `You picked ${yourMove} and computer picked ${computerMove}`
    yourScoreHtml.innerHTML = `${yourScore}` ;
    computerScoreHtml.innerHTML = `${computerScore}`
}

rockButton.addEventListener("click", () => {
    console.log("You Clicked rock");
    gameEngine("rock");
});
scissorButton.addEventListener("click", () => {
    console.log("You Clicked scissor");
    gameEngine("scissors");
});
paperButton.addEventListener("click", () => {
    console.log("You Clicked paper");
    gameEngine("paper");
});
