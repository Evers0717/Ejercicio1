const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("fisc", "root", "Karlandre2", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
