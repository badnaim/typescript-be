"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const Movierouter_1 = __importDefault(require("./controller/Movierouter"));
require("./config/mongoose-config");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(Movierouter_1.default);
app.get("/", (req, res) => {
    res.send("express + typescript server");
});
app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
});
