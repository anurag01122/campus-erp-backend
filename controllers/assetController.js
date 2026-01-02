import mongoose from "mongoose";

export const addAsset = async (req, res) => {
  try {
    const { name, category } = req.body;

    if (!name || !category) {
      return res.status(400).json({ message: "Name and category required" });
    }

    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const asset = await Asset.create({
      name,
      category,
      createdBy: new mongoose.Types.ObjectId(req.user.id), // ✅ FIX
    });

    res.status(201).json(asset);
  } catch (error) {
    console.error("ADD ASSET ERROR 👉", error);
    res.status(500).json({ message: "Failed to add asset" });
  }
};
