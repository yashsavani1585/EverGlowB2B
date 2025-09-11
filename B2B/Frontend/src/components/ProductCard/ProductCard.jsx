// import React from "react";
// import { Link } from "react-router-dom";

// const ProductCard = ({ product, imageH = "h-[200px] md:h-[280px]" }) => {
//   return (
//     <div className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition bg-white flex flex-col">
//       {/* Image */}
//       <div className={`w-full ${imageH} overflow-hidden bg-gray-50`}>
//         <img
//           src={product.img || product.image || product.imageUrl}
//           alt={product.name}
//           className="w-full h-full object-cover"
//           loading="lazy"
//         />
//       </div>

//       {/* Details */}
//       <div className="p-4 flex flex-col flex-1">
//         {/* Title */}
//         <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-2 text-center">
//           {product.title || product.name || product.titleName}
//         </h3>

//         {/* Price Row */}
//         <div className="flex justify-between items-center mb-3">
//           <span className="text-lg font-semibold text-[#CEBB98]">
//             {product.price}
//           </span>
//           {product.oldPrice && (
//             <span className="text-sm line-through text-gray-500">
//               {product.oldPrice}
//             </span>
//           )}
//         </div>

//         {/* Buttons */}
//         <div className="mt-auto flex gap-2">
//           {/* More Info Button */}
//           <Link to="/moreInform" className="flex-1">
//             <button className="w-full border border-[#CEBB98] text-black text-sm font-medium py-2 px-3 rounded-xl hover:bg-purple-50 transition">
//               More Info
//             </button>
//           </Link>

//           {/* Add to Cart Button */}
//           <button className="flex-1 bg-[#CEBB98] border border-[#CEBB98] text-white text-sm font-medium py-2 px-3 rounded-xl hover:bg-purple-800 transition">
//             Add to Cart
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ProductCard;

// import React from "react";
// import { Link } from "react-router-dom";
// import { FaHeart } from "react-icons/fa";

// const ProductCard = ({ product, imageH = "h-[200px] md:h-[280px]" }) => {
//   return (
//     <div className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition bg-white flex flex-col relative">
//       {/* Image with overlay */}
//       <div className={`relative w-full ${imageH} overflow-hidden bg-gray-50`}>
//         {/* Top Overlay */}
//         <div className="absolute top-2 left-2 right-2 flex justify-between items-center z-10">
//           {/* Sale Badge */}
//           <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-lg shadow">
//             {product.discount ? `${product.discount} OFF` : "sale"}
//           </span>

//           {/* Wishlist Icon */}
//           <button className="p-2 bg-white rounded-full shadow hover:text-red-500 transition">
//             <FaHeart size={16} />
//           </button>
//         </div>


//         {/* Product Image */}
//         <img
//           src={product.img || product.image || product.imageUrl}
//           alt={product.name}
//           className="w-full h-full object-cover"
//           loading="lazy"
//         />
//       </div>

//       {/* Details */}
//       <div className="p-4 flex flex-col flex-1">
//         {/* Title */}
//         <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-2 text-center">
//           {product.title || product.name || product.titleName}
//         </h3>

//         {/* Price Row */}
//         <div className="flex justify-between items-center mb-3">
//           <span className="text-lg font-semibold text-[#CEBB98]">
//             {product.price}
//           </span>
//           {product.oldPrice && (
//             <span className="text-sm line-through text-gray-500">
//               {product.oldPrice}
//             </span>
//           )}
//         </div>

//         {/* Buttons */}
//         <div className="mt-auto flex gap-2">
//           {/* More Info Button */}
//           <Link to="/moreInform" className="flex-1">
//             <button className="w-full border border-[#CEBB98] text-black text-sm font-medium py-2 px-3 rounded-xl hover:bg-purple-50 transition">
//               More Info
//             </button>
//           </Link>

//           {/* Add to Cart Button */}
//           <button className="flex-1 bg-[#CEBB98] border border-[#CEBB98] text-white text-sm font-medium py-2 px-3 rounded-xl hover:bg-purple-800 transition">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

// import React from "react";
// import { Link } from "react-router-dom";
// import { FaHeart } from "react-icons/fa";

