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
const express_1 = __importDefault(require("express"));
const movie_model_1 = __importDefault(require("../model/movie-model"));
require("../config/mongoose-config");
const movieRouter = express_1.default.Router();
movieRouter.get(`/movie/:id`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const reqId = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
    console.log("reqId", reqId);
    try {
        const findedMovie = yield movie_model_1.default.findOne({ _id: reqId });
        console.log(findedMovie);
        res.status(200).send(findedMovie);
    }
    catch (error) {
        res.status(404).send(`error ${reqId}`);
    }
}));
movieRouter.get("/movies", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let limit = Number(req.query.limit);
    console.log(limit);
    const getMovies = yield movie_model_1.default
        .find({ poster: { $exists: true } })
        .limit(limit);
    if (getMovies) {
        res.status(200).json(getMovies);
    }
    else {
        res.send(400).send({ message: "error in movie router" });
    }
}));
movieRouter.get("/movies-id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("generating");
    try {
        const movie = yield movie_model_1.default.find({}).limit(10).select({
            _id: 1,
        });
        res.status(200).send(movie);
        console.log("movie", movie);
    }
    catch (error) {
        console.log(error, "in movie router");
    }
}));
exports.default = movieRouter;
