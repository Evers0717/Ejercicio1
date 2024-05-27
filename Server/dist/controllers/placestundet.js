"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignStudentToPlace = exports.getAssignedPlaces = exports.getAssignedStuds = exports.getPlacesStu = void 0;
const placestudents_1 = __importDefault(require("../models/placestudents"));
const student_1 = __importDefault(require("../models/student"));
const places_1 = __importDefault(require("../models/places"));
const getPlacesStu = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listPlacesStu = yield placestudents_1.default.findAll();
    res.json(listPlacesStu);
});
exports.getPlacesStu = getPlacesStu;
const getAssignedStuds = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const places = yield places_1.default.findAll({
            include: {
                model: student_1.default,
                attributes: ["name", "dni"],
            },
            attributes: ["name", "city", "hours"],
        });
        res.json(places);
    }
    catch (error) {
        console.error(error);
    }
});
exports.getAssignedStuds = getAssignedStuds;
const getAssignedPlaces = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const student = yield student_1.default.findAll({
            include: {
                model: places_1.default,
                attributes: ["name", "city", "hours", "contact"],
            },
            attributes: ["name", "dni"],
        });
        res.json(student);
    }
    catch (error) {
        console.error(error);
    }
});
exports.getAssignedPlaces = getAssignedPlaces;
const assignStudentToPlace = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { studentId, placeId } = req.body;
    try {
        // Find the student and place by their IDs
        const student = yield student_1.default.findByPk(studentId);
        const place = yield places_1.default.findByPk(placeId);
        // If either the student or place is not found, return an error
        if (!student || !place) {
            return res.status(404).json({ message: "Student or place not found" });
        }
        // Assign the student to the place
        yield placestudents_1.default.create({
            studentId,
            placeId,
        });
        res.json({ message: "Student assigned to place successfully" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.assignStudentToPlace = assignStudentToPlace;
