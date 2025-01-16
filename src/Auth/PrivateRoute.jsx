// PrivateRoute.js
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getAuth } from "firebase/auth";

// A wrapper for protected routes that checks if the user is authenticated
const PrivateRoute = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    // Redirect to login page if the user is not authenticated
    return <Navigate to="/login" />;
  }

  // Render the protected route (the nested routes)
  return <Outlet />;
};

export default PrivateRoute;