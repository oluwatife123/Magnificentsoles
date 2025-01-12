// components/Menubar.js
import React from "react";
import { Link } from "react-router-dom";

function Menubar() {
  return (
    <div className="w-full bg-purple-600 p-4">
      <nav className="flex justify-around text-white">
        <Link to="/">Home</Link>
        <Link to="/sellers">Sellers</Link>
        <Link to="/how-it-works">How It Works</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
}

export default Menubar;
