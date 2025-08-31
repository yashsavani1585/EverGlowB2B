
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import bgurl from "../../assets/bgurl.png";
import logoUrl from "../../assets/EverGlow2.png";

export default function Footer() {
  return (
    <footer
      className="text-black py-8 sm:py-10 px-4 sm:px-6 bg-cover bg-center text-1xl sm:text-1xl md:text-1xl lg:text-1xl"
      style={{ backgroundImage: `url(${bgurl})` }}
    >
      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 text-center md:text-left">

        {/* 1. About + Logo + Social */}
        <div className="flex flex-col items-center md:items-start">
          <div className="w-[190px] h-[80px] flex items-center justify-center">
            <img
              src={logoUrl}
              alt="EverGlow Logo"
              className="w-[250%] h-[300%] object-contain bg-transparent mix-blend-normal"
            />
          </div>
          <p className="text-1xl sm:text-1xl leading-relaxed mb-3 max-w-[220px]">
            At  we believe that Jewellery is more than adornment.
            Founded in 2023, our passion for quality drives us to create unique
            pieces.
          </p>
          <div className="flex justify-center md:justify-start gap-3 text-base sm:text-lg">
            {[FaInstagram, FaWhatsapp, FaFacebookF, FaLinkedinIn, FaPinterestP].map(
              (Icon, i) => (
                <Icon
                  key={i}
                  className="cursor-pointer hover:text-white transition-colors"
                />
              )
            )}
          </div>
        </div>

        {/* 2. Policies */}
        <div>
          <h3 className="font-serif text-sm sm:text-base mb-2 border-b border-white/40 pb-1">
            POLICIES
          </h3>
          <ul className="space-y-1">
            {[
             { label: "Exchange & Buy Back Policy", href: "/exchange-policy" },
              { label: "Shipping Policy", href: "/shipping-policy" },
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms and Conditions", href: "/terms" },
            ].map((item, i) => (
              <li
                key={i}
                className="hover:underline cursor-pointer hover:text-white transition"
              >
                 <a
                  href={item.href}
                  className="hover:underline cursor-pointer hover:text-white transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Categories */}
        <div>
          <h3 className="font-serif text-sm sm:text-base mb-2 border-b border-white/40 pb-1">
            CATEGORIES
          </h3>
          <ul className="space-y-1">
            {
            [
              { label: "Rings", href: "/rings" },
              { label: "Earrings", href: "/earrings" },
              { label: "Bracelets", href: "/bracelet" },
              { label: "Pendants", href: "/pendantset" },
              { label: "necklace", href: "/necklace" },
            ].map(
              (item, i) => (
                <li
                  key={i}
                  className="hover:underline cursor-pointer hover:text-white transition"
                >
                 <a
                  href={item.href}
                  className="hover:underline cursor-pointer hover:text-white transition"
                >
                  {item.label}
                </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* 4. Our Company */}
        <div>
          <h3 className="font-serif text-sm sm:text-base mb-2 border-b border-white/40 pb-1">
            OUR COMPANY
          </h3>
          <ul className="space-y-1">
            {[
              "Custom Jewellery",
              "About Us",
              "About Lab Diamonds",
              "Ring Size Guide",
              "FAQs",
              "Blogs",
              "Store Locator",
              "Contact Us",
            ].map((item, i) => (
              <li
                key={i}
                className="hover:underline cursor-pointer hover:text-white transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 5. Newsletter */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="uppercase text-[10px] sm:text-xs tracking-widest mb-1">Newsletter</h3>
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-serif mb-4 text-nowrap">Join Today</h2>

          <form className="flex items-center w-full max-w-[220px] sm:max-w-xs border border-black rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Enter your Email"
              className="bg-transparent flex-1 px-3 py-2 text-[11px] sm:text-xs placeholder-white outline-none"
            />
            <button
              type="submit"
              className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 mr-1 m-1 rounded-full bg-black text-white  hover:text-white transition"
            >
              <IoIosArrowForward size={16} />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-8 border-t border-white/40 pt-3 text-center text-[10px] sm:text-xs">
        © {new Date().getFullYear()} EverGlow. All Rights Reserved.
      </div>
    </footer>
  );
}
