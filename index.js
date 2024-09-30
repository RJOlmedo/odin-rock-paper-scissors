// Initialize variables for the scores
let humanScore = 0;
let computerScore = 0;
const maxScore = 5; // Set the score limit to 5

// Initialize function called getComputerChoice
function getComputerChoice(){
    // Initialiaze choice variable to store the random number
    let choice = Math.random();
    // If number is between 0 and 0.33 choice is rock
    if(choice <= 0.33){
        // Set variable choice to "rock"
        return "rock";
    }
    // Else if the number is between 0.34 and 0.66 choice is paper
    else if(choice <= 0.66 && choice >= 0.34){
        // Set variable choice to "paper"
        return "paper";
    }
    // Else if the number is between 0.67 and 0.99 choice is scissors
    else if(choice <= 0.99 && choice >= 0.67){
        // Set variable choice to "scissors"
        return "scissors";
    }
}

// Function to check if the game has a winner
function checkWinner() {
    const resultDiv = document.getElementById('results');
    
    if (humanScore === maxScore) {
        resultDiv.textContent = "Congratulations! You won the game!";
        disableButtons(); // Disable buttons after the game is won
        return true;
    } else if (computerScore === maxScore) {
        resultDiv.textContent = "Sorry! The computer won the game!";
        disableButtons(); // Disable buttons after the game is won
        return true;
    }
    return false;
}

// Disable buttons after the game ends
function disableButtons() {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}

// Function to play a single round
function playRound(humanChoice) {
    if (checkWinner()) return; // If a winner is already declared, stop playing

    const computerChoice = getComputerChoice();
    const resultDiv = document.getElementById('results');
    const scoreDiv = document.getElementById('score');

    // Check for a tie
    if(humanChoice === computerChoice) {
        resultDiv.textContent = `It's a tie! Both chose ${humanChoice}`;
        return;
    }

    // Check if human wins
    if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultDiv.textContent = `You win this round! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        resultDiv.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    // Update the score display
    scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

    // Check if we have a winner after this round
    checkWinner();
}

// Add event listeners to buttons
document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));