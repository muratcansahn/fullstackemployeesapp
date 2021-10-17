// SQL Config
module.exports = {
  HOST: "employees.c0hchptrqvrr.eu-central-1.rds.amazonaws.com",
  USER: "admin",
  PASSWORD: "b81fd1c7",
  DB: "employees",
  port: "3306",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
