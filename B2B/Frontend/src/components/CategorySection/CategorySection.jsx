// import React, { useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { Link } from "react-router-dom";

// import ringImg from "../../assets/Rings.png";
// import earringImg from "../../assets/Earrings.png";
// import braceletImg from "../../assets/Bracelet.png";
// import necklaceImg from "../../assets/Necklace.png";
// import pendantImg from "../../assets/PandaleSet.png";

// const categories = [
//   { id: 1, title: "RINGS", img: ringImg, link: "/rings" },
//   { id: 2, title: "EARRINGS", img: earringImg, link: "/earrings" },
//   { id: 3, title: "BRACELET", img: braceletImg, link: "/bracelet" },
//   { id: 4, title: "NECKLACE", img: necklaceImg, link: "/necklace" },
//   { id: 5, title: "PENDANT SET", img: pendantImg, link: "/pendantset" },
// ];

// const CategorySection = () => {
//   const [index, setIndex] = useState(0);

//   // Loop Next
//   const nextSlide = () => {
//     setIndex((prev) => (prev >= categories.length - 2 ? 0 : prev + 1));
//   };

//   // Loop Prev
//   const prevSlide = () => {
//     setIndex((prev) => (prev === 0 ? categories.length - 2 : prev - 1));
//   };

//   return (
//     <section className="w-full bg-white py-12 px-4 md:px-12">
//       {/* Heading */}
//       <div className="text-center mb-10">
//         <h2 className="text-3xl md:text-4xl font-semibold text-[#CEBB98]">
//           Find Your Perfect Match
//         </h2>
//         <p className="text-lg md:text-xl text-[#CEBB98] font-medium mt-2">
//           Radiance Fits for Everyone
//         </p>
//       </div>

//       {/* --- Mobile + Tablet Slider (sm–lg) --- */}
//       <div className="block xl:hidden relative">
//         {/* Slider Container */}
//         <div className="overflow-hidden">
//           <div
//             className="flex transition-transform duration-500"
//             style={{ transform: `translateX(-${index * 50}%)` }}
//           >
//             {categories.map((cat) => (
//               <div
//                 key={cat.id}
//                 className="w-1/2 flex-shrink-0 flex flex-col items-center text-center px-2"
//               >
//                 <Link to={cat.link}>
//                   <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 overflow-hidden rounded-2xl shadow-md">
//                     <img
//                       src={cat.img}
//                       alt={cat.title}
//                       className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//                     />
//                   </div>
//                   <p className="mt-3 text-sm md:text-base font-medium text-[#CEBB98]">
//                     {cat.title}
//                   </p>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Arrows Below */}
//         <div className="flex justify-center items-center gap-6 mt-6">
//           <button
//             onClick={prevSlide}
//             className="bg-white shadow-md p-3 rounded-full hover:bg-purple-100"
//           >
//             <FaChevronLeft className="text-[#CEBB98] text-lg sm:text-xl" />
//           </button>
//           <button
//             onClick={nextSlide}
//             className="bg-white shadow-md p-3 rounded-full hover:bg-purple-100"
//           >
//             <FaChevronRight className="text-[#CEBB98] text-lg sm:text-xl" />
//           </button>
//         </div>
//       </div>

//       {/* --- Desktop Grid (xl+) --- */}
//       <div className="hidden xl:grid max-w-7xl mx-auto grid-cols-3 lg:grid-cols-5 gap-8">
//         {categories.map((cat) => (
//           <Link
//             key={cat.id}
//             to={cat.link}
//             className="flex flex-col items-center text-center group"
//           >
//             <div className="w-40 h-40 xl:w-44 xl:h-44 overflow-hidden rounded-2xl shadow-md">
//               <img
//                 src={cat.img}
//                 alt={cat.title}
//                 className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//               />
//             </div>
//             <p className="mt-3 text-base font-medium text-[#CEBB98]">
//               {cat.title}
//             </p>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CategorySection;

// import React, { useState, useEffect } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { Link } from "react-router-dom";

// import ringImg from "../../assets/Rings.png";
// import earringImg from "../../assets/Earrings.png";
// import braceletImg from "../../assets/Bracelet.png";
// import necklaceImg from "../../assets/Necklace.png";
// import pendantImg from "../../assets/PandaleSet.png";

// const categories = [
//   { id: 1, title: "RINGS", img: ringImg, link: "/rings" },
//   { id: 2, title: "EARRINGS", img: earringImg, link: "/earrings" },
//   { id: 3, title: "BRACELET", img: braceletImg, link: "/bracelet" },
//   { id: 4, title: "NECKLACE", img: necklaceImg, link: "/necklace" },
//   { id: 5, title: "PENDANT SET", img: pendantImg, link: "/pendantset" },
// ];

