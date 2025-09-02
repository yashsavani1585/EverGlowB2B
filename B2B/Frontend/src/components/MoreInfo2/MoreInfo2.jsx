import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../../context/cartContext";
import { isAuthenticated } from "../../utils/auth";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/thumbs";
import { Thumbs, Autoplay } from "swiper/modules";

import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";

import img1 from "../../assets/productImg.png"; // fallback
import emptyImg from "../../assets/Empty.png";

import ProductCard from "../ProductCard/ProductCard";

/* -------------------- helpers -------------------- */
const normalize = (c) => String(c || "").trim().toLowerCase();
const formatIN = (n) => Number(n || 0).toLocaleString("en-IN");

// UI chip -> canonical API color
const mapUiToColor = (v) => {
  const k = normalize(v);
  if (k === "rose" || k === "rosegold" || k === "rose-gold") return "rose-gold";
  if (k === "white" || k === "whitegold" || k === "white-gold") return "white-gold";
  if (k === "yellow" || k === "gold") return "gold";
  return k || null;
};

// canonical API color -> UI chip
const mapApiToUi = (v) => {
  const k = normalize(v);
  if (k === "rose-gold") return "rose";
  if (k === "white-gold") return "white";
  return "yellow"; // default to yellow/gold
};

const CHIP_CLASS = {
  rose: "bg-[#b76e79]",
  white: "bg-gray-300",
  yellow: "bg-yellow-400",
};

const backendUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/api";

/* ================================================== */
const MoreInfo2 = () => {
  const params = useParams();
  const [qs] = useSearchParams();

  // accept /:id or ?id=... or ?productId=...
  const productId = params.id || qs.get("id") || qs.get("productId");

  const [product, setProduct] = useState(null);
  const [variant, setVariant] = useState("rose"); // UI chip: 'rose' | 'white' | 'yellow'
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fetchErr, setFetchErr] = useState("");
  const materials = ["9K", "10K", "14K", "18K"];
  const [selectedMaterial, setSelectedMaterial] = useState("14K");
   const [liveRate, setLiveRate] = useState(null); // ₹/g for selectedMaterial

  const mainSwiperRef = useRef(null);
  const navigate = useNavigate();
  const { add } = useCart();

  /* ---------- actions ---------- */
  const handleAddToCart = async () => {
    if (!isAuthenticated()) return navigate("/auth");
    if (loading || !product?._id) return; // guard
    await add(product._id, 1, selectedColor || null);
  };

  const handleBuyNow = async () => {
    if (!isAuthenticated()) return navigate("/auth");
    if (loading || !product?._id) return; // guard
    await add(product._id, 1, selectedColor || null);
    navigate("/cart");
  };

  /* ---------- fetch product ---------- */
    useEffect(() => {
    let active = true;
    (async () => {
      try {
        setPriceErr("");
        const { data } = await axios.get(`${backendUrl}/pricing/gold-rate`, {
          params: { carat: caratParam(selectedMaterial) }
        });
        if (!active) return;
        if (data?.success && typeof data.ratePerGram === "number") {          
          setLiveRate(data.ratePerGram);
        } else {
          setPriceErr("Live rate unavailable. Using base price.");
          setLiveRate(null);
        }
      } catch (e) {
        setPriceErr("Live rate error. Using base price.");
        setLiveRate(null);
      }
    })();
    return () => { active = false; };
  }, [selectedMaterial]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        setFetchErr("");
        setProduct(null);

        if (!productId) {
          setFetchErr("No product id found in route/query.");
          return;
        }

        // Primary: POST body { productId } (your original contract)
        const { data } = await axios.post(`${backendUrl}/product/single`, { productId, _id: productId });
        if (!mounted) return;

        // Accept a few common shapes
        const maybeProduct =
          data?.product ??
          data?.data?.product ??
          (data?.success ? data.product : null);

        if (!maybeProduct) {
          console.warn("[MoreInfo2] Unexpected response for product/single:", data);
          setFetchErr("Product not found.");
          setProduct(null);
          return;
        }

        setProduct(maybeProduct);
      } catch (err) {
        console.error("[MoreInfo2] Fetch error:", err);
        setFetchErr(err?.message || "Failed to load product.");
        setProduct(null);
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [productId]);

  // default chip from backend color (if present)
  useEffect(() => {
    if (product?.defaultColor) {
      // handle "rose" or "rose-gold" etc.
      setVariant(mapApiToUi(mapUiToColor(product.defaultColor)));
    }
  }, [product?.defaultColor]);

  /* ---------- derived fields ---------- */
  const name = product?.name || "—";
  const desc = product?.description || "";
  const price = Number(product?.price || 0);
  const discount = Number(product?.discountPrice || 0);
  const hasDiscount = discount > 0 && discount < price;
  const finalPrice = hasDiscount ? discount : price;
  const pct = hasDiscount
    ? product?.discountPercentage ?? Math.round(((price - discount) / (price || 1)) * 100)
    : 0;

  // details
  const specs = product?.specs || {};

  // colors available (canonical) -> MUST come before using selectedColor anywhere
  // const availableColors = useMemo(
  // 	 () => (product?.imagesByColor ? Object.keys(product.imagesByColor).map(normalize) : []),
  // 	 [product]
  // );
  const availableColors = useMemo(() => {
    const src = product?.imagesByColor;
    if (!src || typeof src !== "object") return [];
    const keys = Object.keys(src).map(mapUiToColor).filter(Boolean); // <-- use canonical
    return Array.from(new Set(keys));
  }, [product]);

  // selected canonical color (if available)
  const selectedColor = useMemo(() => {
    const want = mapUiToColor(variant);
    return availableColors.includes(want) ? want : null;
  }, [variant, availableColors]);

  // purity – now safely depends on selectedColor
