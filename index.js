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

console.log(getComputerChoice());