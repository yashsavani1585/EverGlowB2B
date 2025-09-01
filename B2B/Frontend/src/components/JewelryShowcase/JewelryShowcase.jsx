


// // import React from "react";

// // import product1 from "../../assets/productImg.png";
// // import product2 from "../../assets/productImg.png";
// // import product3 from "../../assets/productImg.png";

// // import new1 from "../../assets/EverglowPost1.png";
// // import new2 from "../../assets/EverglowPost2.png";
// // import new3 from "../../assets/EverglowPost3.png";
// // import new4 from "../../assets/EverglowPost4.png";

// // import PromotionalBanner from "../../assets/productAds1.png";


// // // 🔹 DiscoverBlock Component
// // const DiscoverBlock = ({ title, subtitle, buttonText }) => (
// //   <div className="flex flex-col justify-center items-start max-w-[200px]">
// //     <p className="text-gray-600 text-sm font-medium">{title}</p>
// //     <h3 className="text-xl md:text-2xl text-gray-900 font-semibold leading-snug my-2 uppercase tracking-wide">
// //       {subtitle}
// //     </h3>
// //     <button className="border border-gray-700 text-gray-800 font-medium py-2 px-6 mt-4 text-sm uppercase tracking-wide transition-colors hover:bg-gray-900 hover:text-white">
// //       {buttonText}
// //     </button>
// //   </div>
// // );


// // // 🔹 ProductCard Component
// // const ProductCard = ({ product, imageH = "h-56 sm:h-64 lg:h-72" }) => (
// //   <div className="flex flex-col bg-white rounded-xl p-4 hover:-translate-y-0.5 transition-all duration-300 h-full shadow-sm ">
// //     {/* Image frame */}
// //     <div
// //       className={`w-full ${imageH} mb-4 border-2 border-[#4B2A4B] rounded-2xl p-4 flex items-center justify-center bg-white`}
// //     >
// //       <img
// //         src={product.image}
// //         alt={product.title}
// //         className="max-w-full max-h-full object-contain"
// //         loading="lazy"
// //         decoding="async"
// //       />
// //     </div>

// //     {/* Title */}
// //     <h3 className="text-sm font-medium text-gray-800 text-center mb-2 line-clamp-2 min-h-[44px]">
// //       {product.title}
// //     </h3>

// //     {/* Price Row */}
// //     <div className="flex justify-between items-center w-full mb-3">
// //       {product.oldPrice ? (
// //         <span className="text-gray-500 line-through">{product.oldPrice}</span>
// //       ) : (
// //         <span></span> // keeps spacing even if no old price
// //       )}
// //       <span className="text-[#4B2A4B] font-semibold">{product.price}</span>
// //     </div>

// //     {/* Buttons */}
// //     <div className="mt-auto flex gap-2">
// //       <button className="w-1/2 text-xs px-3 py-2 border border-gray-400 text-gray-700 rounded hover:bg-gray-100 transition-colors">
// //         More Info
// //       </button>
// //       <button className="w-1/2 text-xs px-3 py-2 bg-[#4B2A4B] text-white rounded hover:bg-[#3b1f3b] transition-colors">
// //         Add to Cart
// //       </button>
// //     </div>
// //   </div>
// // );


// // // 🔹 Main Showcase Component
// // const JewelryShowcase = () => {
// //   const products = [
// //     { id: 1, title: "Brilliant Round cut Everglow jewels", oldPrice: "₹3299", price: "₹2699", image: product1 },
// //     { id: 2, title: "Brilliant Round cut Everglow jewels", oldPrice: "₹3199", price: "₹2699", image: product2 },
// //     { id: 3, title: "Brilliant Round cut Everglow jewels", oldPrice: "₹2999", price: "₹2699", image: product3 },
// //     { id: 4, title: "Elegant Gold Necklace", oldPrice: "₹4999", price: "₹4599", image: product1 },
// //     { id: 5, title: "Classic Diamond Ring", oldPrice: "₹5999", price: "₹5599", image: product2 },
// //     { id: 6, title: "Royal Silver Bracelet", price: "₹3599", image: product3 }, // no old price example
// //   ];