// current color (gold / rose-gold / white-gold)
const purity = useMemo(() => {
  const map = product?.caratByColor || {};
  const fromColor = selectedColor && map[selectedColor];

  // if user clicked a material (9K, 10K, 14K, 18K) → show that
  if (selectedMaterial) {
    return `${selectedMaterial} ${product?.defaultColor ? `(${product.defaultColor})` : ""}`;
  }

  // fallback to backend carat map
  return fromColor || map.gold || "14K Yellow Gold";
}, [product?.caratByColor, selectedColor, selectedMaterial, product?.defaultColor]);


  // Normalize image field to array
  const rawImages = useMemo(() => {
    if (!product?.image) return [];
    return Array.isArray(product.image) ? product.image : [product.image];
  }, [product]);

  const allImages = useMemo(
    () => (rawImages.length ? rawImages : [img1]),
    [rawImages]
  );

  // 1) if backend sends grouped images (normalize keys like "rose" -> "rose-gold")
  const imagesByColorFromApi = useMemo(() => {
    const src = product?.imagesByColor;
    if (!src || typeof src !== "object") return null;

    const out = { gold: [], "rose-gold": [], "white-gold": [] };
    for (const [rawKey, arr] of Object.entries(src)) {
      const key = mapUiToColor(rawKey);              // <-- normalize every key
      if (!key || !Array.isArray(arr)) continue;
      out[key].push(...arr.filter(Boolean));
    }
    return out;
  }, [product]);

  const [priceErr, setPriceErr] = useState("")
const gstPct = Number(product?.gstPercent ?? 3);
const mcPerGram = Number(product?.makingChargePerGram || 0);
const goldWeight = Number(product?.specs?.goldWeight || 0);
const metalCost = liveRate ? Math.max(0, liveRate) * Math.max(0, goldWeight) : 0;
const makingCost = mcPerGram * Math.max(0, goldWeight);
const dynamicSubTotal = liveRate ? (metalCost + makingCost) : finalPrice + (product?.specs?.makingCharge || 0);
const gstAmount = Math.round((dynamicSubTotal * (gstPct / 100)));
const dynamicTotal = dynamicSubTotal + gstAmount;
// helper: carat string used by backend
const caratParam = (mat) => (typeof mat === "string" ? mat.toUpperCase().replace("K","") : "14");
const skuForColor = useMemo(() => {
  const map = product?.skuByColor || {};
  return (selectedColor && map[selectedColor]) || map[product?.defaultColor] || "";
}, [product?.skuByColor, selectedColor, product?.defaultColor]);


  // buckets
  const buckets = useMemo(() => {
    const out = { gold: [], "rose-gold": [], "white-gold": [], others: [] };
    if (imagesByColorFromApi) {
      out.gold = imagesByColorFromApi.gold;
      out["rose-gold"] = imagesByColorFromApi["rose-gold"];
      out["white-gold"] = imagesByColorFromApi["white-gold"];
      const used = new Set([...out.gold, ...out["rose-gold"], ...out["white-gold"]]);
      out.others = allImages.filter((src) => !used.has(src));
      return out;
    }
    out.others = allImages;
    return out;
  }, [imagesByColorFromApi, allImages]);

  // images to show
  const imagesToShow = useMemo(() => {
    const want = selectedColor || mapUiToColor(variant);
    const primary = (want && buckets[want]) ? buckets[want] : [];
    const order = ["gold", "rose-gold", "white-gold", "others"].filter((k) => k !== want);
    const rest = order.flatMap((k) => buckets[k] || []);
    const result = [...primary, ...rest];
    return result.length ? result : allImages;
  }, [buckets, selectedColor, variant, allImages]);


  // UI-visible color chips
  const uiChips = useMemo(() => {
    const fromApi = availableColors.length
      ? availableColors.map(mapApiToUi).filter((x) => ["rose", "white", "yellow"].includes(x))
      : ["rose", "white", "yellow"];
    return ["rose", "white", "yellow"].filter((c) => fromApi.includes(c));
  }, [availableColors]);


  // related demo cards (use real product image as placeholder)
  const [related, setRelated] = useState([]);

