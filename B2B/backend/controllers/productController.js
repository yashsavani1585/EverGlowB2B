import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";
import { cleanupTempFiles } from "../middleware/cloudinaryUpload.js";
import { COLOR_ENUM, SHAPE_ENUM } from "../models/productModel.js";

// ---- helpers ----
const parseSpecs = (body) => {
  const shape = (body.diamondShape || "round").toLowerCase();
  return {
    productWeight: Number(body.productWeight ?? 0),
    goldWeight: Number(body.goldWeight ?? 0),
    diamondCarat: Number(body.diamondCarat ?? 0),
    diamondShape: SHAPE_ENUM.includes(shape) ? shape : "other",
    numberOfDiamonds: Number(body.numberOfDiamonds ?? 0),
    makingCharge: Number(body.makingCharge ?? 0),
  };
};

const uploadMany = async (filesArr = []) => {
  if (!Array.isArray(filesArr) || !filesArr.length) return [];
  const sliced = filesArr.slice(0, 10); // cap per color
  const uploaded = await Promise.all(
    sliced.map((f) =>
      cloudinary.uploader.upload(f.path, {
        resource_type: "image",
        folder: "everglow-jewellery",
        transformation: [{ width: 800, height: 800, crop: "fill" }, { quality: "auto" }],
      })
    )
  );
  return uploaded.map((r) => r.secure_url);
};

// ---------- ADD ----------
const addProduct = async (req, res) => {
  console.log(req.body)
  console.log(req.files)
  try {
    const { name, description, price, discountPrice, category, bestseller } = req.body;
    if (!name || !description || !price || !category) {
      return res.json({ success: false, message: "Missing required fields" });
    }

    // uploads by color
    const imagesGold  = await uploadMany(req.files?.goldImages || []);
    const imagesRose  = await uploadMany(req.files?.roseImages || []);
    const imagesWhite = await uploadMany(req.files?.whiteImages || []);

    // must have at least one image overall
    const flatImages = [...imagesGold, ...imagesRose, ...imagesWhite];
    if (!flatImages.length) {
      cleanupTempFiles(req.files);
      return res.json({ success: false, message: "At least one image is required" });
    }

    // carats per color (string: "", "14", "18")
    const caratByColor = {
      gold: String(req.body.goldCarat ?? ""),
      "rose-gold": String(req.body.roseCarat ?? ""),
      "white-gold": String(req.body.whiteCarat ?? ""),
    };

    // defaultColor
    const defRaw = String(req.body.defaultColor || "").toLowerCase();
    let defaultColor = COLOR_ENUM.includes(defRaw) ? defRaw : "gold";
    // ensure default has images; otherwise pick first non-empty
    const firstNonEmpty =
      imagesGold.length ? "gold" : imagesRose.length ? "rose-gold" : "white-gold";
    if (
      (defaultColor === "gold" && !imagesGold.length) ||
      (defaultColor === "rose-gold" && !imagesRose.length) ||
      (defaultColor === "white-gold" && !imagesWhite.length)
    ) {
      defaultColor = firstNonEmpty;
    }

    // discount %
    const priceNum = Number(price);
    const discountNum = discountPrice ? Number(discountPrice) : 0;
    const discountPercentage =
      discountNum > 0 && discountNum < priceNum
        ? Math.round(((priceNum - discountNum) / priceNum) * 100)
        : 0;

    const specs = parseSpecs(req.body);

    const product = new productModel({
      name,
      description,
      category,
      price: priceNum,
      discountPrice: discountNum,
      discountPercentage,
      bestseller: bestseller === "true" || bestseller === true,
      image: flatImages, // legacy flat list
      imagesByColor: {
        gold: imagesGold,
        "rose-gold": imagesRose,
        "white-gold": imagesWhite,
      },
      caratByColor,
      defaultColor,
      specs,
      date: Date.now(),
    });

    await product.save();
    cleanupTempFiles(req.files);
    res.json({ success: true, message: "Product Added Successfully" });
  } catch (err) {
    console.log("addProduct error:", err);
    cleanupTempFiles(req.files);
    res.json({ success: false, message: err.message });
  }
};

