const Sequelize = require("sequelize");

const connectionDB = new Sequelize("sql-schema", "root", "root", {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
  logging: false,
});

connectionDB
  .authenticate()
  .then(() => {
    console.log("Connection Successful!");
  })
  .catch((err) => {
    console.log("Error coonection to Database");
  });

module.exports = connectionDB;
