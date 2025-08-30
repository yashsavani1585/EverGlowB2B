// import React, { useState, useRef, useEffect } from "react";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   // Close dropdown on outside click
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Close dropdown on menu item click
//   const handleMenuClick = () => {
//     setIsOpen(false);
//   };

//   return (
//     <nav className="max-w-6xl mx-auto flex justify-center space-x-12 mt-0 text-[#CEBB98] font-medium h-16 items-center relative">
//       {/* Shop by Category with Dropdown */}
//       <div className="relative" ref={dropdownRef}>
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="flex items-center space-x-1 hover:underline focus:outline-none"
//         >
//           <span>Shop by Category</span>
//           {isOpen ? (
//             <FaChevronUp className="text-xs" />
//           ) : (
//             <FaChevronDown className="text-xs" />
//           )}
//         </button>

//         {/* Dropdown */}
//         {isOpen && (
//           <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg border rounded-md z-20">
//             <ul className="flex flex-col text-[#CEBB98] font-semibold">
//               <li
//                 className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                 onClick={handleMenuClick}
//               >
//                 <Link to="/rings">RINGS</Link>
//               </li>
//               <li
//                 className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                 onClick={handleMenuClick}
//               >
//                 <Link to="/earrings">EARRINGS</Link>
//               </li>
//               <li
//                 className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                 onClick={handleMenuClick}
//               >
//                 <Link to="/bracelet">BRACELET</Link>
//               </li>
//               <li
//                 className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                 onClick={handleMenuClick}
//               >
//                 <Link to="/necklace">NECKLACE</Link>
//               </li>
//               <li
//                 className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                 onClick={handleMenuClick}
//               >
//                 <Link to="/pendantset">PENDANT SET</Link>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>

//       {/* Other Menu Items */}
//       <Link to="/giftstore" className="hover:underline">
//         Gift Store
//       </Link>
//       <Link to="/personalized" className="hover:underline">
//         Personalized Jewelry
//       </Link>
//       <Link to="/collections" className="hover:underline">
//         Latest Collections
//       </Link>
//     </nav>
//   );
// };

// export default NavBar;


import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const NavBar = ({ onLinkClick, mobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const handleMouseEnter = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsOpen(false);
    }, 1000); // 3 sec tak open rahe
    setHoverTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeout) clearTimeout(hoverTimeout);
    };
  }, [hoverTimeout]);

  return (
    <nav className="w-full text-black font-medium">
      {/* Desktop Navbar */}
      {!mobile && (
        <div className="flex justify-center items-center space-x-12 p-4 md:px-10">
          {/* Home Link */}
          <Link
            to="/"
            className={`transition-colors ${location.pathname === "/" ? "text-yellow-900" : "hover:text-yellow-700"
              }`}
            onClick={onLinkClick}
          >
            Home
          </Link>

          {/* Shop by Category Dropdown */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`flex items-center space-x-1 transition-colors ${["/rings", "/earrings", "/bracelet", "/necklace", "/pendantset"].includes(
                location.pathname
              )
                ? "text-yellow-900"
                : "hover:text-yellow-700"
                }`}
            >
              <span>Shop by Category</span>
              {isOpen ? (
                <FaChevronUp className="text-xs" />
              ) : (
                <FaChevronDown className="text-xs" />
              )}
            </button>
            {isOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg border rounded-md z-20 animate-fadeIn">
                <ul className="flex flex-col text-yellow-700 font-semibold">
                  {[
                    { name: "RINGS", path: "/rings" },
                    { name: "EARRINGS", path: "/earrings" },
                    { name: "BRACELET", path: "/bracelet" },
                    { name: "NECKLACE", path: "/necklace" },
                    { name: "PENDANT SET", path: "/pendantset" },
                  ].map((item, i) => (
                    <li
                      key={i}
                      className={`px-4 py-2 hover:bg-gray-100 ${location.pathname === item.path ? "text-yellow-900" : ""
                        }`}
                    >
                      <Link
                        to={item.path}
                        onClick={() => {
                          onLinkClick?.();   // agar parent ko notify karna hai
                          setIsOpen(false);  // ✅ dropdown close
                        }}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>

              </div>
            )}
          </div>

          {/* Static Links */}
          <Link
            to="/giftstore"
            className={`transition-colors ${location.pathname === "/giftstore"
              ? "text-yellow-900"
              : "hover:text-yellow-700"
              }`}
            onClick={onLinkClick}
          >
            Gift Store
          </Link>
          <Link
            to="/personalized"
            className={`transition-colors ${location.pathname === "/personalized"
              ? "text-yellow-900"
              : "hover:text-yellow-700"
              }`}
            onClick={onLinkClick}
          >
            Personalized Jewelry
          </Link>
          <Link
            to="/collections"
            className={`transition-colors ${location.pathname === "/collections"
              ? "text-yellow-900"
              : "hover:text-yellow-700"
              }`}
            onClick={onLinkClick}
          >
            Latest Collections
          </Link>
        </div>
      )}

      {/* Mobile Drawer Navbar (unchanged for now) */}
      {mobile && (
        <div className="relative">
          <button
            onClick={onLinkClick}
            className="absolute top-3 right-3 text-gray-600 hover:text-black transition-colors z-30"
          >
            <FaTimes size={22} />
          </button>
          <ul className="pt-12 space-y-5 font-semibold px-4">
            <li>
              <Link
                to="/"
                onClick={onLinkClick}
                className={location.pathname === "/" ? "text-yellow-900" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <span className="font-bold">Shop by Category</span>
              <ul className="flex flex-col text-yellow-700 font-semibold">
                {[
                  { name: "RINGS", path: "/rings" },
                  { name: "EARRINGS", path: "/earrings" },
                  { name: "BRACELET", path: "/bracelet" },
                  { name: "NECKLACE", path: "/necklace" },
                  { name: "PENDANT SET", path: "/pendantset" },
                ].map((item, i) => (
                  <li
                    key={i}
                    className={`px-4 py-2 hover:bg-gray-100 ${location.pathname === item.path ? "text-yellow-900" : ""
                      }`}
                  >
                    <Link
                      to={item.path}
                      onClick={() => {
                        onLinkClick?.();   // agar parent ko notify karna hai
                        setIsOpen(false);  // ✅ dropdown close
                      }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

            </li>
            <li>
              <Link
                to="/giftstore"
                onClick={onLinkClick}
                className={location.pathname === "/giftstore" ? "text-yellow-900" : ""}
              >
                Gift Store
              </Link>
            </li>
            <li>
              <Link
                to="/personalized"
                onClick={onLinkClick}
                className={location.pathname === "/personalized" ? "text-yellow-900" : ""}
              >
                Personalized Jewelry
              </Link>
            </li>
            <li>
              <Link
                to="/collections"
                onClick={onLinkClick}
                className={location.pathname === "/collections" ? "text-yellow-900" : ""}
              >
                Latest Collections
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
