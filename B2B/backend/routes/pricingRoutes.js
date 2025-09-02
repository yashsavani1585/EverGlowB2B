// backend/routes/pricingRoutes.js
import express from "express";
import { getGoldRate, getMetalsRaw } from "../controllers/goldrateController.js";

const router = express.Router();

// FE uses this:  GET /api/pricing/gold-rate?carat=14
router.get("/gold-rate", getGoldRate);

// Optional debug endpoint
router.get("/metals-raw", getMetalsRaw);

export default router;
