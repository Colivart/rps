

function getComputerChoice() {
    const rps = ["rock", "paper", "scissors"];

    let compChoice = rps[Math.floor(Math.random() * 2)];

    return compChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "You Tie!"
    }
    else if (computerSelection === "rock") {
        if (playerSelection === "paper") {
            return "You Win! Paper beats Rock!";
        }
        else if (playerSelection === "scissors") {
            return "You Lose! Rock beats Scissors!";
        }
    }
    else if (computerSelection === "paper") {
        if (playerSelection === "scissors") {
            return "You Win! Scissors beats Paper!";
        }
        else if (playerSelection === "rock") {
            return "You Lose! Paper beats Rock!";
        }
    }
    else {
        if (playerSelection === "rock") {
            return "You Win! Rock beats Scissors!"
        }
        else if (playerSelection === "paper") {
            return "You Lose! Scissors beats Paper!"
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playerChoice = prompt().toLowerCase();
        computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));
    }   
}

game();