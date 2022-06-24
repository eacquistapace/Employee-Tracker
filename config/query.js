const db = require("./connect");
const connection = require("./connect");

function queriesViewDepartments() {
  const sql = `SELECT * FROM department`;

  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.table(rows);
  });
}

function queriesViewEmployee() {
  const sql = `SELECT * FROM employee`;

  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.table(rows);
  });
}

function queriesViewRoles() {
  const sql = `SELECT * FROM role`;

  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.table(rows);
  });
}

function queriesAddDepartment() {
  const sql = `INSERT INTO department (name) VALUES (?)`;

  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.table(rows([addDepartment.department]));
  });
}

module.exports = {
  queriesViewDepartments,
  queriesViewEmployee,
  queriesViewRoles,
  queriesAddDepartment,
};
