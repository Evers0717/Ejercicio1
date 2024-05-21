import { DataTypes } from "sequelize";
import db from "../db/connection";

const Student = db.define(
  "Student",
  {
    name: {
      type: DataTypes.STRING,
    },
    dni: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    cellphone: {
      type: DataTypes.STRING,
    },
    carreer: {
      type: DataTypes.STRING,
    },
    year: {
      type: DataTypes.TINYINT,
    },
    hours: {
      type: DataTypes.SMALLINT,
    },
    obs: {
      type: DataTypes.TEXT,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

export default Student;
