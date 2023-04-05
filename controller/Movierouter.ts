import express, { Request, Response } from "express";
import movieSch from "../model/movie-model";
import mongoose from "mongoose";
import "../config/mongoose-config";

const movieRouter = express.Router();

movieRouter.get("/movies", async (req, res) => {
  console.log("movies get huselt orj irle");
  const getTheater = await movieSch
    .find({ poster: { $exists: true } })
    .limit(8);
  if (getTheater) {
    res.status(200).json(getTheater);
  } else {
    res.send(400).send({ message: "error in movie router" });
  }
});

movieRouter.get(`/movie/:id`, async (req: Request, res: Response) => {
  console.log("id", req.params.id);

  const movie = await movieSch.findOne({ _id: req.params.id }).limit(1);
  // if (movie) {
  //   return res.status(200).json(movie);
  // } else {
  //   return res.send(400).send({ message: "error" });
  // }
  console.log("movie", movie);
  return res.status(200).send(movie);
});

export default movieRouter;
