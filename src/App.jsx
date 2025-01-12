// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menubar from "./Menu/Menubar";
import HomePage from "./Pages/HomePage";
import Sellers from "./Pages/Sellers";
import FAQ from "./Pages/FAQ";
import HowItWorks from "./Pages/HowItWorks";
import Blogs from "./Pages/Blogs";
import SignIn from "./Auth/SignUp";
import Login from "./Auth/Login";

function App() {
  return (
    <Router>
      <Menubar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sellers" element={<Sellers />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
