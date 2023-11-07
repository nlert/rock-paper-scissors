const rockButton = document.getElementById("rock-btn");
const paperButton = document.getElementById("paper-btn");
const scissorsButton = document.getElementById("scissors-btn");

rockButton.addEventListener('click', function() {
        let playerChoice = "rock";
        let computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
});

paperButton.addEventListener('click', function() {
    let playerChoice = "paper";
    let computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
});

scissorsButton.addEventListener('click', function() {
    let playerChoice = "scissors";
    let computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
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
    } else if (
        (playerChoice == "paper" && computerChoice == "paper") ||
        (playerChoice == "scissors" && computerChoice == "scissors") ||
        (playerChoice == "rock" && computerChoice == "rock")
    ) {
        console.log("Tie");
        return "Tie";
    };
}

function getComputerChoice() {
    arr = ["rock", "paper", "scissors"]

    let randomNum = Math.floor(Math.random() * arr.length);
    return arr[randomNum];
}