import React from "react";
import heroSection from "../../assets/HeroSection9.png";

const HeroSection9 = () => {
  return (
    <section
      className="
        relative w-full 
        h-[180px] sm:h-[250px] md:h-[350px] lg:h-[450px] xl:h-[550px] 2xl:h-[650px] 
        max-w-full mx-auto bg-cover bg-center
      "
      style={{ backgroundImage: `url(${heroSection})` }}
    >
      {/* Gradient Overlay (optional for contrast) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
    </section>
  );
};

export default HeroSection9;
