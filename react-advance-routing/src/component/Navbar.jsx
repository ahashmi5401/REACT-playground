import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

function Navbar() {
  return (
    <nav className="bg-black text-[#D4AF37] px-6 py-4 flex justify-between items-center shadow-lg">
      
      {/* Logo */}
      <div className="text-2xl font-extrabold tracking-wide">
        <Link to="/" className="hover:text-yellow-400 transition">
          LuxeMall
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6 font-medium">
        <Link to="/" className="hover:text-yellow-400 transition">
          Home
        </Link>
        <Link to="/shop" className="hover:text-yellow-400 transition">
          Shop
        </Link>
        <Link to="/categories" className="hover:text-yellow-400 transition">
          Categories
        </Link>
        <Link to="/contact" className="hover:text-yellow-400 transition">
          Contact
        </Link>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <Link
          to="/cart"
          className="hover:text-yellow-400 transition flex items-center"
        >
          <ShoppingCart size={22} />
        </Link>

        <Link
          to="/login"
          className="border border-[#D4AF37] px-4 py-2 rounded hover:bg-[#D4AF37] hover:text-black transition"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