// //   return (
// //     <div className="px-6 md:px-12 lg:px-20 py-12 space-y-16">

// //       {/* 🔹 Featured Products */}
// //       <section>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
// //           {products.slice(0, 3).map((product) => (
// //             <ProductCard key={product.id} product={product} />
// //           ))}
// //         </div>
// //       </section>

// //       {/* 🔹 New Collection */}
// //       <section className="bg-white py-12 font-sans">
// //         <div className="max-w-7xl mx-auto">
// //           <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-900 mb-16 tracking-widest uppercase">
// //             New Collection
// //           </h2>

// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
// //             {/* Left Column */}
// //             <div className="flex flex-col gap-10">
// //               <img src={new1} alt="Assorted diamond jewelry" className="w-full h-auto object-cover shadow-md rounded-lg" />

// //               <div className="flex flex-row items-center gap-6">
// //                 <DiscoverBlock title="Jewelry Tells" subtitle="A Great Story" buttonText="Discover more" />
// //                 <img src={new3} alt="Ruby and diamond bracelet" className=" w-100 h-98 object-cover shadow-md rounded-lg" />
// //               </div>
// //             </div>

// //             {/* Right Column */}
// //             <div className="flex flex-col gap-10">
// //               <div className="flex flex-row items-center gap-6">
// //                 <img src={new2} alt="Woven diamond bracelet" className=" w-100 h-98 object-cover shadow-md rounded-lg" />
// //                 <DiscoverBlock title="Discover" subtitle="New Arrivals" buttonText="Discover more" />
// //               </div>
// //               <img src={new4} alt="Pendant necklace with a purple ribbon" className="w-full h-auto object-cover shadow-md rounded-lg" />
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* 🔹 Products Section 2 */}
// //       <section>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
// //           {products.slice(3).map((product) => (
// //             <ProductCard key={product.id} product={product} />
// //           ))}
// //         </div>
// //       </section>

// //         <section>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
// //           {products.slice(0, 3).map((product) => (
// //             <ProductCard key={product.id} product={product} />
// //           ))}
// //         </div>
// //       </section>

// //       {/* 🔹 Banner + Side Product */}
// //       <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
// //         {/* Left Banner */}
// //         <div className="md:col-span-2 rounded-2xl overflow-hidden  ">
// //           <img
// //             src={PromotionalBanner}
// //             alt="Promotional Banner"
// //             className="w-full h-[420px] object-cover"
// //             loading="lazy"
// //             decoding="async"
// //           />
// //         </div>

// //         {/* Right Featured Product */}
// //         <div className="flex items-stretch">
// //           <ProductCard product={products[3]} imageH="h-[180px] md:h-[250px] md:w-[400px]" />
// //         </div>
// //       </section>

// //         <section>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
// //           {products.slice(0, 3).map((product) => (
// //             <ProductCard key={product.id} product={product} />
// //           ))}
// //         </div>
// //       </section>

// //       {/* 🔹 More Products */}
// //       <section>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
// //           {products.slice(3).map((product) => (
// //             <ProductCard key={product.id} product={product} />
// //           ))}
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default JewelryShowcase;

// import React from "react";

// import product1 from "../../assets/productImg.png";
// import product2 from "../../assets/productImg.png";
// import product3 from "../../assets/productImg.png";

// import new1 from "../../assets/EverglowPost1.png";
// import new2 from "../../assets/EverglowPost2.png";
// import new3 from "../../assets/EverglowPost3.png";
// import new4 from "../../assets/EverglowPost4.png";

// import PromotionalBanner from "../../assets/productAds1.png";


// // 🔹 DiscoverBlock Component
// const DiscoverBlock = ({ title, subtitle, buttonText }) => (
//   <div className="flex flex-col justify-center items-start max-w-[200px]">
//     <p className="text-gray-600 text-sm font-medium">{title}</p>
//     <h3 className="text-xl md:text-2xl text-gray-900 font-semibold leading-snug my-2 uppercase tracking-wide">
//       {subtitle}
//     </h3>
//     <button className="border border-gray-700 text-gray-800 font-medium py-2 px-6 mt-4 text-sm uppercase tracking-wide transition-colors hover:bg-gray-900 hover:text-white">
//       {buttonText}
//     </button>
//   </div>
// );


