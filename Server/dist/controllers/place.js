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
exports.updatePlace = exports.postPlace = exports.deletePlace = exports.getPlace = exports.getPlaces = void 0;
const places_1 = __importDefault(require("../models/places"));
const getPlaces = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listPlaces = yield places_1.default.findAll();
    res.json(listPlaces);
});
exports.getPlaces = getPlaces;
const getPlace = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield places_1.default.findByPk(id);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({
            msg: "no existe esta localizacion de labor social",
        });
    }
});
exports.getPlace = getPlace;
const deletePlace = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const placePlace = yield places_1.default.findByPk(id);
    if (!placePlace) {
        res.status(404).json({
            msg: `No existe el lugar con el id ${id}`,
        });
    }
    else {
        yield placePlace.destroy();
        res.json({
            msg: "Borramos Peru",
        });
    }
});
exports.deletePlace = deletePlace;
const postPlace = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield places_1.default.create(body);
        res.json({
            msg: "Place added",
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: "Cagaste",
        });
    }
});
exports.postPlace = postPlace;
const updatePlace = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const place = yield places_1.default.findByPk(id);
    try {
        if (place) {
            yield place.update(body);
            res.json({
                msg: `Actualizado`,
            });
        }
        else {
            res.status(404).json({
                msg: `No existe lugar con el id ${id}`,
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
exports.updatePlace = updatePlace;