// const ProductCard = ({ product, imageH = "h-[200px] md:h-[280px]" }) => {
//   return (
//     <div className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition bg-white flex flex-col relative group">
//       {/* Image with overlay */}
//       <div className={`relative w-full ${imageH} overflow-hidden bg-gray-50`}>
//         {/* Top Overlay */}
//         <div className="absolute top-2 left-2 right-2 flex justify-between items-center z-10">
//           {/* Sale Badge */}
//           <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-lg shadow">
//             {product.discount ? `${product.discount} OFF` : "Sale"}
//           </span>

//           {/* Wishlist Icon */}
//           <button className="p-2 bg-white rounded-full shadow hover:text-red-500 transition">
//             <FaHeart size={16} />
//           </button>
//         </div>

//         {/* Product Images (default + hover) */}
//         <img
//           src={product.img || product.image || product.imageUrl}
//           alt={product.name}
//           className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
//           loading="lazy"
//         />
//         {product.hoverImg && (
//           <img
//             src={product.hoverImg}
//             alt={`${product.name}-hover`}
//             className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
//             loading="lazy"
//           />
//         )}
//       </div>

//       {/* Details */}
//       <div className="p-4 flex flex-col flex-1">
//         {/* Title */}
//         <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-2 text-center">
//           {product.title || product.name || product.titleName}
//         </h3>

//         {/* Price Row */}
//         <div className="flex justify-between items-center mb-3">
//           <span className="text-lg font-semibold text-[#CEBB98]">
//             {product.price}
//           </span>
//           {product.oldPrice && (
//             <span className="text-sm line-through text-gray-500">
//               {product.oldPrice}
//             </span>
//           )}
//         </div>

//         {/* Buttons */}
//         <div className="mt-auto flex gap-2">
//           {/* More Info Button */}
//           <Link to="/moreInform" className="flex-1">
//             <button className="w-full border border-[#CEBB98] text-black text-sm font-medium py-2 px-3 rounded-xl hover:bg-purple-50 transition">
//               More Info
//             </button>
//           </Link>

//           {/* Add to Cart Button */}
//           <button className="flex-1 bg-[#CEBB98] border border-[#CEBB98] text-white text-sm font-medium py-2 px-3 rounded-xl hover:bg-purple-800 transition">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;


// import React, { useEffect, useMemo, useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import { CiHeart } from "react-icons/ci";
// import { isAuthenticated } from "../../utils/auth";
// import { useCart } from "../../context/cartContext";

// const backendUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/api";
// const formatIN = (n) => Number(n || 0).toLocaleString("en-IN");

// // ---- shared 60s cache for 14k rate ----
// const RATE_TTL_MS = 60_000;
// let rateCache = { ts: 0, rate: null, promise: null };

// function fetch14kRate() {
//   const now = Date.now();
//   if (rateCache.rate && now - rateCache.ts < RATE_TTL_MS) return Promise.resolve(rateCache.rate);
//   if (rateCache.promise) return rateCache.promise;

//   rateCache.promise = axios
//     .get(`${backendUrl}/pricing/gold-rate`, { params: { carat: 14 } })
//     .then(({ data }) => {
//       const r = data?.success ? Number(data.ratePerGram) : null;
//       rateCache.rate = r;
//       rateCache.ts = Date.now();
//       return r ?? 0;
//     })
//     .catch(() => 0)
//     .finally(() => { rateCache.promise = null; });

//   return rateCache.promise;
// }

// const ProductCard = ({ product, imageH = "h-[150px] md:h-[200px]" }) => {
//   const navigate = useNavigate();
//   const { wishHas, wishToggle } = useCart();

//   const pid = product?._id || product?.id;
//   const wished = wishHas(pid);

//   // live 14k rate
//   const [live14k, setLive14k] = useState(null);

//   // minimal fields needed for dynamic price (from list or fetched)
//   const initialGoldWeight = Number(product?.specs?.goldWeight ?? 0);
//   const initialGst        = product?.gstPercent;
//   const initialMcPerG     = product?.makingChargePerGram;

//   const [goldWeight, setGoldWeight] = useState(initialGoldWeight);
//   const [gstPercent, setGstPercent] = useState(
//     typeof initialGst === "number" ? initialGst : null
//   );
//   const [makingPerGram, setMakingPerGram] = useState(
//     typeof initialMcPerG === "number" ? initialMcPerG : null
//   );

//   // 1) fetch 14k once
//   useEffect(() => {
//     let mounted = true;
//     fetch14kRate().then((r) => mounted && setLive14k(r || null));
//     return () => { mounted = false; };
//   }, []);

