import { Request, Response } from "express";
import Place from "../models/places";

export const getPlaces = async (req: Request, res: Response) => {
  const listPlaces = await Place.findAll();
  res.json(listPlaces);
};

export const getPlace = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Place.findByPk(id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({
      msg: "no existe esta localizacion de labor social",
    });
  }
};

export const deletePlace = async (req: Request, res: Response) => {
  const { id } = req.params;
  const placePlace = await Place.findByPk(id);
  if (!placePlace) {
    res.status(404).json({
      msg: `No existe el lugar con el id ${id}`,
    });
  } else {
    await placePlace.destroy();
    res.json({
      msg: "Borramos Peru",
    });
  }
};

export const postPlace = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    await Place.create(body);
    res.json({
      msg: "Place added",
    });
  } catch (error) {
    console.log(error);
    res.json({
      msg: "Cagaste",
    });
  }
};

export const updatePlace = async (req: Request, res: Response) => {
  const { body } = req;
  const { id } = req.params;
  const place = await Place.findByPk(id);

  try {
    if (place) {
      await place.update(body);
      res.json({
        msg: `Actualizado`,
      });
    } else {
      res.status(404).json({
        msg: `No existe lugar con el id ${id}`,
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      msg: "Cagaste",
    });
  }
};
