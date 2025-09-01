import React from "react";
import { Link } from "react-router-dom";

import Round from "../../assets/Round.png";
import Princess from "../../assets/Princess.png";
import Emerald from "../../assets/EmerAld.png";
import Oval from "../../assets/Oval.png";
import Pear from "../../assets/Pear.png";

const categories = [
  { id: 1, img: Round, link: "/inquiry" },
  { id: 2, img: Princess, link: "/inquiry" },
  { id: 3, img: Emerald, link: "/inquiry" },
  { id: 4, img: Oval, link: "/inquiry" },
  { id: 5, img: Pear, link: "/inquiry" },
];

const DimondCategorySection = () => {
  return (
        <section className="w-full bg-white pt-0 pb-10 px-4 sm:px-6 md:px-12">
      {/* Heading */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-black">
          DISCOVER SHAPES
        </h2>
        <p className="text-sm sm:text-base md:text-xl text-gray-600 font-bold mt-2">
          Explore our curated selection, categorized by diamond shape, to find
          your perfect expression of elegance.
        </p>
      </div>

      {/* Categories - Always 5 Columns */}
      <div className="max-w-6xl mx-auto  grid grid-cols-5 gap-6 md:gap-8">
        {categories.map((cat) => (
          <div key={cat.id} className="flex flex-col items-center text-center">
            <Link to={cat.link}>
              {/* Same Width & Height for all images */}
              <div className="w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 overflow-hidden rounded-xl shadow-md">
                <img
                  src={cat.img}
                  alt="Diamond Shape"
                  className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DimondCategorySection;
