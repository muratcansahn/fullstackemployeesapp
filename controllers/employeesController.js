const db = require("../models");
const Employees = db.employees;
const Op = db.Sequelize.Op; //Need for searching,filtering etc.

// Create and Save a new Employees
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Employees
  const employees = {
    name: req.body.name,
    age: req.body.age,
    country: req.body.country,
    position: req.body.position,
    wagePerYear: req.body.wagePerYear,
    //published: req.body.published ? req.body.published : false,
  };
  console.log(req);

  // Save Employees in the database
  Employees.create(employees)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  Employees.findAll({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
