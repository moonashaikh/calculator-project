#! /user/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "numberone",
        message: "Kindly enter your first no:",
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Kindly enter your second no:",
    },
    {
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"],
        message: "select operands:",
    },
]);
const { numberone, numberTwo, operator } = answers;
if (numberone && numberTwo && operator) {
    let result = 0;
    if (operator == "+") {
        result = numberone + numberTwo;
    }
    else if (operator == "-") {
        result = numberone - numberTwo;
    }
    else if (operator == "*") {
        result = numberone * numberTwo;
    }
    else if (operator == "/") {
        result = numberone / numberTwo;
    }
    console.log("your result is", result);
    // {  console.log("kindly enter valid input")
    // }
}
