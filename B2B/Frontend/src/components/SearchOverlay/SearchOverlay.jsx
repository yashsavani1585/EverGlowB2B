import React, { useEffect } from "react";
import ring from "../../assets/Rings.png";
import naklase from "../../assets/Necklace.png";
import earing from "../../assets/Earrings.png";
import bracelet from "../../assets/Bracelet.png";

const SearchOverlay = ({ open, onClose, anchorRef, query, setQuery }) => {
  useEffect(() => {
    const handler = (e) => {
      if (anchorRef.current && !anchorRef.current.contains(e.target)) {
        onClose();
      }
    };
    if (open) {
      document.addEventListener("mousedown", handler);
    }
    return () => document.removeEventListener("mousedown", handler);
  }, [open, onClose, anchorRef]);

  if (!open) return null;

  const products = [
    { name: "The Bulbasaur Ring", img: ring },
    { name: "The Gufo Kids Necklace", img: naklase },
    { name: "The Panda Carino Kids Earrings", img: earing },
    { name: "The Pikachu Bracelet", img: bracelet },
  ];

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 
                 w-full sm:w-[100%] lg:w-[60%] 
                 mt-2 bg-white border rounded-lg 
                 shadow-lg z-50 p-4
                 max-h-[70vh] overflow-y-auto"
    >
      {/* Trending */}
      {!query && (
        <>
          <h3 className="font-semibold mb-2">Trending</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              "Hello Kitty",
              "Evil Eye Collection",
              "Modern Mangalsutras",
              "Men's Rings",
            ].map((item, i) => (
              <span
                key={i}
                onClick={() => setQuery(item)}
                className="px-3 py-1 border border-gray-300 rounded-full text-sm cursor-pointer hover:bg-gray-100"
              >
                {item}
              </span>
            ))}
          </div>
        </>
      )}

      {/* What's new / search results */}
      <h3 className="font-semibold mb-3">{query ? "Results" : "What's new"}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filtered.length ? (
          filtered.map((p, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-gray-50 rounded-lg p-4 sm:p-5 hover:shadow transition"
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain mb-3"
              />
              <p className="text-sm sm:text-base md:text-lg font-medium text-center line-clamp-2">
                {p.name}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm sm:text-base col-span-full text-center">
            No results found
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchOverlay;
