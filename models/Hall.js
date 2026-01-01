import mongoose from "mongoose";

const hallSchema = new mongoose.Schema({
  name: String,
  capacity: Number,
  location: String
});

export default mongoose.model("Hall", hallSchema);

