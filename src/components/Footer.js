import React from "react";
import whitelogo from "../assets/rarekraftwhite.svg";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12
        flex flex-col md:flex-row
        gap-10 md:gap-0
        md:justify-between
        text-center md:text-left"
      >

        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src={whitelogo}
            alt="RareKraft"
            className="w-[70px] h-auto"
          />
          <p className="text-sm leading-relaxed mt-4 max-w-xs">
            Discover premium products curated for your lifestyle.
            Quality, style, and elegance in one place.
          </p>
        </div>

        {/* Social */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-lg font-semibold text-white mb-4">
            Follow Us
          </h3>

          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/rarekraft_for_rare"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/918878236700"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} RareKraft. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;
