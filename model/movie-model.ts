import mongoose from "mongoose"

const movieSchema = new mongoose.Schema({
  plot: String,
  genres: [String],
  runtime: Number,
  title: String,
},
{
  collection: "movies",
})

const movieSch = mongoose.model("movie", movieSchema, "movies")

export default movieSch;