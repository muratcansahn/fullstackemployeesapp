module.exports = (sequelize, Sequelize) => {
  const Employees = sequelize.define("employees", {
    // Model attributes are defined here
    name: {
      type: Sequelize.STRING,
    },
    age: {
      type: Sequelize.INTEGER,
    },
    country: {
      type: Sequelize.STRING,
    },
    position: {
      type: Sequelize.STRING,
    },
    wagePerYear: {
      type: Sequelize.INTEGER,
    },
  });

  return Employees;
};
