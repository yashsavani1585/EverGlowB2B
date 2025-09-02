// backend/controllers/goldRateController.js
import metalsAxios from "../config/metalsClient.js";

const METALS = process.env.METALS_METALS || "XAU";
const BASE   = process.env.METALS_BASE_CURRENCY || "INR";
const CURRS  = process.env.METALS_CURRENCIES || "INR";
const UNIT   = process.env.METALS_WEIGHT_UNIT || "gram";
const TTL    = Number(process.env.METALS_CACHE_TTL || 60); // seconds

// simple in-memory cache
let cache = { ts: 0, payload: null };

function purityMultiplier(carat) {
  const n = Number(String(carat).replace(/[^0-9]/g, "")) || 24;
  return Math.max(0.3, Math.min(n / 24, 1));
}

async function fetchLatestMetals() {
  const now = Date.now();
  if (cache.payload && now - cache.ts < TTL * 1000) return cache.payload;

  const { data } = await metalsAxios.get("", {
    // NOTE: baseURL already includes /v1/latest
    params: {
      metals: METALS,          // XAU or XAU,XAG,XPT,XPD
      base_currency: BASE,     // INR (or USD/KWD)
      currencies: CURRS,       // optional list
      weight_unit: UNIT,       // gram
    },
  });

  if (data?.status !== "success") {
    throw new Error("Metals API error");
  }
  cache = { ts: now, payload: data.data }; // provider returns { status, data: { ... } }
  return cache.payload;
}

export async function getGoldRate(req, res) {
  try {
    const carat = req.query.carat || "14"; // "14" or "14K" both ok
    const payload = await fetchLatestMetals();
    const xau = payload?.metal_prices?.XAU;

    if (!xau) {
      return res.status(502).json({ success: false, message: "XAU price not found in provider response" });
    }

    // try direct ladder first (price_24k, price_22k, ...)
    const want = String(carat).toUpperCase().replace("K", "");
    const ladderKey = {
      "24": "price_24k",
      "22": "price_22k",
      "21": "price_21k",
      "20": "price_20k",
      "18": "price_18k",
      "14": "price_14k",
      "10": "price_10k",
      "9":  "price_9k",
    }[want];

    let perGram;
    if (ladderKey && typeof xau[ladderKey] === "number") {
      perGram = xau[ladderKey];
    } else if (typeof xau.price_24k === "number") {
      perGram = xau.price_24k * purityMultiplier(want); // fallback
    } else if (typeof xau.price === "number") {
      perGram = xau.price * purityMultiplier(want);     // ultimate fallback
    } else {
      return res.status(502).json({ success: false, message: "No usable price field for XAU" });
    }

    return res.json({
      success: true,
      carat: String(carat),
      ratePerGram: Math.round(perGram), // integer ₹; change rounding if you prefer
      currency: payload.base_currency,
      weight_unit: payload.weight_unit,
      ts: payload.timestamp,
    });
  } catch (e) {
    console.error("[getGoldRate] error:", e);
    return res.status(500).json({ success: false, message: e.message || "Failed to fetch gold rate" });
  }
}

// (Optional) raw passthrough for debugging
export async function getMetalsRaw(req, res) {
  try {
    const payload = await fetchLatestMetals();
    res.json({ success: true, data: payload });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message || "Failed to fetch metals" });
  }
}
