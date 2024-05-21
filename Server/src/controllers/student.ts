import { Request, Response } from "express";
import Student from "../models/student";

export const getStudents = async (req: Request, res: Response) => {
  const listStudents = await Student.findAll();
  res.json(listStudents);
};

export const getStudent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Student.findByPk(id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({
      msg: "no existe ese negro",
    });
  }
};

export const deleteStudent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const student = await Student.findByPk(id);
  if (!student) {
    res.status(404).json({
      msg: `No existe el estudiante con el id ${id}`,
    });
  } else {
    await student.destroy();
    res.json({
      msg: "Borramos al hijuepta",
    });
  }
};

export const postStudent = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    await Student.create(body);
    res.json({
      msg: "Estudiante added",
    });
  } catch (error) {
    console.log(error);
    res.json({
      msg: "Cagaste",
    });
  }
};

export const updateStudent = async (req: Request, res: Response) => {
  const { body } = req;
  const { id } = req.params;
  const student = await Student.findByPk(id);

  try {
    if (student) {
      await student.update(body);
      res.json({
        msg: `Actualizado`,
      });
    } else {
      res.status(404).json({
        msg: `No existe el estudiante con el id ${id}`,
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      msg: "Cagaste",
    });
  }
};