useEffect(() => {
  if (!productId) return;
  (async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/product/related/${productId}`);
      if (data?.success) setRelated(data.products || []);
    } catch (err) {
      console.error("Failed to fetch related:", err);
    }
  })();
}, [productId]);


  /* -------------------- THE FIX IS HERE -------------------- */
  // Effect to reset the main swiper slide when the color filter changes.
  useEffect(() => {
    if (mainSwiperRef.current) {
      mainSwiperRef.current.slideTo(0);
    }
  }, [selectedColor]);
  /* --------------------------------------------------------- */


  /* ---------- loading ---------- */
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-12 h-12 border-4 border-[#CEBB98] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // If fetch finished but we still have no product, show a friendly state
  if (!product) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <img
          src={emptyImg}
          alt="Empty Wishlist"
          className="mx-auto mb-6 w-[724px] h-[524px] opacity-50"
        />
        <h2 className="text-2xl font-semibold mb-2">Product not found</h2>
        <p className="text-gray-600 mb-6">{fetchErr || "We couldn’t load this product."}</p>
        <button
          onClick={() => window.history.back()}
          className="px-5 py-3 rounded-md bg-black text-white"
        >
          Go back
        </button>
      </div>
    );
  }

  /* ================================================== */
  return (
    <>
      {/* MAIN PRODUCT SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT SIDE IMAGES */}
        <div className="flex flex-col w-full">
          {/* Main Swiper with Zoom */}
          <Swiper
            modules={[Autoplay, Thumbs]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            slidesPerView={1}
            onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
            // Safely pass thumbs swiper (avoid destroyed instance)
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            className="w-full rounded-xl"
          >
            {imagesToShow.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center px-1 py-1 w-full h-[400px] sm:h-[500px] md:h-[600px]">
                  <InnerImageZoom
                    src={img}
                    zoomSrc={img}
                    zoomType="hover"
                    zoomScale={1}
                    alt={`Product Image ${index + 1}`}
                    className="rounded-md w-full h-full object-contain shadow-md"
                    zoomPreload
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbnails */}
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            watchSlidesProgress
            slidesPerView="auto"
            freeMode
            modules={[Thumbs, Autoplay]}
            className="mt-4 w-full flex"
          >
            {imagesToShow.map((img, index) => (
              <SwiperSlide key={index} className="!w-20 sm:!w-24">
                <img
                  src={img}
                  alt={`thumb-${index}`}
                  className="w-full h-20 sm:h-24 object-cover rounded-md cursor-pointer border hover:border-yellow-600 transition"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* RIGHT SIDE DETAILS */}
        <div className="w-full flex flex-col space-y-6">
          {/* Info */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold leading-snug">{name}</h2>
<div className="mt-1 text-sm text-gray-700">
  {skuForColor ? <>SKU: <span className="font-semibold">{skuForColor}</span></> : "SKU: —"}
  <span className="ml-3 border border-black px-2 py-0.5 rounded-md text-[#CEBB98]">IN STOCK</span>
</div>


            <div className="flex flex-wrap items-center gap-3 mt-3">
              <span className="text-lg sm:text-2xl font-bold">₹{formatIN(liveRate ? dynamicTotal : finalPrice)}</span>
              {!liveRate && hasDiscount && (
    <span className="text-gray-500 line-through text-sm sm:text-base">₹{formatIN(price)}</span>
  )}
              {!liveRate && hasDiscount && (
    <span className="bg-gray-100 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full border">Sale {pct}%</span>
  )}
            </div>
            {priceErr && <p className="text-xs text-red-500 mt-1">{priceErr}</p>}
            <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">{desc}</p>
          </div>

          <div className="flex flex-col gap-2 mb-2">
            <span className="font-semibold">Color:</span>
            <div className="flex gap-2">
              {uiChips.map((key) => (
                <button
                  key={key}
                  onClick={() => setVariant(key)}
                  className={`w-8 h-8 rounded-full ${CHIP_CLASS[key]} border transition
          ${variant === key ? "ring-2 ring-[#CEBB98] scale-110" : "hover:scale-110"}`}
                  title={key}
                  aria-label={`Select ${key} color`}
                />
              ))}
            </div>
          </div>


          <div className="flex flex-col gap-2">
            <span className="font-semibold">Jewelry Material:</span>
            <div className="flex gap-3">
              {materials.map((mat) => (
                <button
                  key={mat}
                  onClick={() => setSelectedMaterial(mat)}
                  className={`px-4 py-1 rounded-md border transition
              ${selectedMaterial === mat
                      ? "border-black bg-black text-white"
                      : "border-gray-400 hover:bg-gray-100"
                    }`}
                >
                  {mat}
                </button>
              ))}
            </div>
          </div>



          {/* Buttons + Color Chips */}
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col sm:flex-row gap-3 items-center w-full">
              <Link to="/inquiry" className="flex-1">
                {/* Buy Now */}
                <button
                  className={`w-full py-3 rounded-md font-semibold transition ${product?._id
                      ? "bg-[#CEBB98] text-white hover:bg-black"
                      : "bg-gray-300 text-gray-600 cursor-not-allowed"
                    }`}
                >
                  Inquiry Form
                </button>
              </Link>



              {/* Variant Buttons (show other available colors; hide current) */}

            </div>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                `Hi, I'm interested in ${name} (${productId}).`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="w-full text-center bg-[#CEBB98] text-white py-3 rounded-md font-semibold hover:bg-black transition"
            >
              Order on WhatsApp
            </a>
          </div>

          {/* Offers */}
          <div className="bg-[#CEBB98] text-white rounded-lg p-5 space-y-4">
            <h3 className="font-semibold text-lg">Offers For You</h3>
            {["FLAT 100% off", "Everglow Jewels"].map((offer, idx) => (
              <div key={idx} className="bg-white text-black rounded-md p-4 shadow-sm">
                <p className="font-bold">{offer}</p>
                <p className="text-sm text-gray-600 mt-1">
                  Comes with authenticity & guarantee certificate of Everglow
                  Jewels with lifetime exchange guarantee.
                </p>
              </div>
            ))}
          </div>

          {/* Shipping & Return */}
          <div className="space-y-3">
            {["Shipping", "Return Policy"].map((policy, idx) => (
              <details key={idx} className="border rounded-md px-4 py-3 cursor-pointer">
                <summary className="font-semibold">{policy}</summary>
                <p className="text-sm text-gray-600 mt-2">
                  {policy === "Shipping"
                    ? "Free shipping on all orders above ₹1000. Delivery in 4-6 business days."
                    : "Easy 7-day return & exchange policy with 100% refund guarantee."}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* PRODUCT DETAILS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Product Details</h2>
        <hr className="mb-6 border-gray-300" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          {/* Left - Product Specifications */}
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-yellow-700 mb-2">Weight</h3>
              <p className="text-sm text-gray-700">
                Gross (Product) - {specs.productWeight ?? "N/A"}
              </p>
              <p className="text-sm text-gray-700">Net (Gold) - {specs.goldWeight ?? "N/A"}</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-yellow-700 mb-2">Purity</h3>
              <p className="text-sm text-gray-700">
                {purity} 
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 sm:col-span-2">
              <h3 className="text-lg font-semibold text-yellow-700 mb-2">Diamond and Gemstones</h3>
              <p className="text-sm text-gray-700 mb-2">
                Weight {specs.diamondCarat ?? "—"} &nbsp;&nbsp; Diamonds - Lab Grown Diamonds
              </p>
              <table className="w-full border-collapse text-sm text-gray-700">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="py-2 text-left">Color</th>
                    <th className="py-2 text-left">Clarity</th>
                    <th className="py-2 text-left">Shape</th>
                    <th className="py-2 text-left">No. of Diamonds</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-300">
                    <td className="py-2">{specs.diamondColor || "E-F"}</td>
                    <td className="py-2">{specs.diamondClarity || "VVS-VS"}</td>
                    <td className="py-2">{specs.diamondShape || "—"}</td>
                    <td className="py-2">{specs.numberOfDiamonds ?? "—"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>


{/* RELATED PRODUCTS */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <h3 className="text-xl font-semibold mb-6 text-center">Related Products</h3>
  {related.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {related.map((p) => (
        <ProductCard key={p._id} product={p} />
      ))}
    </div>
  ) : (
    <p className="text-center text-gray-500">No related products found.</p>
  )}
</div>

    </>
  );
};

export default MoreInfo2;