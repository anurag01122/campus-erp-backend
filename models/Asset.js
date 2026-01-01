import mongoose from "mongoose";

const assetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    serialNumber: {
      type: String,
      unique: true
    },
    condition: {
      type: String,
      default: "Good"
    },
    isAvailable: {
      type: Boolean,
      default: true
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null
    }
  },
  { timestamps: true }
);

export default mongoose.model("Asset", assetSchema);
