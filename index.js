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
    let choice = promt("Type one of the following: rock paper scissors");
    // Set variable to lower case and without blank spaces
    choice = choice.toLowerCase().replace(/\s/g, "");

    // If the answer is not of the desired choices
    if(choice != "rock" || choice != "paper" || choice != "scissors"){
        // Print "Not a valid option"
        console.log("Not a valid Option");
    }
    // Else
    else{
        // Return choice
        return choice;
    }
}
