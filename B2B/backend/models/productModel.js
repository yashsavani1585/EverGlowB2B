// models/productModel.js
import mongoose from "mongoose";

export const COLOR_ENUM = ["gold", "rose-gold", "white-gold"];
export const SHAPE_ENUM = [
  "round","princess","oval","emerald","pear","marquise",
  "heart","baguette","cushion","radiant","asscher","other"
];

const specsSchema = new mongoose.Schema(
  {
    productWeight:    { type: Number, default: 0 }, // gross
    goldWeight:       { type: Number, default: 0 }, // net gold weight used for pricing
    diamondCarat:     { type: Number, default: 0 },
    diamondShape:     { type: String, enum: SHAPE_ENUM, default: "round" },
    numberOfDiamonds: { type: Number, default: 0 },
    makingCharge:     { type: Number, default: 0 }, // (legacy) keep for backward compatibility if you already used it
  },
  { _id: false }
);

const productSchema = new mongoose.Schema({
  name:        { type: String, required: true },
  description: { type: String, required: true },
  price:       { type: Number, required: true },  // base/legacy price (kept so old pages don’t break)
  discountPrice:      { type: Number, default: 0 },
  discountPercentage: { type: Number, default: 0 },

  // legacy flat list (kept so your existing product page continues to work)
  image: { type: [String], required: true },

  // images grouped by color
  imagesByColor: {
    "gold":      { type: [String], default: [] },
    "rose-gold": { type: [String], default: [] },
    "white-gold":{ type: [String], default: [] },
  },

  // ✅ NEW: SKU per color
  skuByColor: {
    "gold":      { type: String, default: "" },
    "rose-gold": { type: String, default: "" },
    "white-gold":{ type: String, default: "" },
  },

  // default UI color for gallery/selectors
  defaultColor: { type: String, enum: COLOR_ENUM, default: "gold" },

  // ✅ NEW: pricing controls (set from Admin)
  gstPercent:           { type: Number, default: 3 },   // shown in MoreInfo pricing
  makingChargePerGram:  { type: Number, default: 0 },   // used with specs.goldWeight

  category: { type: String, required: true, enum: ["rings","earrings","bracelet","necklace","pendant-set"] },
  specs:    { type: specsSchema, default: () => ({}) },
  bestseller: { type: Boolean, default: false },
  date: { type: Number, required: true },
});

const productModel = mongoose.models.product || mongoose.model("product", productSchema);
export default productModel;
