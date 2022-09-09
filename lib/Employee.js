const db = require('../db/connection.js');
const cTable = require('console.table');

class Employee {
    constructor() {
    }

    viewEmployees() {
        return db.query(`SELECT * FROM employee`, (err, rows) => {
            console.log(cTable.getTable(rows));
        })
    }
}

module.exports = Employee;