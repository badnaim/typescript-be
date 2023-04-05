import express, {Router} from "express";
import movieSch from "../model/movie-model"
import mongoose from "mongoose"
import db from "../config/mongoose-config";


const movieRouter = express.Router();

movieRouter.get("/movies", async (req, res) => {
  console.log("movies get huselt orj irle")
  const getTheater = await movieSch.findOne({})
  if(getTheater) {
    res.status(200).json(getTheater)
  }else {
    res.send(400).send({ message: "error in movie router"})
  }
})

export default movieRouter;
