import React from "react";
import { Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import app from "../../firebase/firebaseConfig"; // Import the initialized Firebase app

const ProtectedRoute = ({ children }) => {
  const auth = getAuth(app); // Get the Firebase auth instance
  const user = auth.currentUser; // Get the current authenticated user

  // Check if the user is logged in; if not, redirect to the login page
  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
