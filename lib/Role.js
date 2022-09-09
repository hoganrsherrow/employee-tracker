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
}


module.exports = Role;