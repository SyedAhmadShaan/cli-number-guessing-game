#! /usr/bin/env node
//1. Generate a random number
let randomNo = Math.floor(Math.random() * 10);
import inquirer from "inquirer";
//2. Ask user to guess the number
const answer = await inquirer.prompt([
    {
        message: "Enter a number between 1 to 10:",
        name: "userInput",
        type: "number",
    },
]);
console.log(answer);
//3. Check if the user guessed the number correctly
if (randomNo === answer.userInput) {
    console.log("You won");
}
else {
    console.log("You lost");
}
