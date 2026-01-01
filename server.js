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

/* 🔑 CORS — THIS FIXES YOUR ISSUE */
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://campus-erp-frontend.onrender.com"
    ],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/assets", authMiddleware, assetRoutes);
app.use("/api/bookings", authMiddleware, bookingRoutes);

app.get("/", (req, res) => {
  res.send("Campus ERP API Running");
});

const PORT = Number(process.env.PORT) || 10000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