//   // 2) if card product is missing required fields, fetch a minimal product doc
//   const needsMetaFetch =
//     !goldWeight || gstPercent == null || makingPerGram == null;

//   useEffect(() => {
//     let mounted = true;
//     if (!needsMetaFetch || !pid) return;
//     (async () => {
//       try {
//         // your existing endpoint accepts body { productId }
//         const { data } = await axios.post(`${backendUrl}/product/single`, {
//           productId: pid,
//           _id: pid,
//         });

//         const p =
//           data?.product ??
//           data?.data?.product ??
//           (data?.success ? data.product : null);

//         if (!mounted || !p) return;

//         const gw   = Number(p?.specs?.goldWeight ?? 0);
//         const gst  = typeof p?.gstPercent === "number" ? p.gstPercent : 3;
//         const mcpg = typeof p?.makingChargePerGram === "number" ? p.makingChargePerGram : 0;

//         setGoldWeight(gw);
//         setGstPercent(gst);
//         setMakingPerGram(mcpg);
//       } catch (e) {
//         // keep fallbacks
//       }
//     })();
//     return () => { mounted = false; };
//   }, [needsMetaFetch, pid]);

//   const onWish = () => {
//     if (!isAuthenticated()) return navigate("/auth");
//     wishToggle(pid);
//   };

//   // ---- compute same as MoreInfo 14k ----
//   const canCompute = !!live14k && goldWeight > 0 && gstPercent != null && makingPerGram != null;

//   const { dynamicTotal } = useMemo(() => {
//     if (!canCompute) return { dynamicTotal: null };
//     const metalCost   = live14k * goldWeight;
//     const makingCost  = makingPerGram * goldWeight;
//     const subTotal    = metalCost + makingCost;
//     const gstAmount   = Math.round(subTotal * (Number(gstPercent) / 100));
//     return { dynamicTotal: subTotal + gstAmount };
//   }, [canCompute, live14k, goldWeight, makingPerGram, gstPercent]);

//   // fallback to base price from list item
//   const displayPrice = dynamicTotal ?? Number(product?.price || 0);

//   // title / images: your list uses `title` in this component, model has `name` — support both
//   const title = product?.title || product?.name || "—";
//   const cover = Array.isArray(product?.image) ? product.image[0] : product?.image;

//   return (
//     <div className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition bg-white flex flex-col relative group">
//       {/* Image */}
//       <div className={`relative w-full ${imageH} overflow-hidden bg-gray-50`}>
//         <div className="absolute top-2 left-2 right-2 flex justify-between items-center z-10">
//           <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-lg shadow">
//             {product.discount ? `${product.discount} OFF` : "Sale"}
//           </span>
//           <button
//             onClick={onWish}
//             className="p-2 bg-white rounded-full shadow hover:bg-red-500 transition-colors"
//             aria-label="Toggle wishlist"
//           >
//             <CiHeart
//               size={16}
//               className={`transition-colors ${wished ? "text-red-500" : "text-black"} group-hover:text-white`}
//             />
//           </button>
//         </div>

//         <img
//           src={cover}
//           alt={title}
//           className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
//           loading="lazy"
//           onError={(e) => { e.currentTarget.src = "/fallback.png"; }}
//         />
//         {product.hoverImg && (
//           <img
//             src={product.hoverImg}
//             alt={`${title}-hover`}
//             className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
//             loading="lazy"
//           />
//         )}
//       </div>

//       {/* Details */}
//       <div className="p-4 flex flex-col flex-1">
//         <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-2 text-center">
//           {title}
//         </h3>

//         {/* Price Row (14K with weight+making+GST when available) */}
//         <div className="flex justify-between items-center mb-3">
//           <div className="flex flex-col">
//             <span className="text-lg font-semibold text-black">
//               ₹{formatIN(displayPrice)}
//             </span>
//             <span className="text-[11px] text-gray-500">
//               {/* {dynamicTotal ? "14K • Rate + Making + GST" : "Base price"} */}
//             </span>
//           </div>

//           {!!product.oldPrice && (
//             <span className="text-sm line-through text-gray-700">
//               ₹{formatIN(product.oldPrice)}
//             </span>
//           )}
//         </div>

