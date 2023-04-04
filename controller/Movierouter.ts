import express, { Router } from "express";
import TheaterSch from "../model/theater";

const movieRouter = express.Router();

movieRouter.get("/getTheater", async (req, res) => {
  console.log("get theather requested");
  const getTheater = await TheaterSch.find({});
  try {
    res.send({ status: "ok", body: getTheater });
    console.log(getTheater);
  } catch (error) {
    console.log(error, "movieRouter error");
  }
});

export default movieRouter;
