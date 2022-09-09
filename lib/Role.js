const db = require('../db/connection.js');
const cTable = require('console.table');

class Role {
    constructor() {
    }

    // View roles
    viewRoles() {
        return db.query(`SELECT * FROM role`, (err, rows) => {
            console.log(cTable.getTable(rows));
        })
    }

    // Add Role
    addRole(id, title, salary, departmentId) {
        return db.query(`INSERT INTO role VALUES (?,?,?,?)`, [id, title, salary, departmentId], (err, results) => {
            console.log(`roleId: ${id}, roleTitle: ${title}, roleSalary$: ${salary}, deptID: ${departmentId}`);
            console.log(results);
        })
    }
}


module.exports = Role;