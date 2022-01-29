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
    if (playerSelection == "rock" && computerSelection == "rock") {
        return "It's a tie!";
    }    else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose!";
    }     else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win!";
    }
    if (playerSelection == "paper" && computerSelection == "rock"){
        return "You win!";
    }    else if (playerSelection == "paper" && computerSelection == "paper") {
        return "It's a tie!";
    }    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose!"
    }
    if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose!";
    }   else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win!";
    }   else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "It's a tie!";
    }
    
}

const input = prompt("Let's play Rock Paper Scissors!");
const playerSelection = input.toLowerCase();
const computerSelection = computerPlay();

function game() {
    const computerSelection = computerPlay();
    gameRound(playerSelection, computerPlay());
    gameRound(playerSelection, computerPlay());
    gameRound(playerSelection, computerPlay());
    gameRound(playerSelection, computerPlay());
    gameRound(playerSelection, computerPlay());
}

console.log(gameRound(playerSelection, computerSelection));



