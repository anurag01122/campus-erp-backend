import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";
import assetRoutes from "./routes/assetRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import authMiddleware from "./middleware/authMiddleware.js";

dotenv.config();
connectDB();

const app = express();

/* 🔥 CORS FIX */
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/assets", authMiddleware, assetRoutes);
app.use("/api/bookings", bookingRoutes);

app.get("/", (req, res) => {
  res.send("Campus ERP API Running");
});

const PORT = Number(process.env.PORT) || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
