const express = require("express");

//Routes
const employeesRoute = require("./routes/employeesRoute");

const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

//Database
const db = require("./models");
///In development, you may need to drop existing tables and re-sync database. Just use force: true as following code
db.sequelize.sync().then(() => {});

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/employees", employeesRoute); //http://localhost:5000/employees/

// if provider supports any port use it , else use port 5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