// const CategorySection = () => {
//   const [index, setIndex] = useState(0);
//   const [itemsPerView, setItemsPerView] = useState(2);

//   // 🖥️ Responsive items per view
//   useEffect(() => {
//     const updateItemsPerView = () => {
//       if (window.innerWidth < 640) setItemsPerView(2); // mobile
//       else if (window.innerWidth < 1024) setItemsPerView(3); // tablet
//       else setItemsPerView(5); // desktop
//     };

//     updateItemsPerView();
//     window.addEventListener("resize", updateItemsPerView);
//     return () => window.removeEventListener("resize", updateItemsPerView);
//   }, []);

//   // Loop Next
//   const nextSlide = () => {
//     setIndex((prev) =>
//       prev >= categories.length - itemsPerView ? 0 : prev + 1
//     );
//   };

//   // Loop Prev
//   const prevSlide = () => {
//     setIndex((prev) =>
//       prev === 0 ? categories.length - itemsPerView : prev - 1
//     );
//   };

//   return (
//     <section className="w-full bg-white py-12 px-4 md:px-12">
//       {/* Heading */}
//       <div className="text-center mb-10">
//         <h2 className="text-3xl md:text-4xl font-semibold text-[#CEBB98]">
//           Find Your Perfect Match
//         </h2>
//         <p className="text-lg md:text-xl text-[#CEBB98] font-medium mt-2">
//           Radiance Fits for Everyone
//         </p>
//       </div>

//       {/* --- Custom Slider --- */}
//       <div className="relative max-w-6xl mx-auto">
//         <div className="overflow-hidden">
//           <div
//             className="flex transition-transform duration-500"
//             style={{
//               transform: `translateX(-${(index * 100) / itemsPerView}%)`,
//             }}
//           >
//             {categories.map((cat) => (
//               <div
//                 key={cat.id}
//                 className={`flex-shrink-0 flex flex-col items-center text-center px-2
//                   ${itemsPerView === 2 ? "w-1/2" : ""}
//                   ${itemsPerView === 3 ? "w-1/3" : ""}
//                   ${itemsPerView === 4 ? "w-1/4" : ""}
//                 `}
//               >
//                 <Link to={cat.link}>
//                   <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 overflow-hidden rounded-2xl shadow-md">
//                     <img
//                       src={cat.img}
//                       alt={cat.title}
//                       className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//                     />
//                   </div>
//                   <p className="mt-3 text-sm md:text-base font-medium text-[#CEBB98]">
//                     {cat.title}
//                   </p>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Arrows */}
//         <div className="flex justify-center items-center gap-6 mt-6">
//           <button
//             onClick={prevSlide}
//             className="bg-white shadow-md p-3 rounded-full hover:bg-purple-100"
//           >
//             <FaChevronLeft className="text-[#CEBB98] text-lg sm:text-xl" />
//           </button>
//           <button
//             onClick={nextSlide}
//             className="bg-white shadow-md p-3 rounded-full hover:bg-purple-100"
//           >
//             <FaChevronRight className="text-[#CEBB98] text-lg sm:text-xl" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CategorySection;

import React from "react";
import { Link } from "react-router-dom";

import ringImg from "../../assets/Rings.png";
import earringImg from "../../assets/Earrings.png";
import braceletImg from "../../assets/Bracelet.png";
import necklaceImg from "../../assets/Necklace.png";
import pendantImg from "../../assets/PandaleSet.png";

const categories = [
  { id: 1, title: "RINGS", img: ringImg, link: "/rings" },
  { id: 2, title: "EARRINGS", img: earringImg, link: "/earrings" },
  { id: 3, title: "BRACELET", img: braceletImg, link: "/bracelet" },
  { id: 4, title: "NECKLACE", img: necklaceImg, link: "/necklace" },
  { id: 5, title: "PENDANT", img: pendantImg, link: "/pendantset" },
];

const CategorySection = () => {
  return (
    <section className="w-full bg-white py-10 px-3 sm:px-6 md:px-12">
      {/* Heading */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-black">
          Find Your Perfect Match
        </h2>
        <p className="text-sm sm:text-base md:text-xl text-gray-600 font-bold mt-2">
          Radiance Fits for Everyone
        </p>
      </div>

      {/* Categories - Always 5 Columns */}
      <div className="max-w-6xl mx-auto grid grid-cols-5 gap-3 sm:gap-6 md:gap-8">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="flex flex-col items-center text-center"
          >
            <Link to={cat.link}>
              {/* Responsive image size */}
              <div className="w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 overflow-hidden rounded-xl shadow-md">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Responsive text */}
              <p className="mt-2 text-[10px] sm:text-xs md:text-sm lg:text-base font-medium text-black">
                {cat.title}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
