// controllers/wishlistController.js
import userModel from "../models/userModel.js";

const normColorKey = (c) => {
  const k = String(c || "").trim().toLowerCase();
  if (!k || k === "-" || k === "null" || k === "undefined") return "-";
  if (k === "rosegold" || k === "rose-gold" || k === "rose") return "rose-gold";
  if (k === "whitegold" || k === "white-gold" || k === "white") return "white-gold";
  if (k === "yellow" || k === "gold") return "gold";
  return k;
};
const getUID = (req) => req.user?.id || req.body.userId;

export const addWishlist = async (req, res) => {
  try {
    const userId = getUID(req);
    const { itemId, color = null } = req.body;
    if (!userId || !itemId) return res.json({ success: false, message: "Missing fields" });

    const user = await userModel.findById(userId);
    if (!user) return res.json({ success: false, message: "User not found" });

    const key = `${itemId}:${normColorKey(color)}`;
    if (!user.wishlist.includes(key)) user.wishlist.push(key);

    await user.save();
    res.json({ success: true, message: "Added to wishlist" });
  } catch (err) {
    console.error(err);
    res.json({ success: false, message: err.message });
  }
};

export const removeWishlist = async (req, res) => {
  try {
    const userId = getUID(req);
    const { itemId, color = null } = req.body;
    if (!userId || !itemId) return res.json({ success: false, message: "Missing fields" });

    const user = await userModel.findById(userId);
    if (!user) return res.json({ success: false, message: "User not found" });

    const key = `${itemId}:${normColorKey(color)}`;
    user.wishlist = (user.wishlist || []).filter((k) => k !== key);

    await user.save();
    res.json({ success: true, message: "Removed from wishlist" });
  } catch (err) {
    console.error(err);
    res.json({ success: false, message: err.message });
  }
};

export const getWishlist = async (req, res) => {
  try {
    const userId = getUID(req);
    if (!userId) return res.json({ success: false, message: "Missing userId" });

    const user = await userModel.findById(userId);
    if (!user) return res.json({ success: false, message: "User not found" });

    res.json({ success: true, wishlist: user.wishlist || [] });
  } catch (err) {
    console.error(err);
    res.json({ success: false, message: err.message });
  }
};
