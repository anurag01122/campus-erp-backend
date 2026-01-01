import fs from "fs";
console.log("📂 routes folder contains:", fs.readdirSync("./routes"));

console.log("🔥 SERVER FILE LOADED FROM:", process.cwd());
import authMiddleware from "./middleware/authMiddleware.js";

import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import assetRoutes from "./routes/assetRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";




dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/assets", authMiddleware, assetRoutes);
app.use("/api/bookings", bookingRoutes);


app.get("/", (req, res) => {
  res.send("Campus ERP API Running");
});

const PORT = Number(process.env.PORT) || 5000;

app.listen(PORT, "127.0.0.1", () => {
  console.log(`Server running on http://127.0.0.1:${PORT}`);
});