//         {/* Buttons */}
//         <div className="mt-auto flex gap-2">
//           <Link to={`/moreinfo2?id=${pid}`} className="flex-1">
//             <button className="w-full border border-[#CEBB98] text-black text-sm font-medium py-2 px-3 rounded-xl hover:bg-[#CEBB98] transition">
//               More Info
//             </button>
//           </Link>
//           <Link to="/inquiry" className="flex-1">
//             <button className="w-full  border border-[#CEBB98] text-black text-sm font-medium py-2 px-3 rounded-xl hover:bg-[#CEBB98] transition">
//               Inquiry Form
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

// import React, { useEffect, useMemo, useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import { CiHeart } from "react-icons/ci";
// import { isAuthenticated } from "../../utils/auth";
// import { useCart } from "../../context/cartContext";

// const backendUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/api";
// const formatIN = (n) => Number(n || 0).toLocaleString("en-IN");

// // ---- shared 60s cache for 14k rate ----
// const RATE_TTL_MS = 60_000;
// let rateCache = { ts: 0, rate: null, promise: null };

// function fetch14kRate() {
//   const now = Date.now();
//   if (rateCache.rate && now - rateCache.ts < RATE_TTL_MS) return Promise.resolve(rateCache.rate);
//   if (rateCache.promise) return rateCache.promise;

//   rateCache.promise = axios
//     .get(`${backendUrl}/pricing/gold-rate`, { params: { carat: 14 } })
//     .then(({ data }) => {
//       const r = data?.success ? Number(data.ratePerGram) : null;
//       rateCache.rate = r;
//       rateCache.ts = Date.now();
//       return r ?? 0;
//     })
//     .catch(() => 0)
//     .finally(() => {
//       rateCache.promise = null;
//     });

//   return rateCache.promise;
// }

// const ProductCard = ({ product, imageH = "h-[150px] md:h-[200px]" }) => {
//   const navigate = useNavigate();
//   const { wishHas, wishToggle } = useCart();

//   const pid = product?._id || product?.id;
//   const wished = wishHas(pid);

//   // live 14k rate
//   const [live14k, setLive14k] = useState(null);

//   // minimal fields needed for dynamic price (from list or fetched)
//   const initialGoldWeight = Number(product?.specs?.goldWeight ?? 0);
//   const initialGst = product?.gstPercent;
//   const initialMcPerG = product?.makingChargePerGram;

//   const [goldWeight, setGoldWeight] = useState(initialGoldWeight);
//   const [gstPercent, setGstPercent] = useState(
//     typeof initialGst === "number" ? initialGst : null
//   );
//   const [makingPerGram, setMakingPerGram] = useState(
//     typeof initialMcPerG === "number" ? initialMcPerG : null
//   );

//   // 1) fetch 14k once
//   useEffect(() => {
//     let mounted = true;
//     fetch14kRate().then((r) => mounted && setLive14k(r || null));
//     return () => {
//       mounted = false;
//     };
//   }, []);

//   // 2) if card product is missing required fields, fetch a minimal product doc
//   const needsMetaFetch =
//     !goldWeight || gstPercent == null || makingPerGram == null;

//   useEffect(() => {
//     let mounted = true;
//     if (!needsMetaFetch || !pid) return;
//     (async () => {
//       try {
//         const { data } = await axios.post(`${backendUrl}/product/single`, {
//           productId: pid,
//           _id: pid,
//         });

//         const p =
//           data?.product ??
//           data?.data?.product ??
//           (data?.success ? data.product : null);

//         if (!mounted || !p) return;

//         const gw = Number(p?.specs?.goldWeight ?? 0);
//         const gst = typeof p?.gstPercent === "number" ? p.gstPercent : 3;
//         const mcpg =
//           typeof p?.makingChargePerGram === "number" ? p.makingChargePerGram : 0;

//         setGoldWeight(gw);
//         setGstPercent(gst);
//         setMakingPerGram(mcpg);
//       } catch (e) {
//         // keep fallbacks
//       }
//     })();
//     return () => {
//       mounted = false;
//     };
//   }, [needsMetaFetch, pid]);

//   const onWish = () => {
//     if (!isAuthenticated()) return navigate("/auth");
//     wishToggle(pid);
//   };

//   // ---- compute same as MoreInfo 14k ----
//   const canCompute =
//     !!live14k && goldWeight > 0 && gstPercent != null && makingPerGram != null;

