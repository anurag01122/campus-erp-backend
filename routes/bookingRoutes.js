import express from "express";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("BOOKING ROUTE WORKING");
});

export default router;
