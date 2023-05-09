const connection = require('./connection');
const inquirer = require('inquirer');

function initPrompt() {
    inquirer.prompt([
      {
        name: "prompt",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a new department",
          "Add a new role",
          "Add a new employee",
          "Update employee roles",
          "Exit"
        ]
      }])
      .then(function (answer) {
        switch (answer.prompt) {
          case "View all departments":
            viewDepartments();
            break;
          case "View all roles":
            viewRoles();
            break;
          case "View all employees":
            viewEmployees();
            break;
          case "Add a new department":
            addDepartment();
            break;
          case "Add a new role":
            addRole();
            break;
          case "Add a new employee":
            addEmployee();
            break;
          case "Update employee roles":
            updateEmp();
            break;
          case "Exit":
            connection.end();
            break;
        }
      });
  };


function viewDepartments() {
connection.query("select * from department", function(err, res) {
    if (err) throw err;
    console.table(res);
    initPrompt();


});
};

function viewRoles() {
    connection.query("select * from role", function(err, res) {
        if (err) throw err;
        console.table(res);
        initPrompt();
    
    
    });
    };
    
    function viewEmployees() {
        connection.query("select * from employee", function(err, res) {
            if (err) throw err;
            console.table(res);
            initPrompt();
        
        
        });
        };
        
        function addDepartment() {
            inquirer.prompt([
              {
                type: "input",
                name: "department",
                message: "What is the new department name?"
              }
            ]).then(function (data) {
              connection.query(
                "INSERT INTO department SET ?", 
                {
                name: data.department
              },
                function (err, res) {
                  if (err) throw err;
                  
                  initPrompt();
                }
              );
            });
          }





initPrompt();