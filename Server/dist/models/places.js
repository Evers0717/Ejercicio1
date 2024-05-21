"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Place = connection_1.default.define("Place", {
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
    city: {
        type: sequelize_1.DataTypes.STRING,
    },
    contact: {
        type: sequelize_1.DataTypes.STRING,
    },
    cellphone: {
        type: sequelize_1.DataTypes.STRING,
    },
    hours: {
        type: sequelize_1.DataTypes.STRING,
    },
    desc: {
        type: sequelize_1.DataTypes.TEXT,
    },
}, {
    createdAt: false,
    updatedAt: false,
});
exports.default = Place;
