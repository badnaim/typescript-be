import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    _id: String,
    plot: String,
    countries: [String],
    year: Number,
    directors: [String],
    genres: [String],
    runtime: Number,
    title: String,
    poster: String,
  },
  {
    collection: "movies",
  }
);

const movieSch = mongoose.model("movie", movieSchema, "movies");

export default movieSch;
