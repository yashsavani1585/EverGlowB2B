// import React from "react";
// import productImg from "../../assets/productImg.png"; // fallback image
// import PromotionalBanner from "../../assets/productAds1.png"; // local banner (optional)
// import ProductCard from "../ProductCard/ProductCard";

// /* ---------------- Product Data ---------------- */
// const products = [
//   {
//     id: 1,
//     name: "Brilliant Round cut Everglow jewels",
//     price: "₹2699",
//     oldPrice: "₹2999",
//     img: productImg, // 👈 custom image URL
//   },
//   {
//     id: 2,
//     name: "Luxury Everglow Necklace",
//     price: "₹4999",
//     oldPrice: "₹5999",
//     img: productImg,
//   },
//   {
//     id: 3,
//     name: "Classic Everglow Earrings",
//     price: "₹1999",
//     oldPrice: "₹2499",
//     img: productImg,
//   },
//   {
//     id: 4,
//     name: "Elegant Everglow Bracelet",
//     price: "₹3499",
//     oldPrice: "₹3999",
//     img: productImg,
//   },
//   {
//     id: 5,
//     name: "Brilliant Round cut Everglow jewels",
//     price: "₹2699",
//     oldPrice: "₹2999",
//     img: productImg, // fallback asset
//   },
//   {
//     id: 6,
//     name: "Brilliant Round cut Everglow jewels",
//     price: "₹2699",
//     oldPrice: "₹2999",
//     img: productImg,
//   },
//   {
//     id: 7,
//     name: "Luxury Everglow Necklace Collection",
//     price: "₹4999",
//     oldPrice: "₹5999",
//     img: productImg,
//   },
//   {
//     id: 8,
//     name: "Brilliant Round cut Everglow jewels",
//     price: "₹2699",
//     oldPrice: "₹2999",
//     img: productImg,
//   },
//     {
//     id: 9,
//     name: "Brilliant Round cut Everglow jewels",
//     price: "₹2699",
//     oldPrice: "₹2999",
//     img: productImg,
//   },
//     {
//     id: 10,
//     name: "Brilliant Round cut Everglow jewels",
//     price: "₹2699",
//     oldPrice: "₹2999",
//     img: productImg,
//   },
//     {
//     id: 11,
//     name: "Brilliant Round cut Everglow jewels",
//     price: "₹2699",
//     oldPrice: "₹2999",
//     img: productImg,
//   },
//     {
//     id: 12,
//     name: "Brilliant Round cut Everglow jewels",
//     price: "₹2699",
//     oldPrice: "₹2999",
//     img: productImg,
//   },
//     {
//     id: 13,
//     name: "Brilliant Round cut Everglow jewels",
//     price: "₹2699",
//     oldPrice: "₹2999",
//     img: productImg,
//   },
//     {
//     id: 14,
//     name: "Brilliant Round cut Everglow jewels",
//     price: "₹2699",
//     oldPrice: "₹2999",
//     img: productImg,
//   },
//     {
//     id: 15,
//     name: "Brilliant Round cut Everglow jewels",
//     price: "₹2699",
//     oldPrice: "₹2999",
//     img: productImg,
//   },
//     {
//     id: 16,
//     name: "Brilliant Round cut Everglow jewels",
//     price: "₹2699",
//     oldPrice: "₹2999",
//     img: productImg,
//   }
//   // ...baaki bhi isi tarah
// ];

// /* ---------------- Main Section ---------------- */
// const EverglowCollection = () => {
//   // shared banner height (keeps banner + featured card equal)
//   const bannerH = "h-[300px] md:h-[420px]";

//   return (
//     <section className="py-12 sm:py-16" aria-labelledby="everglow-title">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Grid (items stretch so cards become equal height) */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 items-stretch">
//           {/* first 6 */}
//           {products.slice(0, 6).map((p) => (
//             <div key={p.id} className="h-full">
//               <ProductCard product={p} />
//             </div>
//           ))}

//           {/* Banner + featured */}
//           <div className="col-span-full my-6 flex flex-col md:flex-row gap-6 items-stretch">
//             {/* Left banner (2/3 width) */}
//             <div
//               className={`w-full md:w-2/3 rounded-2xl overflow-hidden border-2 border-[#4B2A4B] ${bannerH}`}
//             >
//               <img
//                 src={PromotionalBanner}
//                 alt="Promotional Banner"
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//                 decoding="async"
//               />
//             </div>

