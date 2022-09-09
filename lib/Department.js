const db = require('../db/connection.js');
const cTable = require('console.table');

class Department {
    constructor() {
    }

    // READ Departments
    viewDepartments() {
        return db.query(`SELECT * FROM department`, (err, rows) => {
            console.log(cTable.getTable(rows));
        })
    }

    // CREATE Departments
    addDepartment(id, name) {
       return db.query(`INSERT INTO department VALUES (?,?)`, [id, name], (err, results) => {
            console.log(`id: ${id}, name: ${name}`);
            console.log(results);
        });
    }
}


module.exports = Department;