import { Router } from "express";
import {
  deleteStudent,
  getStudent,
  getStudents,
  postStudent,
  updateStudent,
} from "../controllers/student";

const router = Router();

router.get("/", getStudents);
router.get("/:id", getStudent);
router.delete("/:id", deleteStudent);
router.post("/", postStudent);
router.put("/:id", updateStudent);

export default router;
