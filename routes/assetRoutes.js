import express from "express";
import Asset from "../models/Asset.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// GET all assets
router.get("/", authMiddleware, async (req, res) => {
  try {
    const assets = await Asset.find();
    res.json(assets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CREATE asset
router.post("/", authMiddleware, async (req, res) => {
  try {
    const asset = await Asset.create({
      name: req.body.name,
      category: req.body.category,
    });
    res.status(201).json(asset);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
