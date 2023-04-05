import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(`${process.env.MONGODB_SECRET}`)
  .then(() => {
    return console.log("mongodb connected");
  })
  .catch((err) => {
    console.log(err, "mongoose-config aldaa");
  });
