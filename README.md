# SQL Track Dat Employee
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Description
This command-line application is designed to manage a company's employee database. It was built with Node.js, Inquirer, and MySQL to provide an easy-to-use interface for non-developers to view and interact with information stored in the database. The application allows users to perform a variety of tasks, such as adding or removing employees, updating employee information, viewing employee salaries, and tracking department budgets. The application also provides reporting functions, such as generating reports for specific employees, departments, and job roles. With this application, managing a company's employee database is now easier than ever.


## Table of Contents

* [TITLE](#title)
* [DESCRIPTION](#description)
* [INSTALLATION](#installation)
* [USAGE](#usage)
* [BADGES](#badges)
* [FEATURES](#features)
* [QUESTIONS](#questions)
* [CONTACT](#contact)
* [GITHUB](#github)
* [EMAIL](#email)


## Installation
You'll need to use the MySQL2 packageLinks to an external site. to connect to your MySQL database and perform queries, and the Inquirer packageLinks to an external site. to interact with the user via the command line.
In order to install inquirer, please use npm i inquirer@8.2.4
You will be committing a file that contains your database credentials. Make sure that your MySQL password is not used for any other personal accounts, because it will be visible on GitHub. 


## Usage
To begin using the application, run the command “node index.js” in your terminal. This will launch the application and present you with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role.

When choosing to view all departments, a formatted table will appear showing department names and department ids.

When choosing to view all roles, a formatted table will appear showing job titles, role ids, departments, and salaries.

When choosing to view all employees, a formatted table will appear showing employee ids, first names, last names, job titles, departments, salaries, and managers.

When choosing to add a department, you will be prompted to enter the name of the department and this will be added to the database.

When choosing to add a role, you will be prompted to enter the name, salary, and department for the role and this will be added to the database.

When choosing to add an employee, you will be prompted to enter the employee’s first name, last name, role, and manager and this will be added to the database.

When choosing to update an employee role, you will be prompted to select an employee to update and their new role and this information will be updated in the database.


## license
MIT

## Features  
Follow to link video here:

https://drive.google.com/file/d/17ObzJNSc6cofV5QN5NORANdHn0vYAnnn/view

Image 1 (list of options)

![1sql](https://github.com/ReidRym/SQL_Dat_Employee/assets/123789106/239de81e-2230-4afd-a441-ff3a124e0376)

Image 2 (view of all departments)

![2sql](https://github.com/ReidRym/SQL_Dat_Employee/assets/123789106/3e03fd5f-2619-4f54-869f-89a8092a05c7)

Image 3 (view of all departments,roles,and employees)

![3sql](https://github.com/ReidRym/SQL_Dat_Employee/assets/123789106/274c826b-2789-4a97-a01c-05e9880f648b)

Image 4 (added a new department "Road Building")

![4sql](https://github.com/ReidRym/SQL_Dat_Employee/assets/123789106/732cb1d5-9cc3-4a82-b815-efe6d82b0923)

Image 5 (added a new employee "Chuck Norris")

![5sql](https://github.com/ReidRym/SQL_Dat_Employee/assets/123789106/2da0e2ec-2197-498c-8cbb-2833ecdc7923)

Image 6 (updated Chuck Norris from accountant to sales person)

![6sql](https://github.com/ReidRym/SQL_Dat_Employee/assets/123789106/e751f58b-1343-409e-ba71-6eb39a82c1e5)




## Questions
Any questions feel free to contact my email below.

## GitHub
GitHub: [https://github.com/ReidRym](https://github.com/https://github.com/ReidRym)


## Email
Email: [irishreid55@gmail.com](mailto:irishreid55@gmail.com);
