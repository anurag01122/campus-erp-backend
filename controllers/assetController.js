import Asset from "../models/Asset.js";

// GET all assets
export const getAssets = async (req, res) => {
  try {
    const assets = await Asset.find();
    res.json(assets);
  } catch (error) {
    console.error("GET ASSETS ERROR:", error);
    res.status(500).json({ message: "Failed to fetch assets" });
  }
};

// ADD asset
export const addAsset = async (req, res) => {
  try {
    const { name, category } = req.body;

    if (!name || !category) {
      return res.status(400).json({ message: "Name and category required" });
    }

    const asset = await Asset.create({
      name,
      category,
      createdBy: req.user.id,
    });

    res.status(201).json(asset);
  } catch (error) {
    console.error("ADD ASSET ERROR:", error);
    res.status(500).json({ message: "Failed to add asset" });
  }
};