// ---------- UPDATE ----------
const updateProduct = async (req, res) => {
  try {
    const { productId, name, description, price, category, bestseller } = req.body;
    if (!productId || !name || !description || !price || !category) {
      return res.json({ success: false, message: "Missing required fields" });
    }

    const priceNum = Number(price);
    const discountRaw = req.body.discountPrice;
    const discountNum =
      discountRaw !== undefined && discountRaw !== "" ? Number(discountRaw) : 0;
    const discountPercentage =
      discountNum > 0 && discountNum < priceNum
        ? Math.round(((priceNum - discountNum) / priceNum) * 100)
        : 0;

    const updateData = {
      name,
      description,
      price: priceNum,
      discountPrice: discountNum,
      discountPercentage,
      category,
      bestseller: bestseller === "true" || bestseller === true,
    };

    // carat updates (optional)
    const caratByColor = {};
    if ("goldCarat" in req.body) caratByColor["gold"] = String(req.body.goldCarat ?? "");
    if ("roseCarat" in req.body) caratByColor["rose-gold"] = String(req.body.roseCarat ?? "");
    if ("whiteCarat" in req.body) caratByColor["white-gold"] = String(req.body.whiteCarat ?? "");
    if (Object.keys(caratByColor).length) {
      updateData.caratByColor = caratByColor;
    }

    // default color (optional)
    if (req.body.defaultColor) {
      const dc = String(req.body.defaultColor).toLowerCase();
      if (COLOR_ENUM.includes(dc)) updateData.defaultColor = dc;
    }

    // specs (optional)
    const specs = parseSpecs(req.body);
    if (Object.values(specs).some((v) => v !== 0 && v !== "other")) {
      updateData.specs = specs;
    }

    // replace images per color if new ones were sent
    const imagesGold  = await uploadMany(req.files?.goldImages || []);
    const imagesRose  = await uploadMany(req.files?.roseImages || []);
    const imagesWhite = await uploadMany(req.files?.whiteImages || []);

    const product = await productModel.findById(productId);
    if (!product) {
      cleanupTempFiles(req.files);
      return res.json({ success: false, message: "Product not found" });
    }

    const nextImagesByColor = { ...product.imagesByColor.toObject?.() || product.imagesByColor };

    if (imagesGold.length)  nextImagesByColor["gold"] = imagesGold;
    if (imagesRose.length)  nextImagesByColor["rose-gold"] = imagesRose;
    if (imagesWhite.length) nextImagesByColor["white-gold"] = imagesWhite;

    // If any color changed, also refresh legacy flat image list
    if (imagesGold.length || imagesRose.length || imagesWhite.length) {
      updateData.imagesByColor = nextImagesByColor;
      const flat = [
        ...(nextImagesByColor["gold"] || []),
        ...(nextImagesByColor["rose-gold"] || []),
        ...(nextImagesByColor["white-gold"] || []),
      ];
      if (flat.length) updateData.image = flat;
    }

    const updated = await productModel.findByIdAndUpdate(productId, updateData, { new: true });
    cleanupTempFiles(req.files);
    res.json({ success: true, message: "Product Updated Successfully", product: updated });
  } catch (err) {
    console.log("updateProduct error:", err);
    cleanupTempFiles(req.files);
    res.json({ success: false, message: err.message });
  }
};

// function for list product
const listProducts = async (req, res) => {
  try {
    // const { color } = req.query;
    // const filter = {};
    // if (color && COLOR_ENUM.includes(String(color).toLowerCase())) {
    //   filter.availableColors = String(color).toLowerCase(); // matches array contains color
    // }
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
// function for removing product
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
// function for single product info
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


// function to get products by category
const getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const products = await productModel.find({ category });
    res.json({ success: true, products });
    
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export {
  listProducts,
  addProduct,
  removeProduct,
  singleProduct,
  updateProduct,
  getProductsByCategory,
};
