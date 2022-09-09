const inquirer = require('inquirer');
const Deparment = require('../lib/Department.js');
const Employee = require('../lib/Employee.js');
const Role = require('../lib/Role.js');

// Object declarations
let department = new Deparment();
let role = new Role();
let employee = new Employee();

// function continueApp() {
//     console.log("We are continuing");
//     inquirer.prompt([
//                 {
//                     type: 'confirm',
//                     name: "confirm",
//                     message: 'Would you like to take another action?'
//                 }
        
//             ])
//                 .then((data) => {
//                     console.log(data);
//                     if(data.confirm) {
//                         questions();
//                     }
//                 });
// }

const questions = () => {
    inquirer.prompt([{
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: ['View Departments', new inquirer.Separator(), 'View Roles', new inquirer.Separator(), 'View Employees', new inquirer.Separator(), 'Add a Department', new inquirer.Separator(), 'Add a Role', new inquirer.Separator(), 'Add an Employee', new inquirer.Separator(), 'Update an Employee Role', new inquirer.Separator()]
        },
        {
            type: 'number',
            name: 'departmentId',
            message: 'What is the ID for the new department?',
            when: ({
                choice
            }) => choice == 'Add a Department'
        },
        {
            type: 'input',
            name: 'departmentName',
            message: 'What is the name of the new department?',
            when: ({
                choice
            }) => choice == 'Add a Department'
        },
        {
            type: 'number',
            name: 'roleId',
            message: 'What is the ID of the new role?',
            when: ({
                choice
            }) => choice == 'Add a Role'
        },
        {
            type: 'input',
            name: 'roleTitle',
            message: 'What is the role of the new title?',
            when: ({
                choice
            }) => choice == 'Add a Role'
        },
        {
            type: 'number',
            name: 'roleSalary',
            message: 'What is the salary for the new role?',
            when: ({
                choice
            }) => choice == 'Add a Role'
        },
        {
            type: 'number',
            name: 'departmentId',
            message: 'What is the ID for the department this role is located in?',
            when: ({
                choice
            }) => choice == 'Add a Role'
        },
        {
            type: 'number',
            name: 'employeeId',
            message: 'What is the ID of the new employee?',
            when: ({
                choice
            }) => choice == 'Add an Employee'
        },
        {
            type: 'input',
            name: 'employeeFirstName',
            message: `What is the employee's first name?`,
            when: ({
                choice
            }) => choice == 'Add an Employee'
        },
        {
            type: 'input',
            name: 'employeeLastName',
            message: `What is the employee's last name?`,
            when: ({
                choice
            }) => choice == 'Add an Employee'
        },
        {
            type: 'number',
            name: 'employeeRole',
            message: `What is the ID for the employee's role?`,
            when: ({
                choice
            }) => choice == 'Add an Employee'
        },
        {
            type: 'number',
            name: 'employeeManagerId',
            message: `What is the ID for the employee's manager?`,
            when: ({
                choice
            }) => choice == 'Add an Employee'
        },
        {
            type: 'number',
            name: 'employeeId',
            message: `What is the employee's ID?`,
            when: ({
                choice
            }) => choice == 'Update an Employee Role'
        },
        {
            type: 'number',
            name: 'employeeRole',
            message: `What is the ID for the employee's new role?`,
            when: ({
                choice
            }) => choice == 'Update an Employee Role'
        }
    ])
        .then((data) => {
            switch(data.choice) {
                case "View Departments":
                    department.viewDepartments();
                    break;
                case "View Roles":
                    role.viewRoles();
                    break;
                case "View Employees":
                    employee.viewEmployees();
                    break;
                case "Add a Department":
                    department.addDepartment(data.departmentId, data.departmentName);
                    break;
                case "Add a Role":
                    role.addRole(data.roleId, data.roleTitle, data.roleSalary, data.departmentId);
                    break;
                case "Add an Employee":
                    employee.addEmployee(data.employeeId, data.employeeFirstName, data.employeeLastName, data.employeeRole, data.employeeManagerId);
                    break;
                case "Update an Employee Role":
                    employee.updateRole(data.employeeId, data.employeeRole);
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
            } else {
                console.log("Please enter ^C to exit.");
            }
        });
};
module.exports = questions;