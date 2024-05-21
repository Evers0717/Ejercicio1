import { Router } from "express";
import {
  deletePlace,
  getPlace,
  getPlaces,
  postPlace,
  updatePlace,
} from "../controllers/place";

const router = Router();

router.get("/", getPlaces);
router.get("/:id", getPlace);
router.delete("/:id", deletePlace);
router.post("/", postPlace);
router.put("/:id", updatePlace);

export default router;
