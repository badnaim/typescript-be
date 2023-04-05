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
const theater_model_1 = __importDefault(require("../model/theater-model"));
require("../config/mongoose-config");
const theaterRouter = express_1.default.Router();
theaterRouter.get("/theater", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("get theather requested");
    const getTheater = yield theater_model_1.default.findOne();
    res.status(200).send(getTheater);
    try {
        res.send({ status: "ok", body: getTheater });
        console.log(getTheater);
    }
    catch (error) {
        console.log(error, "movieRouter error");
    }
}));
exports.default = theaterRouter;
