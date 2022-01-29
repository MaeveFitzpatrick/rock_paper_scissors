function computerPlay() {
    let motion = Math.random();
    if (motion <= 0.33) {
        return "rock";
    }    else if (0.33 < motion <= 0.66) {
        return "paper";
    }    else if (0.66 < motion <= 1) {
        return "scissors";
    }
}
console.log(computerPlay());