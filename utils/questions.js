const inquirer = require('inquirer');


const questions = () => {
    inquirer.prompt([{
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: ['View Departments', new inquirer.Separator(), 'View Roles', new inquirer.Separator(), 'View Employees', new inquirer.Separator(), 'Add a Department', new inquirer.Separator(), 'Add a Role', new inquirer.Separator(), 'Add an Employee', new inquirer.Separator(), 'Update an Employee Role']
        },
        {
            type: 'confirm',
            name: "confirm",
            message: 'Would you like to take another action?'
        }

    ])
        .then((data) => {
            console.log("I made it to the data section.");
            console.log(data.confirm);
            if(data.confirm) {
                questions();
            }
        });
};
module.exports = questions;