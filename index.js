/*
Create a new function named getComputerChoice.
Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
Hint: The Math.random method returns a random number that’s greater than or equal to 0 and less than 1. Think about how you can use this to conditionally return one of the multiple choices.
Test that your function returns what you expect using console.log or the browser developer tools before advancing to the next step.
*/

// Initialize function called getComputerChoice
function getComputerChoice(){
    // Initialiaze choice variable to store the random number
    let choice = Math.random();
    console.log(choice);
    // If number is between 0 and 0.33 choice is rock
    if(choice <= 0.33){
        // Set variable choice to "rock"
        choice = "rock";
    }
    // Else if the number is between 0.34 and 0.66 choice is paper
    else if(choice <= 0.66 && choice >= 0.34){
        // Set variable choice to "paper"
        choice = "paper";
    }
    // Else if the number is between 0.67 and 0.99 choice is scissors
    else if(choice <= 0.99 && choice >= 0.67){
        // Set variable choice to "scissors"
        choice = "scissors";
    }
    // Return choice
    return choice;
}

/*
Create a new function named getHumanChoice.
Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
Hint: Use the prompt method to get the user’s input.
Test what your function returns by using console.log.
*/

// Initialiaze function called getHumanChoice
function getHumanChoice(){
    // Print in console a message that says "Type one of the following: rock paper scissors"
    // Get answer from the user and store in choice variable
    let choice = prompt("Type one of the following: rock paper scissors");
    // Set variable to lower case and without blank spaces
    choice = choice.toLowerCase().replace(/\s/g, "");
    console.log(choice);

    // If the answer is not of the desired choices
    if(choice != "rock" && choice != "paper" && choice != "scissors"){
        // Print "Not a valid option"
        console.log("Not a valid Option");
    }
    // Else
    else{
        // Return choice
        return choice;
    }
}

/*
Create two new variables named humanScore and computerScore in the global scope.
Initialize those variables with the value of 0.
*/

// Initialiaze variable humanScore
let humanScore = 0;
// Initialiaze variable computerScore
let computerScore = 0;

/*
Create a new function named playRound.
Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
Increment the humanScore or computerScore variable based on the round winner.
*/

// Initialiaze function called playRound with parameters humanChoice and computerChoice
function playRound(humanChoice, computerChoice){
    // If human loses 
    // Computer chooses paper user rock
    // Or computer chooses scissors user paper
    // Or computer chooses rock user scissors
    if((computerChoice === "paper" && humanChoice === "rock") || (computerChoice === "scissors" && humanChoice === "paper") || (computerChoice === "rock" && humanChoice === "scissors")){
        // Print `You lose! ${computerChoice} beats ${humanChoice}`
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        // Increment computerScore
        computerScore++;
    }
    // Else
    else if(( humanChoice === "paper" && computerChoice === "rock") || ( humanChoice === "scissors" && computerChoice === "paper")  || ( humanChoice === "rock" && computerChoice === "scissors") ){
        // Print `You win! ${humanChoice} beats ${computerChoice}`
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        // Increment humanScore
        humanScore++;
    }
}

/*
Create a new function named playGame.
Move your playRound function and score variables so that they’re declared inside of the new playGame function
Play 5 rounds by calling playRound 5 times.
Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.
Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return values to something more useful.
If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.
*/

// Initialize function called playGame
function playGame(){
    // For 5 times
    for(i=0; i<5; i++){ 
        // Call playRound Function
        playRound();
    // End For
    }

    // If winner is computer
    if(computerScore > humanScore){
        // Print `You Lose! Computer Score: ${computerScore}, Human Score: ${humanScore}`
        console.log(`You Lose! Computer Score: ${computerScore}, Human Score: ${humanScore}`);
    // End If
    }
    // Else
    else{
        // Print `You Win! Computer Score: ${computerScore}, Human Score: ${humanScore}`
        console.log(`You Win! Computer Score: ${computerScore}, Human Score: ${humanScore}`);
    // End Else
    }
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice(); 

playRound(humanChoice, computerChoice);