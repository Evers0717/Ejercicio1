"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("fisc", "root", "Karlandre2", {
    host: "localhost",
    dialect: "mysql",
});
exports.default = sequelize;
