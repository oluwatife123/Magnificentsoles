import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Sellers from "../pages/Sellers";
import HowItWorks from "../Pages/HowItWorks";
import FAQ from "../Pages/FAQ";
import Blogs from "../Pages/Blogs";
import Celebrities from "../Pages/Celebrities";
import Reviews from "../Pages/Reviews";
import Merch from "../Pages/Merch";
import SignIn from "../Auth/SignIn";
import Login from "../Auth/Login";

function Menubar() {
  return (
    <Router>
      <div className="border border-red-600">
        {/* Navigation Menu */}
        <nav className="border border-blue-600">
          <ul className="flex">
            <li className=""><Link to="/sellers">Sellers</Link></li> 
            <li className=""><Link to="/how-it-works">How it Works</Link></li>
            <li className=""><Link to="/faq">FAQ</Link></li>
            <li className=""><Link to="/blogs">Blogs</Link></li>
            <li className=""><Link to="/celebrities">Celebrities</Link></li>
            <li className=""><Link to="/reviews">Reviews</Link></li>
            <li className=""><Link to="/merch">Merch</Link></li>
            <li className=""><Link to="/signin">Sign In</Link></li>
          </ul>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/sellers" element={<Sellers />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/celebrities" element={<Celebrities />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </div>
    </Router>
  );
}

export default Menubar;
