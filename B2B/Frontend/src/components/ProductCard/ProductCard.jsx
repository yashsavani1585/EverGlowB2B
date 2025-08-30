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


import React from "react";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../../utils/auth";
import { useCart } from "../../context/cartContext";

const ProductCard = ({ product, imageH = "h-[150px] md:h-[200px]" }) => {
    const navigate = useNavigate();
  const { wishHas, wishToggle } = useCart();

  const pid = product?._id || product?.id;
  const wished = wishHas(pid);   // no color on the card

  const onWish = () => {
    if (!isAuthenticated()) return navigate("/auth");
    wishToggle(pid);
  };
  return (
    <div className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition bg-white flex flex-col relative group">
      {/* 🔹 Image with overlay */}
      <div className={`relative w-full ${imageH} overflow-hidden bg-gray-50`}>
        {/* Top Overlay */}
        <div className="absolute top-2 left-2 right-2 flex justify-between items-center z-10">
          {/* Sale Badge */}
          <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-lg shadow">
            {product.discount ? `${product.discount} OFF` : "Sale"}
          </span>

          {/* Wishlist Icon */}
          <button onClick={onWish} className="p-2 bg-white rounded-full shadow hover:bg-red-500 transition-colors">
            <CiHeart size={16} className="text-black hover:text-white transition-colors" />
          </button>

        </div>

        {/* 🔹 Product Images (default + hover) */}
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
          loading="lazy"
        />
        {product.hoverImg && (
          <img
            src={product.hoverImg}
            alt={`${product.title}-hover`}
            className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            loading="lazy"
          />
        )}
      </div>

      {/* 🔹 Details */}
      <div className="p-4 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-2 text-center">
          {product.title}
        </h3>

        {/* Price Row */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-lg font-semibold text-black">
            ₹{product.price}
          </span>
          {product.oldPrice && (
            <span className="text-sm line-through text-gray-700">
              ₹{product.oldPrice}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-auto flex gap-2">
          {/* More Info Button */}
          <Link to={`/moreinfo2?id=${product.id}`} className="flex-1">
            <button className="w-full border border-[#CEBB98] text-black text-sm font-medium py-2 px-3 rounded-xl hover:bg-purple-50 transition">
              More Info
            </button>
          </Link>

          {/* Add to Cart Button */}
          <Link to="/inquiry" className="flex-1">
          <button className="w-full bg-[#CEBB98] border border-[#CEBB98] text-white text-sm font-medium py-2 px-3 rounded-xl hover:bg-[#CEBB98] transition">
            Inquiry Form
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
