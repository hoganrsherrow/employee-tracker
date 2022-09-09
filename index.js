const questions = require('./utils/questions.js');
const db = require('./db/connection.js');

// Start connection to db
db.connect(err => {
    if(err) throw err;
    console.log("Database Connected");
});

// Launch Inquirer from the utils folder
questions();