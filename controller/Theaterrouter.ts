import express, { Request, Response } from "express";
import TheaterSch from "../model/theater-model";
import mongoose from "mongoose";
import "../config/mongoose-config";

const theaterRouter = express.Router();

theaterRouter.get("/theater", async (req: Request, res: Response) => {
  console.log("get theather requested");
  const getTheater = await TheaterSch.findOne();
  res.status(200).send(getTheater);
  try {
    res.send({ status: "ok", body: getTheater });
    console.log(getTheater);
  } catch (error) {
    console.log(error, "movieRouter error");
  }
});

export default theaterRouter;
