const inquirer = require('inquirer');
const Deparment = require('../lib/Department.js');
const Employee = require('../lib/Employee.js');
const Role = require('../lib/Role.js');

// Object declarations
let department = new Deparment();

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
            console.log(data.confirm);
            if(data.confirm) {
                questions();
            }
        });
};
module.exports = questions;