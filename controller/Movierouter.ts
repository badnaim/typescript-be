import express, { Request, Response } from "express";
import movieSch from "../model/movie-model";
import mongoose from "mongoose";
import "../config/mongoose-config";

const movieRouter = express.Router();

movieRouter.get(`/movie/:id`, async (req: Request, res: Response) => {
  const reqId: string = req?.params?.id;
  console.log("id", reqId);

  try {
    const movie = await movieSch.find({ _id: reqId });
    console.log("movie", movie);
    if (movie) {
      res.status(200).send(movie);
    }
  } catch (error) {
    res.status(404).send(`error ${reqId}`);
  }
});

movieRouter.get("/movies", async (req, res) => {
  let limit: number = Number(req.query.limit);
  console.log(limit);

  const getMovies = await movieSch
    .find({ poster: { $exists: true } })
    .limit(limit);

  if (getMovies) {
    res.status(200).json(getMovies);
  } else {
    res.send(400).send({ message: "error in movie router" });
  }
});

movieRouter.get("/movies-id", async (req: Request, res: Response): Promise<void> => {
  console.log('static path generate');

  try {
    const movie = await movieSch.find({}).limit(10).select({
      _id: 1,
    });
    res.status(200).send(movie);
  } catch (error) {
    console.log(error, "in movie router")
  }
})

export default movieRouter;
