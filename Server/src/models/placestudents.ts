import { DataTypes } from "sequelize";
import db from "../db/connection";
import Student from "./student";
import Place from "./places";

const PlaceStu = db.define(
  "placestudent",
  {
    studentId: {
      type: DataTypes.SMALLINT,
      references: {
        model: Student,
      },
    },
    placeId: {
      type: DataTypes.SMALLINT,
      references: {
        model: Place,
      },
    },
    done: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);
Place.belongsToMany(Student, {
  through: "placestudent",
  foreignKey: "placeId",
  otherKey: "studentId",
});
Student.belongsToMany(Place, {
  through: "placestudent",
  foreignKey: "studentId",
  otherKey: "placeId",
});
export default PlaceStu;
