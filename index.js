const inquirer = require('inquirer');
const db = require('./db/connection');

// Start connection to db
db.connect(err => {
    if(err) throw err;
    console.log("Database Connected");
});
console.log("index connection...");