//   const { dynamicTotal } = useMemo(() => {
//     if (!canCompute) return { dynamicTotal: null };
//     const metalCost = live14k * goldWeight;
//     const makingCost = makingPerGram * goldWeight;
//     const subTotal = metalCost + makingCost;
//     const gstAmount = Math.round(subTotal * (Number(gstPercent) / 100));
//     return { dynamicTotal: subTotal + gstAmount };
//   }, [canCompute, live14k, goldWeight, makingPerGram, gstPercent]);

//   const displayPrice = dynamicTotal ?? Number(product?.price || 0);

//   const title = product?.title || product?.name || "—";
//   const cover = Array.isArray(product?.image)
//     ? product.image[0]
//     : product?.image;

//   return (
//     <div className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition bg-white flex flex-col relative group cursor-pointer">
//       {/* Image Clickable */}
//       <Link to={`/moreinfo2?id=${pid}`}>
//         <div
//           className={`relative w-full ${imageH} overflow-hidden bg-gray-50`}
//         >
//           <div className="absolute top-2 left-2 right-2 flex justify-between items-center z-10">
//             <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-lg shadow">
//               {product.discount ? `${product.discount} OFF` : "Sale"}
//             </span>
//             <button
//               onClick={(e) => {
//                 e.preventDefault(); // prevent link trigger
//                 onWish();
//               }}
//               className="p-2 bg-white rounded-full shadow hover:bg-red-500 transition-colors"
//               aria-label="Toggle wishlist"
//             >
//               <CiHeart
//                 size={16}
//                 className={`transition-colors ${
//                   wished ? "text-red-500" : "text-black"
//                 } group-hover:text-white`}
//               />
//             </button>
//           </div>

//           <img
//             src={cover}
//             alt={title}
//             className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
//             loading="lazy"
//             onError={(e) => {
//               e.currentTarget.src = "/fallback.png";
//             }}
//           />
//           {product.hoverImg && (
//             <img
//               src={product.hoverImg}
//               alt={`${title}-hover`}
//               className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
//               loading="lazy"
//             />
//           )}
//         </div>
//       </Link>

//       {/* Details */}
//       <div className="p-4 flex flex-col flex-1">
//         <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-2 text-center">
//           {title}
//         </h3>

//         <div className="flex justify-between items-center mb-3">
//           <div className="flex flex-col">
//             <span className="text-lg font-semibold text-black">
//               ₹{formatIN(displayPrice)}
//             </span>
//           </div>

//           {!!product.oldPrice && (
//             <span className="text-sm line-through text-gray-700">
//               ₹{formatIN(product.oldPrice)}
//             </span>
//           )}
//         </div>

//         {/* Buttons */}
//         <div className="mt-auto flex gap-2">
//           <Link to={`/moreinfo2?id=${pid}`} className="flex-1">
//             <button className="w-full border border-[#CEBB98] text-black text-sm font-medium py-2 px-3 rounded-xl hover:bg-[#CEBB98] transition">
//               More Info
//             </button>
//           </Link>
//           <Link to="/inquiry" className="flex-1">
//             <button className="w-full  border border-[#CEBB98] text-black text-sm font-medium py-2 px-3 rounded-xl hover:bg-[#CEBB98] transition">
//               Inquiry Form
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { isAuthenticated } from "../../utils/auth";
import { useCart } from "../../context/cartContext";

const backendUrl =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/api";
const formatIN = (n) => Number(n || 0).toLocaleString("en-IN");

// ---- shared 60s cache for 14k rate ----
const RATE_TTL_MS = 60_000;
let rateCache = { ts: 0, rate: null, promise: null };

function fetch14kRate() {
  const now = Date.now();
  if (rateCache.rate && now - rateCache.ts < RATE_TTL_MS)
    return Promise.resolve(rateCache.rate);
  if (rateCache.promise) return rateCache.promise;

  rateCache.promise = axios
    .get(`${backendUrl}/pricing/gold-rate`, { params: { carat: 14 } })
    .then(({ data }) => {
      const r = data?.success ? Number(data.ratePerGram) : null;
      rateCache.rate = r;
      rateCache.ts = Date.now();
      return r ?? 0;
    })
    .catch(() => 0)
    .finally(() => {
      rateCache.promise = null;
    });

  return rateCache.promise;
}

