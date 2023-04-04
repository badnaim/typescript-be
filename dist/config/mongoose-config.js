"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const db = mongoose_1.default
    .connect("mongodb+srv://batnyam17:batnyam17@cluster0.gfvhelw.mongodb.net/sample_mflix")
    .then((res) => {
    console.log("mongodb sample_mflix connected");
})
    .catch((err) => {
    console.log(err, "mongoose-config aldaa");
});
exports.default = db;
