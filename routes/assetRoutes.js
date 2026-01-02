import express from "express";
import { addAsset, getAssets } from "../controllers/assetController.js";

const router = express.Router();

router.get("/", getAssets);
router.post("/", addAsset); // 🔥 NO MULTER

export default router;
