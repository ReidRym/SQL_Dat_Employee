const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');


// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user:"root",
    password:"password",
    database:"employee_db"
    });

