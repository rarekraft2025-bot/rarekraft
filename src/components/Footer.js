import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left */}
        <p className="text-sm">&copy; {new Date().getFullYear()} rarekraft. All rights reserved.</p>

        {/* Right / Links */}
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="#" className="hover:text-gray-400 text-sm">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-400 text-sm">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gray-400 text-sm">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
