import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    hall: { type: String, required: true },
    bookedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    date: { type: String, required: true },
    timeSlot: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
