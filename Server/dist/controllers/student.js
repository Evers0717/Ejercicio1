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
exports.getAllLabors = exports.updateStudent = exports.postStudent = exports.deleteStudent = exports.getStudent = exports.getStudents = void 0;
const student_1 = __importDefault(require("../models/student"));
const places_1 = __importDefault(require("../models/places"));
const getStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listStudents = yield student_1.default.findAll();
    res.json(listStudents);
});
exports.getStudents = getStudents;
const getStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield student_1.default.findByPk(id);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({
            msg: "no existe ese negro",
        });
    }
});
exports.getStudent = getStudent;
const deleteStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const student = yield student_1.default.findByPk(id);
    if (!student) {
        res.status(404).json({
            msg: `No existe el estudiante con el id ${id}`,
        });
    }
    else {
        yield student.destroy();
        res.json({
            msg: "Borramos al hijuepta",
        });
    }
});
exports.deleteStudent = deleteStudent;
const postStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield student_1.default.create(body);
        res.json({
            msg: "Estudiante added",
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: "Cagaste",
        });
    }
});
exports.postStudent = postStudent;
const updateStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const student = yield student_1.default.findByPk(id);
    try {
        if (student) {
            yield student.update(body);
            res.json({
                msg: `Actualizado`,
            });
        }
        else {
            res.status(404).json({
                msg: `No existe el estudiante con el id ${id}`,
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: "Cagaste",
        });
    }
});
exports.updateStudent = updateStudent;
const getAllLabors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const student = yield student_1.default.findByPk(id, {
        include: [places_1.default],
    });
});
exports.getAllLabors = getAllLabors;
