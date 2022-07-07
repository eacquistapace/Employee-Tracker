const { prompt } = require("inquirer");
const {
  queriesViewDepartments,
  queriesViewEmployee,
  queriesViewRoles,
  queriesAddDepartment,
} = require("./config/query.js");

function menu() {
  prompt([
    {
      type: "list",
      name: "mainMenu",
      message: "Please choose from the following options.",
      choices: [
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "Add a Department",
        "Add a Role",
        "Add an Employee",
        "Update an Employee Role",
      ],
    },
  ]).then(({ mainMenu }) => {
    console.log(mainMenu);
    if (mainMenu === "View All Departments") {
      viewDepartments();
    } else if (mainMenu === "View All Roles") {
      viewRoles();
    } else if (mainMenu === "View All Employees") {
      viewEmployee();
    } else if (mainMenu === "Add a Department") {
      addDepartment();
    } else if (mainMenu === "Add a Role") {
      addRole();
    } else if (mainMenu === "Add an Employee") {
      addEmployee();
    } else if (mainMenu === "Update an Employee Role") {
      updateEmployee();
    }
  });
}

menu();

//Functions for user interaction
function viewEmployee() {
  queriesViewEmployee();
  menu();
}
function addEmployee() {
  prompt([
    {
      type: "input",
      name: "first_name",
      message: "Enter Employee's First Name",
    },
    {
      type: "input",
      name: "last_name",
      message: "Enter Employee's Last Name",
    },
  ]);
  queriesAddEmployee();
  menu();
}
function updateEmployee() {
  console.log("updateEmployee");
}
function viewDepartments() {
  //from query.js-- required it in above
  queriesViewDepartments();
  menu();
}
function addDepartment() {
  console.log("addDepartment");
  prompt([
    {
      type: "input",
      name: "department",
      message: "Enter the Department's Name",
    },
  ]);
  queriesAddDepartment();
  menu();
}
function viewRoles() {
  queriesViewRoles();
  menu();
}
function addRole() {
  console.log("addRole");
}
