#! /usr/bin/env node
import inquirer from "inquirer";
// Computer Generate Random Number
const randomNumber = Math.floor(Math.random() * 12);
const answer = await inquirer.prompt([
    {
        name: "numberGuess",
        type: "number",
        message: "Please Guess a Number between 1 to 12",
    },
]);
if (answer.numberGuess === randomNumber) {
    console.log("Congratulations! you guessed right number");
}
else {
    console.log("You guessed wrong number");
}
