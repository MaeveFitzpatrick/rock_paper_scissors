function computerPlay() {
        let motion = Math.random();
        if (motion <= 0.33) {
            return "rock";
        }    else if (motion <= 0.66) {
            return "paper";
        }    else if (motion <= 1) {
            return "scissors";
        }
    }


function gameRound(playerSelection, computerSelection) {
    console.log(computerSelection);
    if (computerSelection == "rock") {
        return "It's a tie! Try again.";
    }    else if (computerSelection == "paper") {
        return "Paper beats Rock, you lose!";
    }     else if (computerSelection == "scissors") {
        return "Rock beats Scissors, you win!";
    }
    
}

const playerSelection = "rock".toLowerCase;
const computerSelection = computerPlay();
console.log(gameRound(playerSelection, computerSelection));






