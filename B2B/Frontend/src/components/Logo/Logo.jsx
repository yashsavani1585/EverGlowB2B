import React from "react";
import logo from "../../assets/EverGlow2.png";

const Logo = () => {
  return (
    <div className="h-25 w-auto flex items-center">
      <img
        src={logo}
        alt="Everglow Logo"
        className="h-40 object-contain"
      />
    </div>
  );
};

export default Logo;
