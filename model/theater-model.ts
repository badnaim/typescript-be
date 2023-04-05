import mongoose, { Schema } from "mongoose";

const theaterSchema: Schema = new Schema({
  theaterId: Number,
  location: {
    address: {
      street1: String,
      city: String,
      state: String,
      zipcode: String,
    },
    geo: {
      type: String,
      coordinates: [Number],
    },
  },
},
{
  collection: "theaters"
});

const TheaterSch = mongoose.model("theater", theaterSchema, "theaters");

export default TheaterSch;
