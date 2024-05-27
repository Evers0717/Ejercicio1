import { Router } from "express";
import {
  assignStudentToPlace,
  deletePlaceStuStatus,
  getAssignedPlaces,
  getAssignedStuds,
  getPlacesStu,
  updatePlaceStuStatus,
} from "../controllers/placestundet";

const router = Router();

router.get("/", getPlacesStu);
router.get("/:id/assignedPlaces", getAssignedPlaces);
router.get("/:id/assignedStuds", getAssignedStuds);
router.post("/assign", assignStudentToPlace);
router.put("/updateStatus", updatePlaceStuStatus);
router.delete("/delete", deletePlaceStuStatus);

export default router;
