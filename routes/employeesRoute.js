const express = require("express");
const employees = require("../controllers/employeesController");

const router = express.Router();

// Create a new Employees
router.post("/", employees.create); //http://localhost:5000/employees/

router.get("/", employees.findAll); //http://localhost:5000/employees/

module.exports = router;
