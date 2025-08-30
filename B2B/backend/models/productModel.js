import mongoose from "mongoose";

export const COLOR_ENUM = ["gold", "rose-gold", "white-gold"];
export const SHAPE_ENUM = [
  "round","princess","oval","emerald","pear","marquise",
  "heart","baguette","cushion","radiant","asscher","other"
];

const specsSchema = new mongoose.Schema(
  {
    productWeight:    { type: Number, default: 0 },
    goldWeight:       { type: Number, default: 0 },
    diamondCarat:     { type: Number, default: 0 },
    diamondShape:     { type: String, enum: SHAPE_ENUM, default: "round" },
    numberOfDiamonds: { type: Number, default: 0 },
    makingCharge:     { type: Number, default: 0 },
  },
  { _id: false }
);

const productSchema = new mongoose.Schema({
  name:        { type: String, required: true },
  description: { type: String, required: true },
  price:       { type: Number, required: true },
  discountPrice:      { type: Number, default: 0 },
  discountPercentage: { type: Number, default: 0 },

  // legacy flat list (kept so your existing product page continues to work)
  image: { type: [String], required: true },

  // NEW: images grouped by color
  imagesByColor: {
    "gold":      { type: [String], default: [] },
    "rose-gold": { type: [String], default: [] },
    "white-gold":{ type: [String], default: [] },
  },

  // NEW: carat stored per color (14, 18, or empty string)
  caratByColor: {
    "gold":      { type: String, default: "" },       // "", "14", "18"
    "rose-gold": { type: String, default: "" },
    "white-gold":{ type: String, default: "" },
  },

  defaultColor: { type: String, enum: COLOR_ENUM, default: "gold" },

  category: { type: String, required: true, enum: ["rings","earrings","bracelet","necklace","pendant-set"] },
  specs:    { type: specsSchema, default: () => ({}) },
  bestseller: { type: Boolean, default: false },
  date: { type: Number, required: true },
});

const productModel = mongoose.models.product || mongoose.model("product", productSchema);
export default productModel;
