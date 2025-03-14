function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber < 33) return "rock";
    else if (randomNumber > 66) return "paper";
    else return "scissors";
}

function getHumanChoice() {
    let choice = prompt("Please make your pick (rock, paper, or scissors)");
    return choice.toLowerCase()
}

let computerScore = 0;
let humanScore = 0;


function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        alert("Computer chose scissors. You win!")
        humanScore = ++humanScore;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        alert("Computer chose rock. You win!"); 
        humanScore = ++humanScore;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        alert("Computer chose paper. You win!");
        humanScore = ++humanScore;
    }
    else if (humanChoice === computerChoice) {
        alert("Tie!");
    }
    else {
        alert("Computer beat you or you can't spell. YOU LOSE");
        computerScore = ++computerScore;
    }
}

function playGame() {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);    
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    alert("Gameover. Final score Computer: " + computerScore + " and Player: " + humanScore)
}

playGame()