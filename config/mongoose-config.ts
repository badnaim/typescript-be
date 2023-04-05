import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()


const db = mongoose
  .connect(
    `mongodb+srv://batnyam17:batnyam17@cluster0.gfvhelw.mongodb.net/sample_mflix`
  )
  .then(() => {
    return console.log("connected");
  }).catch((err) => {
    console.log(err, "mongoose-config aldaa");
  });

export default db;
