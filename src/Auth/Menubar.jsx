import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebaseConfig";
import "primeicons/primeicons.css";
import MS from "../public/MSlogo.jpg";

function Menubar() {
	const [isOpen, setIsOpen] = useState(false);
	const [user, setUser] = useState(null);

	useEffect(() => {
		const auth = getAuth(app);
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setUser(user); 
		});

		return () => unsubscribe();
	}, []);

	return (
		<div className="fixed lg:flex md:flex top-0 w-full bg-black p-4 z-50">
			<div className="lg:flex items-center justify-between hidden  md:block">
				<div className="">
					<img src={MS} className="w-24 h-14" alt="img" />
				</div>
			</div>

			{/* Hamburger Icon for Mobile */}
			<div className="flex items-center justify-between md:hidden">
				<div className="">
					<img src={MS} className="w-24 h-14" alt="img" />
				</div>
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="text-yellow-600 text-2xl">
					<i className={`pi ${isOpen ? "pi-times" : "pi-bars"}`}></i>
				</button>
			</div>

			{/* Sidebar Menu */}
			<div
				className={`fixed top-19.2 left-0 h-[40vh] md:h-[4vh] opacity-52 bg-black text-white w-full transform ${
					isOpen ? "translate-x-0" : "-translate-x-full"
				} transition-transform duration-1000 md:static md:translate-x-0 md:flex md:w-full md:bg-transparent`}>
				<nav className="flex flex-col md:flex-row md:justify-around lg:pt-5 py-4 px-10 space-y-4 md:space-y-0">
					<Link
						to="/"
						className="text-white hover:text-yellow-600 hover:animate-pulse font-semibold md:py-1 lg:py-0 py-3 pl-1 pr-9"
						onClick={() => setIsOpen(false)}>
						Home
					</Link>
					<Link
						to="/sellers"
						className="text-white hover:text-yellow-600 hover:animate-pulse font-semibold lg:py-0 py-1 pl-1 pr-9"
						onClick={() => setIsOpen(false)}>
						Sellers
					</Link>
					<Link
						to="/how-it-works"
						className="text-white hover:text-yellow-600 hover:animate-pulse font-semibold lg:py-0 py-1 pl-1 pr-9"
						onClick={() => setIsOpen(false)}>
						How It Works
					</Link>
					<Link
						to="/faq"
						className="text-white hover:text-yellow-600 hover:animate-pulse font-semibold lg:py-0 py-1 pl-1 pr-9"
						onClick={() => setIsOpen(false)}>
						FAQ
					</Link>
					<Link
						to="/blogs"
						className="text-white hover:text-yellow-600 hover:animate-pulse font-semibold md:py-1 lg:py-0 py-1 pl-1 pr-9"
						onClick={() => setIsOpen(false)}>
						Blogs
					</Link>
					{!user ? (
						<>
							<Link
								to="/signup"
								className="text-white hover:text-yellow-600 hover:animate-pulse font-semibold md:py-1 lg:py-0 py-1 pl-1 pr-9"
								onClick={() => setIsOpen(false)}>
								Sign Up
							</Link>
							<Link
								to="/login"
								className=" hover:text-yellow-600 hover:animate-pulse font-semibold md:py-1 lg:py-0 pl-1 pr-9"
								onClick={() => setIsOpen(false)}>
								Login
							</Link>
						</>
					) : (
						<div className="flex items-center justify-left">
							<button
								onClick={() => {
									const auth = getAuth(app);
									auth.signOut();
									setUser(null);
								}}
								className="text-white hover:text-yellow-600 hover:animate-pulse font-semibold md:mt-4 lg:mt-5 py-1 pl-1 pr-9">
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