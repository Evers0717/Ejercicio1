import { Router } from "express";
import {
  assignStudentToPlace,
  getAssignedPlaces,
  getAssignedStuds,
  getPlacesStu,
} from "../controllers/placestundet";

const router = Router();

router.get("/", getPlacesStu);
router.get("/:id/assignedPlaces", getAssignedPlaces);
router.get("/:id/assignedStuds", getAssignedStuds);
router.post("/assign", assignStudentToPlace);

export default router;
