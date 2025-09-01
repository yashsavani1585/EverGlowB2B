import React from 'react';
import everglowlogo from '../assets/everglowlogo.png'
const Navbar = ({ setToken }) => {
  return (
    <div
      className="w-full sticky top-0 z-40 bg-white/90 backdrop-blur border-b"
      style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-xl"> <img src={everglowlogo} alt="" /></div>
          <h1 className="text-xl sm:text-2xl font-semibold text-[#4f1c51]">
            EverGlow Admin
          </h1>
        </div>
        <button
          onClick={() => setToken('')}
          className="rounded-full bg-[#4f1c51] text-white px-5 py-2 text-sm shadow hover:shadow-md active:scale-[0.98] transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
