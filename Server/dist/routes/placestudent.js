"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const placestundet_1 = require("../controllers/placestundet");
const router = (0, express_1.Router)();
router.get("/", placestundet_1.getPlacesStu);
router.get("/:id/assignedPlaces", placestundet_1.getAssignedPlaces);
router.get("/:id/assignedStuds", placestundet_1.getAssignedStuds);
exports.default = router;