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
          
          function addRole() {
            connection.query("SELECT * FROM department", function (err, res) {
              if (err) throw err;
              //asking for the three properties on the roles table      
              inquirer.prompt([
                {
                  name: "title",
                  type: "input",
                  message: "What is the title of the new role?"
                },
                {
                  name: "salary",
                  type: "input",
                  message: "What is the salary of this position?",
                },
                {
                  name: "deptId",
                  type: "list",
                  message: "Select a department for this role",
                  choices: res.map(item => item.name)
                }
              ]).then(function (answers) {
                const selectedDept = res.find(dept => dept.name === answers.deptId);
                connection.query("INSERT INTO roles SET ?",
                  {
                    title: answers.title,
                    salary: answers.salary,
                    dept_id: selectedDept.id
                  },
                  function (err, res) {
                    if (err) throw err;
                    console.log("New role added!\n");
                    initPrompt();
                  }
                );
              });
            })
          };

          function addEmployee() {
            connection.query("SELECT * FROM roles", function (err, res) {
              if (err) throw err;
              //asking for the three properties on the roles table      
              inquirer.prompt([
                {
                  name: "firstName",
                  type: "input",
                  message: "What is the employee's first name?"
                },
                {
                  name: "lastName",
                  type: "input",
                  message: "What is the employee's last name?",
                },
                {
                  name: "roleId",
                  type: "list",
                  message: "Select a role for this employee",
                  choices: res.map(item => item.title)
                }
              ]).then(function (answers) {
                const selectedRole = res.find(role => role.title === answers.roleId);
                connection.query("INSERT INTO employee SET ?",
                  {
                    first_name: answers.firstName,
                    last_name: answers.lastName,
                    role_id: selectedRole.id
                  },
                  function (err, res) {
                    if (err) throw err;
                    console.log("New employee added!\n");
                    initPrompt();
                  }
                );
              });
            })
          };

          function updateEmp() {
            connection.query("SELECT * FROM employee", function (err, res) {
              if (err) throw err;
              //asking for the three properties on the roles table      
              inquirer.prompt([
                {
                  name: "employee",
                  type: "list",
                  message: "Which employee would you like to update?",
                  choices: res.map(item => item.first_name)
                },
                {
                  name: "newRole",
                  type: "list",
                  message: "Select a new role for this employee",
                  choices: res.map(item => item.title)
                }
              ]).then(function (answers) {
                const selectedRole = res.find(role => role.title === answers.newRole);
                connection.query("UPDATE employee SET ? WHERE ?",
                  {
                    role_id: selectedRole.id
                  },
                  {
                    first_name: answers.employee
                  },
                  function (err, res) {
                    if (err) throw err;
                    console.log("Employee updated!\n");
                    initPrompt();
                  }
                );
              });
            })
          }




initPrompt();