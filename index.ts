import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import movieRouter from "./controller/Movierouter";
import db from "./config/mongoose-config";
import mongoose from "mongoose"

dotenv.config()

const app: Express = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(movieRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("express + typescript server");
});

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
