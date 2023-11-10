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

const displayWinner = document.getElementById("score");

let playerScore = 0;
let compScore = 0;

function playRound(playerChoice, computerChoice) {
    if (
        (playerChoice == "rock" && computerChoice == "paper") ||
        (playerChoice == "paper" && computerChoice == "scissors") ||
        (playerChoice == "scissors" && computerChoice == "rock")
    ) {
        compScore = compScore + 1;
        displayWinner.textContent = "YOU LOSE";
    } else if (
        (playerChoice == "paper" && computerChoice == "rock") ||
        (playerChoice == "scissors" && computerChoice == "paper") ||
        (playerChoice == "rock" && computerChoice == "scissors")
    ) {
        playerScore = playerScore + 1;
        displayWinner.textContent = "YOU WIN";
    } else if (
        (playerChoice == "paper" && computerChoice == "paper") ||
        (playerChoice == "scissors" && computerChoice == "scissors") ||
        (playerChoice == "rock" && computerChoice == "rock")
    ) {
        displayWinner.textContent = "TIE";
    };

    if (playerScore === 3) {
        roundEnd("win", playerScore, compScore);
    } else if (compScore === 3) {
        roundEnd("lose", playerScore, compScore);
    }
}

const endScreen = document.getElementById("end-screen");
const endScorePlayer = document.getElementById("end-score-you");
const endScoreComp = document.getElementById("end-score-comp");
const endResult = document.getElementById("end-result");

function roundEnd(winOrLose, playerWins, compWins) {
    if (winOrLose === "win") {
        endScreen.classList.remove("hide");
        endScorePlayer.textContent = playerWins;
        endScoreComp.textContent = compWins;
        endResult.textContent = "You Lost";
    } else if (winOrLose === "lose") {
        endScreen.classList.remove("hide");
        endScorePlayer.textContent = playerWins;
        endScoreComp.textContent = compWins;
        endResult.textContent = "You Lost";
    }
}

const btnPlayAgain = document.getElementById("play-again");

btnPlayAgain.addEventListener('click', () => {
    endScreen.classList.add("hide");
    clearDisplay();
    qMarkYou.classList.remove("hide");
    qMarkComp.classList.remove("hide");
    compScore = 0;
    playerScore = 0;
    displayWinner.textContent = "";
})

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

function getComputerChoice() {
    arr = ["rock", "paper", "scissors"]

    let randomNum = Math.floor(Math.random() * arr.length);
    return arr[randomNum];
}

function clearDisplay() {
    playerReveal.classList.remove("fa-hand");
    playerReveal.classList.remove("fa-hand-fist");
    playerReveal.classList.remove("fa-hand-peace");

    compReveal.classList.remove("fa-hand");
    compReveal.classList.remove("fa-hand-fist");
    compReveal.classList.remove("fa-hand-peace");
}