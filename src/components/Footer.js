import React from "react";
import whitelogo from "../assets/rarekraftwhite.svg"
import { FaInstagram, FaWhatsapp, } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-950 from-black via-gray-900 to-black text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-14 flex justify-between">

        {/* Brand */}
        <div>
          <img src={whitelogo} width={70} height={70}></img>
          <p className="text-sm leading-relaxed mt-4">
            Discover premium products curated for your lifestyle.<br />
            Quality, style, and elegance in one place.
          </p>
        </div>


        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-orange-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-orange-400">
              <FaWhatsapp />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} RareKraft. All Rights Reserved.
      </div>
    </footer>

  );
}

export default Footer;
