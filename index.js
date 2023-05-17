import inquirer from "inquirer";
import chalk from "chalk";
import * as chalkAnimation from "chalk-animation";
const calculator = () => {
    inquirer
        .prompt([
        {
            type: "input",
            name: "num1",
            message: "Enter the first number: ",
        },
        {
            type: "input",
            name: "num2",
            message: "Enter the second number: ",
        },
        {
            type: "list",
            name: "operation",
            message: "Select the operation: ",
            choices: ["Add", "Subtract", "Multiply", "Divide"],
        },
    ])
        .then((answers) => {
        const { num1, num2, operation } = answers;
        const parsedNum1 = parseFloat(num1);
        const parsedNum2 = parseFloat(num2);
        if (Number.isNaN(parsedNum1) || Number.isNaN(parsedNum2)) {
            console.log(chalk.red("Invalid input. Please enter valid numbers."));
            return;
        }
        let result;
        switch (operation) {
            case "Add":
                result = parsedNum1 + parsedNum2;
                break;
            case "Subtract":
                result = parsedNum1 - parsedNum2;
                break;
            case "Multiply":
                result = parsedNum1 * parsedNum2;
                break;
            case "Divide":
                result = parsedNum1 / parsedNum2;
                break;
            default:
                console.log(chalk.red("Invalid operation."));
                return;
        }
        console.log(chalk.green(`Result: ${result}`));
        const glitchAnimation = chalkAnimation.neon("Thank you for using the calculator!");
        glitchAnimation.start();
        setTimeout(() => {
            glitchAnimation.stop();
        }, 3000);
    })
        .catch((error) => {
        console.log(chalk.red("An error occurred: ", error));
    });
};
calculator();