const ProductCard = ({ product, imageH = "h-[150px] md:h-[200px]" }) => {
  const navigate = useNavigate();
  const { wishHas, wishToggle } = useCart();

  const pid = product?._id || product?.id;
  const wished = wishHas(pid);

  // live 14k rate
  const [live14k, setLive14k] = useState(null);

  // minimal fields needed for dynamic price
  const [goldWeight, setGoldWeight] = useState(
    Number(product?.specs?.goldWeight ?? 0)
  );
  const [gstPercent, setGstPercent] = useState(
    typeof product?.gstPercent === "number" ? product.gstPercent : 3
  );
  const [makingPerGram, setMakingPerGram] = useState(
    typeof product?.makingChargePerGram === "number"
      ? product.makingChargePerGram
      : 0
  );

  // fetch 14k once
  useEffect(() => {
    let mounted = true;
    fetch14kRate().then((r) => mounted && setLive14k(r || null));
    return () => {
      mounted = false;
    };
  }, []);

  // only fetch meta if really missing
  useEffect(() => {
    let mounted = true;
    if (goldWeight && gstPercent != null && makingPerGram != null) return;
    if (!pid) return;

    (async () => {
      try {
        const { data } = await axios.post(`${backendUrl}/product/single`, {
          productId: pid,
        });
        const p = data?.product || data?.data?.product;
        if (!mounted || !p) return;

        setGoldWeight(Number(p?.specs?.goldWeight ?? 0));
        setGstPercent(
          typeof p?.gstPercent === "number" ? p.gstPercent : 3
        );
        setMakingPerGram(
          typeof p?.makingChargePerGram === "number"
            ? p.makingChargePerGram
            : 0
        );
      } catch {
        // silent fail → keep defaults
      }
    })();

    return () => {
      mounted = false;
    };
  }, [pid]);

  const onWish = () => {
    if (!isAuthenticated()) return navigate("/auth");
    wishToggle(pid);
  };

  // compute price
  const dynamicTotal = useMemo(() => {
    if (!live14k || !goldWeight) return null;
    const metalCost = live14k * goldWeight;
    const makingCost = (makingPerGram || 0) * goldWeight;
    const subTotal = metalCost + makingCost;
    const gstAmount = Math.round(subTotal * ((gstPercent || 3) / 100));
    return subTotal + gstAmount;
  }, [live14k, goldWeight, makingPerGram, gstPercent]);

  const title = product?.title || product?.name || "—";

  // ✅ Robust image handling
  const cover =
    (Array.isArray(product?.images) && product.images[0]) ||
    (Array.isArray(product?.image) && product.image[1]) ||
    product?.image ||
    product?.images
    "/fallback.png";

  return (
    <div className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition bg-white flex flex-col relative group cursor-pointer">
      {/* Image Clickable */}
      <Link to={`/moreinfo2?id=${pid}`}>
        <div className={`relative w-full ${imageH} overflow-hidden bg-gray-50`}>
          <div className="absolute top-2 left-2 right-2 flex justify-between items-center z-10">
            <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-lg shadow">
              {product.discount ? `${product.discount} OFF` : "Sale"}
            </span>
            <button
              onClick={(e) => {
                e.preventDefault(); // prevent link trigger
                onWish();
              }}
              className="p-2 bg-white rounded-full shadow hover:bg-red-500 transition-colors"
              aria-label="Toggle wishlist"
            >
              <CiHeart
                size={16}
                className={`transition-colors ${
                  wished ? "text-red-500" : "text-black"
                } group-hover:text-white`}
              />
            </button>
          </div>

          <img
            src={cover}
            alt={title}
            className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = "/fallback.png";
            }}
          />
          {product.hoverImg && (
            <img
              src={product.hoverImg}
              alt={`${title}-hover`}
              className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = "/fallback.png";
              }}
            />
          )}
        </div>
      </Link>

      {/* Details */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-2 text-center">
          {title}
        </h3>



        {/* Buttons */}
        <div className="mt-auto flex gap-2">
          <Link to={`/moreinfo2?id=${pid}`} className="flex-1">
            <button className="w-full border border-[#CEBB98] text-black text-sm font-medium py-2 px-3 rounded-xl hover:bg-[#CEBB98] transition">
              More Info
            </button>
          </Link>
          <Link to="/inquiry" className="flex-1">
            <button className="w-full  border border-[#CEBB98] text-black text-sm font-medium py-2 px-3 rounded-xl hover:bg-[#CEBB98] transition">
              Inquiry Form
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