//             {/* Right featured product (1/3 width, equal height as banner) */}
//             <div className={`w-full md:w-1/3 flex items-stretch ${bannerH}`}>
//               <div className="w-full">
//                 <ProductCard
//                   product={products[6]}
//                   imageH="h-[180px] md:h-[260px]"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* remainder */}
//           {products.slice(7).map((p) => (
//             <div key={p.id} className="h-full">
//               <ProductCard product={p} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EverglowCollection;



import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

import PromotionalBanner from "../../assets/productAds1.png"; // local banner (unchanged)
import ProductCard from "../ProductCard/ProductCard";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/api";

/* ---------- helpers ---------- */
const allowedCats = new Set(["rings", "earrings", "necklace", "pendantset", "bracelet"]);

const shuffle = (arr) => {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// Make ProductCard-friendly while preserving raw fields
const toCardShape = (p) => {
  const imgs = Array.isArray(p?.image) ? p.image : [];
  const primary = imgs[0] || "";
  const hover = imgs[1] || primary || "";
  const rupee = (n) => (typeof n === "number" ? `${n.toLocaleString("en-IN")}` : n);

  return {
    ...p,
    id: p?._id || p?.id,
    _id: p?._id || p?.id,
    title: p?.name,
    name: p?.name,
    price: rupee(p?.discountPrice ?? p?.price),
    oldPrice: p?.discountPrice ? rupee(p?.price) : undefined,
    discount: p?.discountPercentage ? `${p.discountPercentage}%` : undefined,
    discountPrice: p?.discountPrice,
    discountPercentage: p?.discountPercentage,
    image: primary,
    images: imgs,
    hoverImg: hover,
  };
};

/* ---------- main ---------- */
const EverglowCollection = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    let ok = true;
    (async () => {
      try {
        setLoading(true);
        setErr("");
        const { data } = await axios.get(`${API}/product/list`);
        if (!ok) return;
        const items = Array.isArray(data?.products) ? data.products : [];
        setAllProducts(items);
      } catch (e) {
        if (ok) setErr(e?.response?.data?.message || e.message || "Failed to load products");
      } finally {
        if (ok) setLoading(false);
      }
    })();
    return () => {
      ok = false;
    };
  }, []);

  // 1) keep only the categories you want
  // 2) adapt to card shape
  // 3) shuffle once per data load
  const cards = useMemo(() => {
    const filtered = allProducts.filter((p) =>
      allowedCats.has(String(p?.category || "").trim().toLowerCase())
    );
    return shuffle(filtered).map(toCardShape);
  }, [allProducts]);

  const bannerH = "h-[220px] sm:h-[300px] md:h-[380px] lg:h-[420px]";

  if (loading) {
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          Loading products…
        </div>
      </section>
    );
  }

  if (err) {
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-red-600">
          {err}
        </div>
      </section>
    );
  }

  if (cards.length === 0) {
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          No products found for rings, earrings, necklace, pendantset, or bracelet.
        </div>
      </section>
    );
  }

  // Keep your original slicing format:
  const first6 = cards.slice(0, 6);
  const featured = cards[6] || cards[0]; // fallback if fewer than 7
  const remainder = cards.length > 7 ? cards.slice(7) : [];

  return (
    <section className="py-10 sm:py-14 lg:py-16" aria-labelledby="everglow-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid (responsive) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {/* first 6 */}
          {first6.map((p) => (
            <div key={p._id || p.id} className="h-full">
              <ProductCard product={p} />
            </div>
          ))}

          {/* Banner + featured */}
          <div className="col-span-full my-6 flex flex-col md:flex-row gap-6 items-stretch">
            {/* Left banner */}
            <div
              className={`w-full md:w-2/3 rounded-2xl overflow-hidden border-2 border-[#4B2A4B] ${bannerH}`}
            >
              <img
                src={PromotionalBanner}
                alt="Promotional Banner"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Right featured product */}
            <div className={`w-full md:w-1/3 flex items-stretch ${bannerH}`}>
              <div className="w-full">
                <ProductCard product={featured} imageH="h-[160px] sm:h-[200px] md:h-[260px]" />
              </div>
            </div>
          </div>

          {/* remainder */}
          {remainder.map((p) => (
            <div key={(p._id || p.id) + "-rest"} className="h-full">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EverglowCollection;
