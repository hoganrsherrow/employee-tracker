const inquirer = require('inquirer');
const Deparment = require('../lib/Department.js');
const Employee = require('../lib/Employee.js');
const Role = require('../lib/Role.js');

// Object declarations
let department = new Deparment();
let role = new Role();
let employee = new Employee();

function continueApp() {
    console.log("We are continuing");
    inquirer.prompt([
                {
                    type: 'confirm',
                    name: "confirm",
                    message: 'Would you like to take another action?'
                }
        
            ])
                .then((data) => {
                    console.log(data);
                    if(data.confirm) {
                        questions();
                    }
                });
}

const questions = () => {
    inquirer.prompt([{
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: ['View Departments', new inquirer.Separator(), 'View Roles', new inquirer.Separator(), 'View Employees', new inquirer.Separator(), 'Add a Department', new inquirer.Separator(), 'Add a Role', new inquirer.Separator(), 'Add an Employee', new inquirer.Separator(), 'Update an Employee Role']
        }
    ])
        .then((data) => {
            switch(data.choice) {
                case "View Departments":
                    department.viewDepartments();
                    return;
                case "View Roles":
                    role.viewRoles();
                    break;
                case "View Employees":
                    employee.viewEmployees();
                    break;
                default:
                    console.log("This didn't work");
            }
        })


        .then(() => {
            return inquirer.prompt([
                {
                    type: 'confirm',
                    name: "confirm",
                    message: 'Would you like to take another action?'
                }
        
            ])
        })
        .then((response) => {
            if(response.confirm) {
               return questions();
            }
        });
};
module.exports = questions;