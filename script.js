const button = document.querySelector("button");

button.addEventListener('click', function() {
    for (i = 0; i <= 5; i++) {
        let playerInput = prompt("Rock, Paper or Scissors?");
        let playerChoice = playerInput.toLowerCase();
        let computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
    }
});

function playRound (playerChoice, computerChoice) {
    if (
        (playerChoice == "rock" && computerChoice == "paper") ||
        (playerChoice == "paper" && computerChoice == "scissors") ||
        (playerChoice == "scissors" && computerChoice == "rock")
        ) {
            console.log("You lose");
            return "You lose";
        } else if (
        (playerChoice == "paper" && computerChoice == "rock") ||
        (playerChoice == "scissors" && computerChoice == "paper") ||
        (playerChoice == "rock" && computerChoice == "scissors")
        ) {
            console.log("You win");
            return "You win";
        } else {
            console.log("Tie");
            return "Tie";
    };
}

function getComputerChoice() {
    arr = ["rock", "paper", "scissors"]

    let randomNum = Math.floor(Math.random() * arr.length);
    return arr[randomNum];
}