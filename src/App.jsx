import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menubar from "./Auth/Menubar";
import HomePage from "./Pages/HomePage";
import Sellers from "./Pages/Sellers";
import HowItWorks from "./Pages/HowItWorks";
import FAQ from "./Pages/FAQ";
import Blogs from "./Pages/Blogs";
import SignUp from "./Auth/SignUp";
import Login from "./Auth/Login";
import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute

const App = () => {
  return (
    <Router>
      <Menubar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protect these routes */}
        <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
        <Route path="/sellers" element={<ProtectedRoute><Sellers /></ProtectedRoute>} />
        <Route path="/how-it-works" element={<ProtectedRoute><HowItWorks /></ProtectedRoute>} />
        <Route path="/faq" element={<ProtectedRoute><FAQ /></ProtectedRoute>} />
        <Route path="/blogs" element={<ProtectedRoute><Blogs /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
};

export default App;