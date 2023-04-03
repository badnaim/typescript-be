import mongoose from "mongoose";

const db = mongoose
  .connect(
    "mongodb+srv://batnyam17:batnyam17@cluster0.gfvhelw.mongodb.net/sample_mflix"
  )
  .then((res) => {
    console.log("mongodb sample_mflix connected");
  })
  .catch((err) => {
    console.log(err, "mongoose-config aldaa");
  });

export default db;
