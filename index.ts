#! /usr/bin/env node

import inquirer from "inquirer";

//Printing a wellcome message
console.log("\n\twellcome To \'arsalan_javed\' - CLI Simple Calculator\n");

// Asking Questions from users through inquirer

let answers = await inquirer.prompt([
    {message: "Enter your first number",  type : "number", name: "firstnumber"},
    {message: "Enter your second number", type: "number", name: "secondnumber"},
    {
        message: "Select one operator to perform operations",
        type: "list",
        name: "operator",
        choices : ["Addition", "Subtraction", 'Multiplication', 'Division'],
    },
]);

//Conditional statements if-else

if(answers.operator === "Addition"){
    console.log(answers.firstnumber + answers.secondnumber)
}

else if(answers.operator === "Subtraction"){
    console.log(answers.firstnumber - answers.secondnumber)
}

else if(answers.operator === "Multiplication"){
    console.log(answers.firstnumber * answers.secondnumber)
}

else if (answers.operator === "Division"){
    console.log(answers.firstnumber / answers.secondnumber)
}
else(
    console.log("Invalid Input")
);


