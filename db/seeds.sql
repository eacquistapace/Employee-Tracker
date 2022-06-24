INSERT INTO department(department_name)
VALUES
    ("Sales"),
    ("Accounting"),
    ("Legal");

INSERT INTO role(title, salary, department_id)
VALUES
    ("Sales Lead", 28000, 1),
    ("Salesperson", 23000, 1),
    ("Accounting Lead", 87000, 2),
    ("Accountant", 31000, 2),
    ("Legal Lead", 130000, 3),
    ("Lawyer", 55000, 3);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
    ("Patrick", "Luffy", 1, null),
    ("Finn", "Robin", 2, 1),
    ("Seamus", "Zoro", 3, null),
    ("Jane", "Nami", 4, 3),
    ("John", "Chopper", 5, null),
    ("Samantha", "Brook", 6, 5);