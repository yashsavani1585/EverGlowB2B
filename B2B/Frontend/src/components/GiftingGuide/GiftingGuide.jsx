// import React from "react";
// import forHerImg from "../../assets/ForHer.png";
// import forHimImg from "../../assets/ForHim.png";

// const gifts = [
//     { id: 1, title: "FOR HER", img: forHerImg },
//     { id: 2, title: "FOR HIM", img: forHimImg },
// ];

// const GiftingGuide = () => {
//     return (
//         <section className="w-full bg-white py-12 px-4 md:px-12">
//             {/* Heading */}
//             <div className="text-center mb-10">
//                 <h2 className="text-3xl md:text-4xl font-semibold text-[#CEBB98]">
//                     GIFTING GUIDE
//                 </h2>
//                 <p className="text-lg md:text-xl text-[#CEBB98] font-medium mt-2">
//                     gifts for your loved one
//                 </p>
//             </div>

//             {/* Grid Section */}
//             <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {gifts.map((gift) => (
//                     <div
//                         key={gift.id}
//                         className="relative group overflow-hidden rounded-lg shadow-lg"
//                     >
//                         {/* Image */}
//                         <img
//                             src={gift.img}
//                             alt={gift.title}
//                             className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
//                         />

//                         {/* Gradient Overlay */}
//                         <div className="absolute inset-0 bg-[#CEBB98]/70 flex items-center justify-center">
//                             <h3 className="text-3xl md:text-4xl font-bold text-white text-center drop-shadow-lg">
//                                 {gift.title}
//                             </h3>
//                         </div>

//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default GiftingGuide;

import React from "react";
import forHerImg from "../../assets/ForHer.png";
import forHimImg from "../../assets/ForHim.png";

const gifts = [
    { id: 1, title: "FOR HER", img: forHerImg },
    { id: 2, title: "FOR HIM", img: forHimImg },
];

const GiftingGuide = () => {
    return (
        <section className="w-full bg-white py-0 px-1 md:px-9 ">
            {/* Heading */}
            <div className="text-center mb-6">
                <h2 className="text-3xl md:text-4xl font-semibold text-black">
                    GIFTING GUIDE
                </h2>
                <p className="text-lg md:text-xl text-gray-600 font-bold mt-1">
                    gifts for your loved one
                </p>
            </div>

            {/* Grid Section */}
            <div className="max-w-6xl mx-auto grid grid-cols-2 gap-2 sm:gap-4 md:gap-6">
                {gifts.map((gift) => (
                    <div
                        key={gift.id}
                        className="relative group overflow-hidden rounded-lg shadow-lg"
                    >
                        {/* Image */}
                        <img
                            src={gift.img}
                            alt={gift.title}
                            className="w-full h-[180px] sm:h-[260px] md:h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-[#CEBB98]/70 flex items-center justify-center">
                            <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-black text-center drop-shadow-lg">
                                {gift.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default GiftingGuide;
