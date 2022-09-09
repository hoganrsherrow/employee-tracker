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

    addEmployee(id, firstName, lastName, role, manager) {
        return db.query(`INSERT INTO employee VALUES (?,?,?,?,?)`, [id, firstName, lastName, role, manager], (err, results) => {
            console.log(results);
        })
    }

    updateRole(id, role) {
        return db.query(`UPDATE employee SET role_id = ? WHERE id = ?`, [role, id], (err, results) => {
            console.log(results);
        })
    }
}

module.exports = Employee;