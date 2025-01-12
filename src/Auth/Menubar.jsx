import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import app from "../../firebase/firebaseConfig"; // Import the initialized Firebase app
import 'primeicons/primeicons.css';

function Menubar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); // Update user state based on authentication
    });

    return () => unsubscribe(); // Cleanup the subscription on unmount
  }, []);

  return (
    <div className="fixed top-0 w-full bg-purple-600 p-4 z-50">
      {/* Hamburger Icon for Mobile */}
      <div className="flex items-center justify-between md:hidden">
        <h1 className="lg:text-lg text-xl px-2 rounded-full font-poppins font-bold italic tracking-wide text-center text-pink-600">
          Magnificent<br />Soles
        </h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl"
        >
          <i className={`pi ${isOpen ? "pi-times" : "pi-bars"}`}></i>
        </button>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-19.2 left-0 h-[40vh] md:h-[4vh] opacity-52 bg-purple-600 text-white w-full transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-1000 md:static md:translate-x-0 md:flex md:w-full md:bg-transparent`}
      >
        <nav className="flex flex-col md:flex-row md:justify-around py-4 px-10 space-y-4 md:space-y-0">
          <Link to="/" className="hover:text-gray-300 hover:bg-pink-400 py-3 pl-1 pr-9" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/sellers" className="hover:text-gray-300 hover:bg-pink-400 py-1 pl-1 pr-9" onClick={() => setIsOpen(false)}>
            Sellers
          </Link>
          <Link to="/how-it-works" className="hover:text-gray-300 hover:bg-pink-400 py-1 pl-1 pr-9" onClick={() => setIsOpen(false)}>
            How It Works
          </Link>
          <Link to="/faq" className="hover:text-gray-300 hover:bg-pink-400 py-1 pl-1 pr-9" onClick={() => setIsOpen(false)}>
            FAQ
          </Link>
          <Link to="/blogs" className="hover:text-gray-300 hover:bg-pink-400 py-1 pl-1 pr-9" onClick={() => setIsOpen(false)}>
            Blogs
          </Link>
          {!user ? (
            <>
              <Link to="/signup" className="hover:text-gray-300 hover:bg-pink-400 py-1 pl-1 pr-9" onClick={() => setIsOpen(false)}>
                Sign Up
              </Link>
              <Link to="/login" className="hover:text-gray-300 hover:bg-pink-400 py-1 pl-1 pr-9" onClick={() => setIsOpen(false)}>
                Login
              </Link>
            </>
          ) : (
			<div className="flex items-center justify-left">
            <button
              onClick={() => {
                const auth = getAuth(app);
                auth.signOut(); // Sign out the user
                setUser(null); // Clear the user state
              }}
              className="hover:text-gray-300 hover:bg-pink-400 py-1 pl-1 pr-9"
            >
              Logout
            </button>
			</div>
          )}
        </nav>
      </div>
    </div>
  );
}

export default Menubar;
