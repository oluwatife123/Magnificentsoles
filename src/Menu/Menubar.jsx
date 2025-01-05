import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Sellers from "../pages/Sellers";
import HowItWorks from "../Pages/HowItWorks";
import FAQ from "../Pages/FAQ";
import Blogs from "../Pages/Blogs";
import Celebrities from "../Pages/Celebrities";
import Reviews from "../Pages/Reviews";
import Merch from "../Pages/Merch";
import HomePage from "../Pages/HomePage";
import SignIn from "../Auth/SignIn";
import Login from "../Auth/Login";

function Menubar() {
	return (
		<>
			<div className="fixed top-0 w-[100%] ">
				

				<div className="flex gap-4 bg-purple-600">
                <div className="pl-10 flex justify-center place-items-center">
					{/* <i className="pi pi-user"></i> */}
					<p className="text-lg text-[#ed3b59] font-bold">
                    <Link to="/">
						Magnificent
						<span className="block text-center">Soles</span>
                    </Link>
					</p>
				</div>
					{/* Navigation Menu */}
					<nav className="p-2">
						<ul className="flex text-white text-sm font-bold justify-center place-items-center">
							<li className="hover:bg-pink-600 hover:cursor-pointer p-3">
								<Link to="/sellers">Sellers</Link>
							</li>
							<li className="hover:bg-pink-600 hover:cursor-pointer p-3">
								<Link to="/how-it-works">How it Works</Link>
							</li>
							<li className="hover:bg-pink-600 hover:cursor-pointer p-3">
								<Link to="/faq">FAQ</Link>
							</li>
							<li className="hover:bg-pink-600 hover:cursor-pointer p-3">
								<Link to="/blogs">Blogs</Link>
							</li>
							<li className="hover:bg-pink-600 hover:cursor-pointer p-3">
								<Link to="/celebrities">Celebrities</Link>
							</li>
							<li className="hover:bg-pink-600 hover:cursor-pointer p-3">
								<Link to="/reviews">Reviews</Link>
							</li>
							<li className="hover:bg-pink-600 hover:cursor-pointer p-3">
								<Link to="/merch">Merch</Link>
							</li>
							<li className="hover:bg-pink-600 hover:cursor-pointer p-3">
								<Link to="/signin">Sign In</Link>
							</li>
						</ul>
					</nav>

                    {/* my buttons */}
                    <div className="flex justify-center place-items-center">
                         <p className="hover:bg-pink-600 hover:cursor-pointer text-white font-bold p-3">Login</p>
                    </div>

					
				</div>

                 {/* my Route */}
            <div className="">
                {/* Define Routes */}
					<Routes>
                        <Route path="/" element={<HomePage />} />
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
			</div>
           
		</>
	);
}

export default Menubar;
