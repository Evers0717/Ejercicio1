"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Student = connection_1.default.define("Student", {
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
    dni: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    cellphone: {
        type: sequelize_1.DataTypes.STRING,
    },
    carreer: {
        type: sequelize_1.DataTypes.STRING,
    },
    year: {
        type: sequelize_1.DataTypes.TINYINT,
    },
    hours: {
        type: sequelize_1.DataTypes.SMALLINT,
    },
    obs: {
        type: sequelize_1.DataTypes.TEXT,
    },
}, {
    createdAt: false,
    updatedAt: false,
});
exports.default = Student;
