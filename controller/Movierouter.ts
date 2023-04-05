import express, { Request, Response } from "express";
import movieSch from "../model/movie-model";
import mongoose from "mongoose";
import "../config/mongoose-config";
import { ObjectId } from "mongodb"

const movieRouter = express.Router();


movieRouter.get(`/movie/:id`, async (req: Request, res: Response) => {
  const reqId = req?.params?.id;
  console.log("id", reqId);

  try {
    const ID = {_id: new ObjectId(reqId)}
    const movie = (await movieSch.find(ID));
    console.log("movie", movie);
    if(movie) {
      res.status(200).send(movie)
    }
  } catch(error) {
    res.status(404).send(`error ${reqId}`)
  }
});

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


export default movieRouter;
