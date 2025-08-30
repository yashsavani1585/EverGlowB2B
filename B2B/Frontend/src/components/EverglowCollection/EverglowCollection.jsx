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

import React from "react";
import productImg from "../../assets/productImg.png"; // fallback image
import PromotionalBanner from "../../assets/productAds1.png"; // local banner (optional)
import ProductCard from "../ProductCard/ProductCard";

/* ---------------- Product Data (with discount) ---------------- */
const products = [
  {
    id: 1,
    name: "Brilliant Round cut Everglow jewels",
    price: "₹2699",
    oldPrice: "₹2999",
    img: productImg,
    discount: Math.round(((2999 - 2699) / 2999) * 100),
  },
  {
    id: 2,
    name: "Luxury Everglow Necklace",
    price: "₹4999",
    oldPrice: "₹5999",
    img: productImg,
    discount: Math.round(((5999 - 4999) / 5999) * 100),
  },
  {
    id: 3,
    name: "Classic Everglow Earrings",
    price: "₹1999",
    oldPrice: "₹2499",
    img: productImg,
    discount: Math.round(((2499 - 1999) / 2499) * 100),
  },
  {
    id: 4,
    name: "Elegant Everglow Bracelet",
    price: "₹3499",
    oldPrice: "₹3999",
    img: productImg,
    discount: Math.round(((3999 - 3499) / 3999) * 100),
  },
  {
    id: 5,
    name: "Brilliant Round cut Everglow jewels",
    price: "₹2699",
    oldPrice: "₹2999",
    img: productImg,
    discount: Math.round(((2999 - 2699) / 2999) * 100),
  },
  {
    id: 6,
    name: "Brilliant Round cut Everglow jewels",
    price: "₹2699",
    oldPrice: "₹2999",
    img: productImg,
    discount: Math.round(((2999 - 2699) / 2999) * 100),
  },
  {
    id: 7,
    name: "Luxury Everglow Necklace Collection",
    price: "₹4999",
    oldPrice: "₹5999",
    img: productImg,
    discount: Math.round(((5999 - 4999) / 5999) * 100),
  },
  {
    id: 8,
    name: "Brilliant Round cut Everglow jewels",
    price: "₹2699",
    oldPrice: "₹2999",
    img: productImg,
    discount: Math.round(((2999 - 2699) / 2999) * 100),
  },
  // ...baaki same pattern
];

/* ---------------- Main Section ---------------- */
const EverglowCollection = () => {
  const bannerH = "h-[220px] sm:h-[300px] md:h-[380px] lg:h-[420px]";

  return (
    <section className="py-10 sm:py-14 lg:py-16" aria-labelledby="everglow-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid (responsive) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {/* first 6 */}
          {products.slice(0, 6).map((p) => (
            <div key={p.id} className="h-full">
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
                <ProductCard
                  product={products[6]}
                  imageH="h-[160px] sm:h-[200px] md:h-[260px]"
                />
              </div>
            </div>
          </div>

          {/* remainder */}
          {products.slice(7).map((p) => (
            <div key={p.id} className="h-full">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EverglowCollection;
