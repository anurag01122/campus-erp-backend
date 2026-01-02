import mongoose from "mongoose";

const assetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    createdBy: {
      type: String, // 🔥 TEMPORARY — NOT ObjectId
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Asset", assetSchema);
