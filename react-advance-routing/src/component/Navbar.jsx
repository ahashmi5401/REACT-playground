import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link to="/">SwimConnect</Link>
      </div>
      <div className="space-x-4">
        <Link
          to="/"
          className="hover:bg-blue-500 px-3 py-2 rounded transition"
        >
          Home
        </Link>
        <Link
          to="./About"
          className="hover:bg-blue-500 px-3 py-2 rounded transition"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="hover:bg-blue-500 px-3 py-2 rounded transition"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;