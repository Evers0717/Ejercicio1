import { DataTypes } from "sequelize";
import db from "../db/connection";

const Place = db.define(
  "Place",
  {
    name: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    contact: {
      type: DataTypes.STRING,
    },
    cellphone: {
      type: DataTypes.STRING,
    },
    hours: {
      type: DataTypes.STRING,
    },
    desc: {
      type: DataTypes.TEXT,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

export default Place;
