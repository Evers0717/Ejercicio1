import { Request, Response } from "express";

import PlaceStu from "../models/placestudents";
import Student from "../models/student";
import Place from "../models/places";
import { Op } from "sequelize";

export const getPlacesStu = async (req: Request, res: Response) => {
  const listPlacesStu = await PlaceStu.findAll();
  res.json(listPlacesStu);
};

export const getAssignedStuds = async (req: Request, res: Response) => {
  try {
    const places = await Place.findAll({
      include: {
        model: Student,
        attributes: ["name", "dni"],
      },
      attributes: ["name", "city", "hours"],
    });

    res.json(places);
  } catch (error) {
    console.error(error);
  }
};

export const getAssignedPlaces = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const student = await Student.findAll({
      include: {
        model: Place,
        attributes: ["name", "city", "hours", "contact"],
      },
      attributes: ["name", "dni"],
    });

    res.json(student);
  } catch (error) {
    console.error(error);
  }
};
