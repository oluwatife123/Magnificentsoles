import React from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Add any authentication logic if needed
    navigate("/login"); // Navigate to the Login page
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={handleSignIn}>Proceed to Login</button>
    </div>
  );
};

export default SignIn;
