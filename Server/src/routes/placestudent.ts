import { Router } from "express";
import {
  getAssignedPlaces,
  getAssignedStuds,
  getPlacesStu,
} from "../controllers/placestundet";

const router = Router();

router.get("/", getPlacesStu);
router.get("/:id/assignedPlaces", getAssignedPlaces);
router.get("/:id/assignedStuds", getAssignedStuds);

export default router;
