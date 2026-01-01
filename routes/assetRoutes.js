import express from "express";
import Booking from "../models/Booking.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/request", authMiddleware, async (req, res) => {
  try {
    const booking = await Booking.create({
      hall: req.body.hall,
      date: req.body.date,
      timeSlot: req.body.timeSlot,
      bookedBy: req.user.id,
    });

    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
