// Player Choices and Event Listeners
const rockButton = document.getElementById("rock-btn");
const paperButton = document.getElementById("paper-btn");
const scissorsButton = document.getElementById("scissors-btn");

rockButton.addEventListener('click', function() {
        let playerChoice = "rock";
        let computerChoice = getComputerChoice();

        clearDisplay();

        displayChoice("rock", computerChoice);
        playRound(playerChoice, computerChoice);
});

paperButton.addEventListener('click', function() {
    let playerChoice = "paper";
    let computerChoice = getComputerChoice();

    clearDisplay();

    displayChoice("paper", computerChoice);
    playRound(playerChoice, computerChoice);
});

scissorsButton.addEventListener('click', function() {
    let playerChoice = "scissors";
    let computerChoice = getComputerChoice();

    clearDisplay();

    displayChoice("scissors", computerChoice);
    playRound(playerChoice, computerChoice);
});

// Determine Winner
const displayWinner = document.getElementById("score");

function playRound(playerChoice, computerChoice) {
    if (
        (playerChoice == "rock" && computerChoice == "paper") ||
        (playerChoice == "paper" && computerChoice == "scissors") ||
        (playerChoice == "scissors" && computerChoice == "rock")
    ) {
        displayWinner.textContent = "YOU LOSE";
    } else if (
        (playerChoice == "paper" && computerChoice == "rock") ||
        (playerChoice == "scissors" && computerChoice == "paper") ||
        (playerChoice == "rock" && computerChoice == "scissors")
    ) {
        displayWinner.textContent = "YOU WIN";
    } else if (
        (playerChoice == "paper" && computerChoice == "paper") ||
        (playerChoice == "scissors" && computerChoice == "scissors") ||
        (playerChoice == "rock" && computerChoice == "rock")
    ) {
        displayWinner.textContent = "TIE";
    };
}

// Display Player and Computer Selections
const qMarkYou = document.getElementById("question-mark-you");
const qMarkComp = document.getElementById("question-mark-comp");

const playerReveal = document.getElementById("player-reveal");
const compReveal = document.getElementById("comp-reveal");

function displayChoice(playerChoice, computerChoice) {
    qMarkYou.classList.add("hide");
    qMarkComp.classList.add("hide");

    if (playerChoice == "rock") {
        playerReveal.classList.add("fa-hand-fist");
    } else if (playerChoice == "paper") {
        playerReveal.classList.add("fa-hand");
    } else if (playerChoice == "scissors") {
        playerReveal.classList.add("fa-hand-peace");
    }

    if (computerChoice == "rock") {
        compReveal.classList.add("fa-hand-fist");
    } else if (computerChoice == "paper") {
        compReveal.classList.add("fa-hand");
    } else if (computerChoice == "scissors") {
        compReveal.classList.add("fa-hand-peace");
    }
}

// Random Computer Selection
function getComputerChoice() {
    arr = ["rock", "paper", "scissors"]

    let randomNum = Math.floor(Math.random() * arr.length);
    return arr[randomNum];
}

// Clear Selection Display Before Updating With New Selection
function clearDisplay() {
    playerReveal.classList.remove("fa-hand");
    playerReveal.classList.remove("fa-hand-fist");
    playerReveal.classList.remove("fa-hand-peace");

    compReveal.classList.remove("fa-hand");
    compReveal.classList.remove("fa-hand-fist");
    compReveal.classList.remove("fa-hand-peace");
}