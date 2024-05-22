"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const student_1 = __importDefault(require("./student"));
const places_1 = __importDefault(require("./places"));
const PlaceStu = connection_1.default.define("placestudent", {
    studentId: {
        type: sequelize_1.DataTypes.SMALLINT,
        references: {
            model: student_1.default,
        },
    },
    placeId: {
        type: sequelize_1.DataTypes.SMALLINT,
        references: {
            model: places_1.default,
        },
    },
    done: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
}, {
    createdAt: false,
    updatedAt: false,
});
places_1.default.belongsToMany(student_1.default, {
    through: "placestudent",
    foreignKey: "placeId",
    otherKey: "studentId",
});
student_1.default.belongsToMany(places_1.default, {
    through: "placestudent",
    foreignKey: "studentId",
    otherKey: "placeId",
});
exports.default = PlaceStu;
