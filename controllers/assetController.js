const addAsset = async (req, res) => {
  try {
    const { name, category } = req.body;

    if (!name || !category) {
      return res.status(400).json({ message: "Name and category are required" });
    }

    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "User not authorized" });
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
