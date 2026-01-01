import Asset from "../models/Asset.js";

// Admin: Add asset
export const addAsset = async (req, res) => {
  const asset = await Asset.create(req.body);
  res.status(201).json(asset);
};

// Get all assets
export const getAssets = async (req, res) => {
  const assets = await Asset.find().populate("assignedTo", "name email");
  res.json(assets);
};

// Member: Request asset
export const requestAsset = async (req, res) => {
  const asset = await Asset.findById(req.params.id);

  if (!asset || !asset.isAvailable) {
    return res.status(400).json({ message: "Asset not available" });
  }

  asset.isAvailable = false;
  asset.assignedTo = req.user.id;
  await asset.save();

  res.json({ message: "Asset assigned successfully" });
};

// Admin: Return asset
export const returnAsset = async (req, res) => {
  const asset = await Asset.findById(req.params.id);

  asset.isAvailable = true;
  asset.assignedTo = null;
  await asset.save();

  res.json({ message: "Asset returned" });
};
