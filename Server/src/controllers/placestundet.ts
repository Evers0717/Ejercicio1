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

export const assignStudentToPlace = async (req: Request, res: Response) => {
  const { studentId, placeId } = req.body;

  try {
    // Find the student and place by their IDs
    const student = await Student.findByPk(studentId);
    const place = await Place.findByPk(placeId);

    // If either the student or place is not found, return an error
    if (!student || !place) {
      return res.status(404).json({ message: "Student or place not found" });
    }

    // Assign the student to the place
    await PlaceStu.create({
      studentId,
      placeId,
    });

    res.json({ message: "Student assigned to place successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updatePlaceStuStatus = async (req: Request, res: Response) => {
  const { studentId, placeId } = req.body;

  try {
    // Find the PlaceStu entry by studentId and placeId
    const placeStu = await PlaceStu.findOne({
      where: {
        studentId,
        placeId,
      },
    });

    // If the entry is not found, return an error
    if (!placeStu) {
      return res.status(404).json({ message: "Entry not found" });
    }

    // Update the done status to 1
    placeStu.done = 1;
    await placeStu.save();

    res.json({ message: "Status updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deletePlaceStuStatus = async (req: Request, res: Response) => {
  const { studentId, placeId } = req.body;

  try {
    const placeStu = await PlaceStu.findOne({
      where: {
        studentId,
        placeId,
      },
    });

    if (!placeStu) {
      return res.status(404).json({ message: "Entry not found" });
    }

    await placeStu.destroy();

    res.json({ message: "Borrado" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
