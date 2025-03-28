function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber < 33) return "rock";
    else if (randomNumber > 66) return "paper";
    else return "scissors";
}
 
let choice = ""

let computerScore = 0;
let humanScore = 0;
let rounds = 0;

const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");

const result = document.querySelector("#result");
const playerScore = document.querySelector("#player-score");
const compScore = document.querySelector("#comp-score");
const scoreboard = document.querySelector("#scoreboard");

function gameover() {
    if (rounds === 5) {
        scoreboard.textContent = "Gameover! Final score:";
        document.querySelector("#rock-button").disabled = true;
        document.querySelector("#paper-button").disabled = true;
        document.querySelector("#scissors-button").disabled = true;
        }
 }  

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        result.textContent = "Computer chose scissors. You win!";
        humanScore = ++humanScore;
        playerScore.textContent = humanScore;
        compScore.textContent = computerScore;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        result.textContent = "Computer chose rock. You win!"; 
        humanScore = ++humanScore;
        playerScore.textContent = humanScore;
        compScore.textContent = computerScore;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        result.textContent = "Computer chose paper. You win!";
        humanScore = ++humanScore;
        playerScore.textContent = humanScore;
        compScore.textContent = computerScore;
    }
    else if (humanChoice === computerChoice) {
        result.textContent = "Tie!";
        playerScore.textContent = humanScore;
        compScore.textContent = computerScore;
    }
    else {
        result.textContent = "Computer chose " + computerChoice + ". You lose!";
        computerScore = ++computerScore;
        playerScore.textContent = humanScore;
        compScore.textContent = computerScore;
    }
    rounds = ++rounds;
    gameover();
}

rockButton.addEventListener('click', () => {
    humanChoice = "rock";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(rounds);
});

paperButton.addEventListener('click', () => {
    humanChoice = "paper";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(rounds);
})

scissorsButton.addEventListener("click", () => {
    humanChoice = "scissors";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(rounds);
})
