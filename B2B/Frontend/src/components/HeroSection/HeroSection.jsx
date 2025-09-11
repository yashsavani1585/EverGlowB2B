// import React from "react";
// import heroImg from "../../assets/homeHero.png";

// const HeroSection = () => {
//   return (
//     <section
//       className="
//         relative w-full 
//         h-[220px] sm:h-[320px] md:h-[420px] lg:h-[550px] xl:h-[700px] 
//         bg-cover bg-left
//       "
//       style={{ backgroundImage: `url(${heroImg})` }}
//     >
//       {/* Overlay for readability */}
//       <div className="absolute inset-0 bg-white/40"></div>

//       {/* Text Content - Right Side */}
//       <div className="relative z-10 flex justify-end items-center h-full px-4 sm:px-8 md:px-12 lg:px-20">
//         <div className="max-w-md sm:max-w-lg md:max-w-xl text-right">
//           {/* Heading */}
//           <h2
//             className="
//               text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
//               font-semibold text-black mb-2 sm:mb-4 text-nowrap
//             "
//           >
//             LOVE & ENGAGEMENT
//           </h2>


//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// Hero Slider Images
import slide1 from "../../assets/homeHero1.png";
import slide2 from "../../assets/homeHero2.png";
import slide3 from "../../assets/homeHero3.png";

const HeroSection = () => {
  return (
    <section className="relative w-full">
      <Swiper
        modules={[Autoplay]}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={800}
        className="w-full h-[180px] sm:h-[280px] md:h-[350px] lg:h-[500px] xl:h-[550px]"
      >
        {[slide1, slide2, slide3].map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
