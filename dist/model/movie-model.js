"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const movieSchema = new mongoose_1.default.Schema({
    plot: String,
    genres: [String],
    runtime: Number,
    title: String,
}, {
    collection: "movies",
});
const movieSch = mongoose_1.default.model("movie", movieSchema, "movies");
exports.default = movieSch;