// // 🔹 ProductCard Component
// const ProductCard = ({ product, imageH = "h-56 sm:h-64 lg:h-72" }) => (
//   <div className="flex flex-col bg-white rounded-xl p-4 hover:-translate-y-0.5 transition-all duration-300 h-full shadow-sm">
//     {/* Image frame */}
//     <div
//       className={`w-full ${imageH} mb-4 border-2 border-[#4B2A4B] rounded-2xl p-4 flex items-center justify-center bg-white`}
//     >
//       <img
//         src={product.image}
//         alt={product.title}
//         className="max-w-full max-h-full object-contain"
//         loading="lazy"
//         decoding="async"
//       />
//     </div>

//     {/* Title */}
//     <h3 className="text-sm font-medium text-gray-800 text-center mb-2 line-clamp-2 min-h-[44px]">
//       {product.title}
//     </h3>

//     {/* Price Row */}
//     <div className="flex justify-between items-center w-full mb-3">
//       {product.oldPrice ? (
//         <span className="text-gray-500 line-through">{product.oldPrice}</span>
//       ) : (
//         <span></span>
//       )}
//       <span className="text-[#4B2A4B] font-semibold">{product.price}</span>
//     </div>

//     {/* Buttons */}
//     <div className="mt-auto flex gap-2">
//       <button className="w-1/2 text-xs px-3 py-2 border border-gray-400 text-gray-700 rounded hover:bg-gray-100 transition-colors">
//         More Info
//       </button>
//       <button className="w-1/2 text-xs px-3 py-2 bg-[#4B2A4B] text-white rounded hover:bg-[#3b1f3b] transition-colors">
//         Add to Cart
//       </button>
//     </div>
//   </div>
// );


// // 🔹 Main Showcase Component
// const JewelryShowcase = () => {
//   const products = [
//     { id: 1, title: "Brilliant Round cut Everglow jewels", oldPrice: "₹3299", price: "₹2699", image: product1 },
//     { id: 2, title: "Brilliant Round cut Everglow jewels", oldPrice: "₹3199", price: "₹2699", image: product2 },
//     { id: 3, title: "Brilliant Round cut Everglow jewels", oldPrice: "₹2999", price: "₹2699", image: product3 },
//     { id: 4, title: "Elegant Gold Necklace", oldPrice: "₹4999", price: "₹4599", image: product1 },
//     { id: 5, title: "Classic Diamond Ring", oldPrice: "₹5999", price: "₹5599", image: product2 },
//     { id: 6, title: "Royal Silver Bracelet", price: "₹3599", image: product3 },
//   ];

//   return (
//     <div className="px-6 md:px-12 lg:px-20 py-12 space-y-16">

