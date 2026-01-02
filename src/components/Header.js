import logo from "../assets/Rare_kraft.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaShoppingCart } from "react-icons/fa";

function Header({ cartCount }) {
  const [cart, setCart] = useState([]);
  return (
    <>
      {/* ===== Top Header ===== */}
      <div className="w-full bg-black text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">

          {/* Phone */}
          <p className="text-xs md:text-sm">
            <a href="tel:8878236700">📞 8878236700</a>
          </p>

          {/* Social Icons */}
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

      {/* ===== Primary Header ===== */}
      <header className="w-full border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Rare Kraft" className="h-14" />
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-orange-500 font-medium"
            >
              Home
            </Link>

            <Link
              to="/checkout"
              className="text-gray-700 hover:text-orange-500 font-medium"
            >
              Checkout
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative">
              <FaShoppingCart className="text-xl" />

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}


export default Header;