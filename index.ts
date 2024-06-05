#! usr/bin/env node
// shabang

import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "firstnumber" },
  { message: "Enter Second Number", type: "number", name: "secondnumber" },
  {
    message: "One of the Operators to perform operation",
    type: "list",
    name: "Operators",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// Conditional Statements

if (answer.Operators === "Addition") {
  console.log(answer.firstnumber + answer.secondnumber + " is the answer");
} else if (answer.Operators === "Subtraction") {
  console.log(answer.firstnumber - answer.secondnumber + " is the answer");
} else if (answer.Operators === "Multiplication") {
  console.log(answer.firstnumber * answer.secondnumber + " is the answer");
} else if (answer.Operators === "Division") {
  console.log(answer.firstnumber / answer.secondnumber + " is the answer");
} else {
  console.log("Please Select Valid Operator");
}