//       {/* 🔹 Featured Products */}
//       <section>
//         <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10 uppercase tracking-wide">
//           Featured Products
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {products.slice(0, 3).map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </section>

//       {/* 🔹 New Collection */}
//       <section className="bg-white py-12 font-sans">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-900 mb-16 tracking-widest uppercase">
//             New Collection
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
//             {/* Left Column */}
//             <div className="flex flex-col gap-10">
//               <img src={new1} alt="Assorted diamond jewelry" className="w-full h-auto object-cover shadow-md rounded-lg" />
//               <div className="flex flex-row items-center gap-6">
//                 <DiscoverBlock title="Jewelry Tells" subtitle="A Great Story" buttonText="Discover more" />
//                 <img src={new3} alt="Ruby and diamond bracelet" className="w-1/2 object-cover shadow-md rounded-lg" />
//               </div>
//             </div>

//             {/* Right Column */}
//             <div className="flex flex-col gap-10">
//               <div className="flex flex-row items-center gap-6">
//                 <img src={new2} alt="Woven diamond bracelet" className="w-1/2 object-cover shadow-md rounded-lg" />
//                 <DiscoverBlock title="Discover" subtitle="New Arrivals" buttonText="Discover more" />
//               </div>
//               <img src={new4} alt="Pendant necklace with a purple ribbon" className="w-full h-auto object-cover shadow-md rounded-lg" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 🔹 More Products */}
//       <section>
//         <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10 uppercase tracking-wide">
//           More Products
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {products.slice(3).map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </section>

//       {/* 🔹 Banner + Side Product */}
//       <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
//         {/* Left Banner */}
//         <div className="md:col-span-2 rounded-2xl overflow-hidden">
//           <img
//             src={PromotionalBanner}
//             alt="Promotional Banner"
//             className="w-full h-[420px] object-cover"
//             loading="lazy"
//             decoding="async"
//           />
//         </div>

//         {/* Right Featured Product */}
//         <div className="flex items-stretch">
//           <ProductCard product={products[4]} imageH="h-[180px] md:h-[250px] md:w-[400px]" />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default JewelryShowcase;

// import React from "react";

// import product1 from "../../assets/productImg.png";
// import product2 from "../../assets/productImg.png";
// import product3 from "../../assets/productImg.png";

// import new1 from "../../assets/EverglowPost1.png";
// import new2 from "../../assets/EverglowPost2.png";
// import new3 from "../../assets/EverglowPost3.png";
// import new4 from "../../assets/EverglowPost4.png";

// import PromotionalBanner from "../../assets/productAds1.png";

// // 🔹 DiscoverBlock Component
// const DiscoverBlock = ({ title, subtitle, buttonText }) => (
//   <div className="flex flex-col justify-center items-start max-w-[200px]">
//     <p className="text-gray-600 text-sm font-medium">{title}</p>
//     <h3 className="text-xl md:text-2xl text-gray-900 font-semibold leading-snug my-2 uppercase tracking-wide">
//       {subtitle}
//     </h3>
//     <button className="border border-gray-700 text-gray-800 font-medium py-2 px-6 mt-4 text-sm uppercase tracking-wide transition-colors hover:bg-gray-900 hover:text-white">
//       {buttonText}
//     </button>
//   </div>
// );

// // 🔹 ProductCard Component
// const ProductCard = ({ product, imageH = "h-56 sm:h-64 lg:h-72" }) => (
//   <div className="flex flex-col bg-white rounded-xl p-4 hover:-translate-y-0.5 transition-all duration-300 h-full shadow-sm">
//     {/* Image frame */}
//     <div
//       className={`w-full ${imageH} mb-4 border-2 border-[#4B2A4B] rounded-2xl p-4 flex items-center justify-center bg-white`}
//     >
//       <img
//         src={product.image}
//         alt={product.title}
//         className="max-w-full max-h-full object-contain"
//         loading="lazy"
//         decoding="async"
//       />
//     </div>

//     {/* Title */}
//     <h3 className="text-sm font-medium text-gray-800 text-center mb-2 line-clamp-2 min-h-[44px]">
//       {product.title}
//     </h3>

//     {/* Price Row */}
//     <div className="flex justify-between items-center w-full mb-3">
//       {product.oldPrice ? (
//         <span className="text-gray-500 line-through">{product.oldPrice}</span>
//       ) : (
//         <span></span>
//       )}
//       <span className="text-[#4B2A4B] font-semibold">{product.price}</span>
//     </div>

//     {/* Buttons */}
//     <div className="mt-auto flex gap-2">
//       <button className="w-1/2 text-xs px-3 py-2 border border-gray-400 text-gray-700 rounded hover:bg-gray-100 transition-colors">
//         More Info
//       </button>
//       <button className="w-1/2 text-xs px-3 py-2 bg-[#4B2A4B] text-white rounded hover:bg-[#3b1f3b] transition-colors">
//         Add to Cart
//       </button>
//     </div>
//   </div>
// );

// // 🔹 Main Showcase Component
// const JewelryShowcase = () => {
//   const products = [
//     { id: 1, title: "Brilliant Round cut Everglow jewels", oldPrice: "₹3299", price: "₹2699", image: product1 },
//     { id: 2, title: "Elegant Gold Necklace", oldPrice: "₹4999", price: "₹4599", image: product2 },
//     { id: 3, title: "Classic Diamond Ring", oldPrice: "₹5999", price: "₹5599", image: product3 },
//     { id: 4, title: "Royal Silver Bracelet", price: "₹3599", image: product1 },
//     { id: 5, title: "Stylish Diamond Earrings", oldPrice: "₹3999", price: "₹3499", image: product2 },
//     { id: 6, title: "Modern Gold Bangles", oldPrice: "₹4499", price: "₹4099", image: product3 },
//     { id: 7, title: "Luxury Platinum Ring", oldPrice: "₹9999", price: "₹8999", image: product1 },
//     { id: 8, title: "Pearl Pendant Necklace", oldPrice: "₹4599", price: "₹4199", image: product2 },
//     { id: 9, title: "Diamond Stud Earrings", oldPrice: "₹5299", price: "₹4899", image: product3 },
//     { id: 10, title: "Gold Chain Bracelet", price: "₹3799", image: product1 },
//     { id: 11, title: "Everglow Crown Jewel", oldPrice: "₹8999", price: "₹7999", image: product2 },
//     { id: 12, title: "Vintage Silver Ring", oldPrice: "₹2699", price: "₹2299", image: product3 },
//   ];

//   return (
//     <div className="px-6 md:px-12 lg:px-20 py-12 space-y-16">

//       {/* 🔹 3 Products */}
//       <section>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {products.slice(0, 3).map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </section>

//       {/* 🔹 Next 3 Products */}
//       <section>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {products.slice(3, 6).map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </section>

//       {/* 🔹 New Collection */}
//       <section className="bg-white py-12 font-sans">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-900 mb-16 tracking-widest uppercase">
//             New Collection
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
//             {/* Left Column */}
//             <div className="flex flex-col gap-10">
//               <img src={new1} alt="Jewelry" className="w-full h-auto object-cover shadow-md rounded-lg" />
//               <div className="flex flex-row items-center gap-6">
//                 <DiscoverBlock title="Jewelry Tells" subtitle="A Great Story" buttonText="Discover more" />
//                 <img src={new3} alt="Bracelet" className="w-100 h-98 object-cover shadow-md rounded-lg" />
//               </div>
//             </div>

//             {/* Right Column */}
//             <div className="flex flex-col gap-10">
//               <div className="flex flex-row items-center gap-6">
//                 <img src={new2} alt="Bracelet" className="w-100 h-98 object-cover shadow-md rounded-lg" />
//                 <DiscoverBlock title="Discover" subtitle="New Arrivals" buttonText="Discover more" />
//               </div>
//               <img src={new4} alt="Pendant" className="w-full h-auto object-cover shadow-md rounded-lg" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 🔹 Next 3 Products */}
//       <section>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {products.slice(6, 9).map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </section>

//       {/* 🔹 Next 3 Products */}
//       <section>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {products.slice(9, 12).map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </section>

//       {/* 🔹 Banner + Right Single Product */}
//       <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
//         {/* Left Banner */}
//         <div className="md:col-span-2 rounded-2xl overflow-hidden">
//           <img
//             src={PromotionalBanner}
//             alt="Promotional Banner"
//             className="w-full h-[420px] object-cover"
//             loading="lazy"
//             decoding="async"
//           />
//         </div>

//         {/* Right Single Product */}
//         <div>
//           <ProductCard product={products[0]} imageH="h-[180px] md:h-[250px]" />
//         </div>
//       </section>

//       {/* 🔹 Last 3 Products (reuse first if needed) */}
//       <section>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {products.slice(0, 3).map((product) => (
//             <ProductCard key={`last-${product.id}`} product={product} />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default JewelryShowcase;


// import React from "react";

// import product1 from "../../assets/productImg.png";
// import product2 from "../../assets/productImg.png";
// import product3 from "../../assets/productImg.png";

// import new1 from "../../assets/EverglowPost1.png";
// import new2 from "../../assets/EverglowPost2.png";
// import new3 from "../../assets/EverglowPost3.png";
// import new4 from "../../assets/EverglowPost4.png";

// import PromotionalBanner from "../../assets/productAds1.png";
// import ProductCard from "../ProductCard/ProductCard";

// // 🔹 DiscoverBlock Component
// const DiscoverBlock = ({ title, subtitle, buttonText }) => (
//   <div className="flex flex-col justify-center items-start max-w-[200px]">
//     <p className="text-gray-600 text-sm font-medium">{title}</p>
//     <h3 className="text-xl md:text-2xl text-gray-900 font-semibold leading-snug my-2 uppercase tracking-wide">
//       {subtitle}
//     </h3>
//     <button className="border border-gray-700 text-gray-800 font-medium py-2 px-6 mt-4 text-sm uppercase tracking-wide transition-colors hover:bg-gray-900 hover:text-white">
//       {buttonText}
//     </button>
//   </div>
// );

// // 🔹 ProductCard Component


// // 🔹 Main Showcase Component
// const JewelryShowcase = () => {
//   // ✅ 25 Products
//   const products = [
//     { id: 1, title: "Brilliant Round cut Everglow jewels", oldPrice: "₹3299", price: "₹2699", image: product1 },
//     { id: 2, title: "Elegant Gold Necklace", oldPrice: "₹4999", price: "₹4599", image: product2 },
//     { id: 3, title: "Classic Diamond Ring", oldPrice: "₹5999", price: "₹5599", image: product3 },
//     { id: 4, title: "Royal Silver Bracelet", price: "₹3599", image: product1 },
//     { id: 5, title: "Stylish Diamond Earrings", oldPrice: "₹3999", price: "₹3499", image: product2 },
//     { id: 6, title: "Modern Gold Bangles", oldPrice: "₹4499", price: "₹4099", image: product3 },
//     { id: 7, title: "Luxury Platinum Ring", oldPrice: "₹9999", price: "₹8999", image: product1 },
//     { id: 8, title: "Pearl Pendant Necklace", oldPrice: "₹4599", price: "₹4199", image: product2 },
//     { id: 9, title: "Diamond Stud Earrings", oldPrice: "₹5299", price: "₹4899", image: product3 },
//     { id: 10, title: "Gold Chain Bracelet", price: "₹3799", image: product1 },
//     { id: 11, title: "Everglow Crown Jewel", oldPrice: "₹8999", price: "₹7999", image: product2 },
//     { id: 12, title: "Vintage Silver Ring", oldPrice: "₹2699", price: "₹2299", image: product3 },
//     { id: 13, title: "Ruby Royal Necklace", oldPrice: "₹6499", price: "₹5999", image: product1 },
//     { id: 14, title: "Emerald Stone Earrings", oldPrice: "₹3499", price: "₹3099", image: product2 },
//     { id: 15, title: "Sapphire Gold Ring", oldPrice: "₹7299", price: "₹6899", image: product3 },
//     { id: 16, title: "Pearl Anklet", price: "₹2999", image: product1 },
//     { id: 17, title: "Kundan Bridal Set", oldPrice: "₹11999", price: "₹9999", image: product2 },
//     { id: 18, title: "Designer Pendant Chain", oldPrice: "₹4599", price: "₹4199", image: product3 },
//     { id: 19, title: "Temple Gold Necklace", oldPrice: "₹8999", price: "₹8499", image: product1 },
//     { id: 20, title: "Rose Gold Ring", oldPrice: "₹3799", price: "₹3399", image: product2 },
//     { id: 21, title: "Platinum Band", oldPrice: "₹13999", price: "₹12499", image: product3 },
//     { id: 22, title: "Antique Silver Necklace", price: "₹4599", image: product1 },
//     { id: 23, title: "Minimalist Chain", oldPrice: "₹2599", price: "₹2299", image: product2 },
//     { id: 24, title: "Royal Diamond Set", oldPrice: "₹15999", price: "₹14999", image: product3 },
//     { id: 25, title: "Floral Gold Earrings", oldPrice: "₹4999", price: "₹4599", image: product1 },
//   ];

//   return (
//     <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 space-y-16">

//       {/* 🔹 First 8 Products */}
//       <section>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6">
//           {products.slice(0, 8).map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </section>

//       {/* 🔹 New Collection */}
//       <section className="bg-white py-12 font-sans">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-12 tracking-widest uppercase">
//             New Collection
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
//             {/* Left Column */}
//             <div className="flex flex-col gap-10">
//               <img src={new1} alt="Jewelry" className="w-full h-auto object-cover shadow-md rounded-lg" />
//               <div className="flex flex-col sm:flex-row items-center gap-6">
//                 <DiscoverBlock title="Jewelry Tells" subtitle="A Great Story" buttonText="Discover more" />
//                 <img src={new3} alt="Bracelet" className="w-full sm:w-1/2 object-cover shadow-md rounded-lg" />
//               </div>
//             </div>

//             {/* Right Column */}
//             <div className="flex flex-col gap-10">
//               <div className="flex flex-col sm:flex-row items-center gap-6">
//                 <img src={new2} alt="Bracelet" className="w-full sm:w-1/2 object-cover shadow-md rounded-lg " />
//                 <DiscoverBlock title="Discover" subtitle="New Arrivals" buttonText="Discover more" />
//               </div>
//               <img src={new4} alt="Pendant" className="w-full h-auto object-cover shadow-md rounded-lg" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 🔹 Next 8 Products */}
//       <section>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6">
//           {products.slice(8, 16).map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </section>

//       {/* 🔹 Banner + Right Single Product */}
//       <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
//         {/* Left Banner */}
//         <div className="md:col-span-2 rounded-2xl overflow-hidden">
//           <img
//             src={PromotionalBanner}
//             alt="Promotional Banner"
//             className="w-full h-[320px] sm:h-[400px] md:h-[420px] object-cover"
//             loading="lazy"
//             decoding="async"
//           />
//         </div>

//         {/* Right Single Product */}
//         <div>
//           <ProductCard product={products[0]} imageH="h-[180px] md:h-[250px]" />
//         </div>
//       </section>

//       {/* 🔹 Last 9 Products */}
//       <section>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6">
//           {products.slice(16, 25).map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default JewelryShowcase;

import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

import new1 from "../../assets/EverglowPost1.png";
import new2 from "../../assets/EverglowPost2.png";
import new3 from "../../assets/EverglowPost3.png";
import new4 from "../../assets/EverglowPost4.png";

import PromotionalBanner from "../../assets/productAds0.png";
import ProductCard from "../ProductCard/ProductCard";

/* 🔹 config */
const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/api";

/* 🔹 DiscoverBlock */
const DiscoverBlock = ({ title, subtitle, buttonText }) => (
  <div className="flex flex-col justify-center items-start max-w-[220px]">
    <p className="text-gray-600 text-sm font-medium">{title}</p>
    <h3 className="text-lg sm:text-xl md:text-2xl text-gray-900 font-semibold leading-snug my-2 uppercase tracking-wide whitespace-nowrap">
      {subtitle}
    </h3>
    <button className="border border-gray-700 text-gray-800 font-medium py-2 px-6 mt-4 text-sm uppercase tracking-wide rounded-lg transition-colors hover:bg-gray-900 hover:text-white">
      {buttonText}
    </button>
  </div>
);

/* 🔹 Small adapter so ProductCard receives consistent props */
const toCardShape = (p) => {
  const images = Array.isArray(p?.image) ? p.image : [];
  const primary = images[0] || "";
  const hover = images[1] || primary || "";

  const rupee = (n) =>
    typeof n === "number" ? `${n.toLocaleString("en-IN")}` : n;

  return {
    // keep originals
    ...p,

    // common ids/titles
    id: p?._id,
    _id: p?._id,
    title: p?.name,
    name: p?.name,

    // prices (strings for display + raw values kept as well)
    price: rupee(p?.discountPrice ?? p?.price),
    oldPrice: p?.discountPrice ? rupee(p?.price) : undefined,
    discountPrice: p?.discountPrice,
    discountPercentage: p?.discountPercentage,

    // images
    image: primary,     // many ProductCard variants read `image` as a single src
    images,             // keep full array if your card uses thumbnails
    hoverImg: hover,    // hover support like your mock data

    // misc
    discount: p?.discountPercentage
      ? `${p.discountPercentage}%`
      : undefined,
  };
};

const JewelryShowcase = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        setLoading(true);
        setErr("");
        // If you have a dedicated endpoint, prefer:
        // const { data } = await axios.get(`${API}/product/list?bestseller=true`);
        const { data } = await axios.get(`${API}/product/list`);
        if (isMounted) {
          const items = Array.isArray(data?.products) ? data.products : [];
          setAllProducts(items);
        }
      } catch (e) {
        if (isMounted) setErr(e?.response?.data?.message || e.message || "Failed to load products");
      } finally {
        if (isMounted) setLoading(false);
      }
    })();

    return () => { isMounted = false; };
  }, []);

  // Only bestsellers
  const bestsellerCards = useMemo(() => {
    return allProducts
      .filter((p) => p?.bestseller === true)
      // optional: stable sort newest first
      .sort((a, b) => (b?.date || 0) - (a?.date || 0))
      .map(toCardShape);
  }, [allProducts]);

  // Slice into your three blocks (render whatever is available)
  const first8 = bestsellerCards.slice(0, 8);
  const next8  = bestsellerCards.slice(8, 16);
  const last9  = bestsellerCards.slice(16, 25);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-20">
        <p className="text-center text-gray-600">Loading bestsellers…</p>
      </div>
    );
  }

  if (err) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-20">
        <p className="text-center text-red-600">Error: {err}</p>
      </div>
    );
  }

  if (bestsellerCards.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-20">
        <p className="text-center text-gray-600">
          No bestseller products yet. Mark some items as <span className="font-medium">bestseller</span> in your backend to have them appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-16 py-12 space-y-16 max-w-7xl mx-auto">
      {/* 🔹 First 8 Products (bestsellers) */}
      {first8.length > 0 && (
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {first8.map((product) => (
              <ProductCard key={product._id || product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* 🔹 New Collection (unchanged visuals) */}
      <section className="bg-white py-12">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-12 tracking-wide uppercase">
            New Collection
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Left */}
            <div className="flex flex-col gap-10">
              <img
                src={new1}
                alt="Jewelry"
                className="w-full h-[465px] object-cover shadow-md rounded-lg"
              />

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="flex-1 w-full">
                  <DiscoverBlock
                    title="Jewelry Tells"
                    subtitle="A Great Story"
                    buttonText="Discover more"
                  />
                </div>

                <img
                  src={new3}
                  alt="Bracelet"
                  className="w-full h-[465px] object-cover shadow-md rounded-lg"
                />
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <img
                  src={new2}
                  alt="Bracelet"
                  className="w-full h-[465px] object-cover shadow-md rounded-lg"
                />
                <DiscoverBlock
                  title="Discover"
                  subtitle="New Arrivals"
                  buttonText="Discover more"
                />
              </div>

              <img
                src={new4}
                alt="Pendant"
                className="w-full h-[465px] object-cover shadow-md rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Next 8 Products */}
      {next8.length > 0 && (
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {next8.map((product) => (
              <ProductCard key={(product._id || product.id) + "-mid"} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* 🔹 Banner + Right Single Product */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        <div className="md:col-span-2 rounded-2xl overflow-hidden shadow-lg">
          <img
            src={PromotionalBanner}
            alt="Promotional Banner"
            className="w-full h-[260px] sm:h-[320px] md:h-[400px] object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Featured Product: first bestseller if available */}
        <div>
          <ProductCard
            product={bestsellerCards[0]}
            imageH="h-[180px] md:h-[250px]"
          />
        </div>
      </section>

      {/* 🔹 Last 9 Products */}
      {last9.length > 0 && (
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {last9.map((product) => (
              <ProductCard key={(product._id || product.id) + "-last"} product={product} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default JewelryShowcase;
