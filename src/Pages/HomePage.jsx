import React from "react";
import "primeicons/primeicons.css";
import HowItWorks from "./HowItWorks";
import Sellers from "./Sellers";
import banner from "../public/banner.png";
import homebanner from "../public/homebanner.png";
import { Link } from "react-router-dom";

export default function HomePage() {
	return (
		<>
			<div className="w-full bg-black overflow-x-hidden">
				{/* Hero Section */}
				<div className="bg-black lg:flex md:flex pt-6 pb-4">
					<div className="md:ml-10 lg:ml-10 sm:ml-9 px-3 lg:w-[40%] sm:w-[90%] md:w-[90%]">
						{/* Hero Text */}
						<div className="text-white mt-20">
							<p className="md:text-[2.2rem]  text-[1.9rem] font-bold">
								View, Buy & Sell Feet Pics
							</p>
							<p className="md:text-[1.6rem] text-[1rem] mt-3 md:mt-4">
								MagnificentSoles is the safest, largest, and easiest website to view,
								buy and sell feet content. With millions of users and over 5,000
								five-star reviews, magnificentSoles is the best website for anyone
								interested in buying or selling feet content.
							</p>
						</div>

						{/* Buttons */}
						<div className="flex gap-4 w-full mt-5">
							<button className="px-4 text-white hover:text-black py-3 w-full md:w-1/2 bg-yellow-600 hover:bg-white  rounded-full">
							<Link
									to="/view"
									className="font-bold md:text-xl"
									onClick={() => setIsOpen(false)}>
									View/Buy Feet Pics
								</Link>
								{/* <p className=" font-bold md:text-xl">
									View/Buy Feet Pics
								</p> */}
							</button>
							<button className="px-4 py-3 text-white hover:text-black w-full md:w-1/2 bg-yellow-600 hover:bg-white  rounded-full">
							<Link
									to="/manager"
									className="font-bold md:text-xl"
									onClick={() => setIsOpen(false)}>
									Sell Feet Pics
								</Link>
								{/* <p className=" font-bold md:text-xl">
									Sell Feet Pics
								</p> */}
							</button>
						</div>

						{/* Sign-in Link */}
						<div className="mt-4">
							<p className="text-white text-lg">
								Already have an account?{" "}
								<Link
									to="/signup"
									className="hover:text-gray-300 text-lg underline"
									onClick={() => setIsOpen(false)}>
									SIGN IN
								</Link>
							</p>
						</div>
					</div>

					{/* Hero Images */}
					<div className="md:w-[60%] lg:mt-10 md:flex lg:flex gap-10">
						<div className="w-[35%]">
							<img
								src={banner}
								alt="Banner"
								className="lg:w-full md:w-full md:h-[35vh] lg:h-[80vh] hidden md:block lg:block rounded-3xl"
							/>
						</div>
						<div className="w-[35%]">
							<img
								src={homebanner}
								alt="Home Banner"
								className="lg:w-full md:w-full md:h-[35vh] lg:h-[80vh] hidden md:block lg:block mt-20 rounded-3xl"
							/>
						</div>
					</div>
				</div>

				{/* Stats Section */}
				<div className="mx-3 bg-black">
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">
						{/* Statistic Cards */}
						<div className="border bg-white hover:bg-gray-200 cursor-pointer text-center md:py-20 md:px-20 py-10 px-10">
							<i className="pi pi-camera font-bold text-yellow-600 p-2 text-3xl"></i>
							<p className="text-yellow-700 md:text-3xl font-bold">
								10,000,000+
							</p>
							<p className="mt-4 md:text-xl text-yellow-600">Feet Pics Sold</p>
						</div>
						<div className="border bg-white hover:bg-gray-200 cursor-pointer text-center md:py-20 md:px-20 py-10 px-10">
							<i className="pi pi-money-bill font-bold text-yellow-600 p-2 text-3xl"></i>
							<p className="text-yellow-600 md:text-3xl font-bold">
								$80,000,000+
							</p>
							<p className="mt-4 md:text-xl text-yellow-600">Money Spent</p>
						</div>
						<div className="border bg-white hover:bg-gray-200 cursor-pointer text-center md:py-20 md:px-20 py-10 px-10">
							<i className="pi pi-user font-bold text-yellow-600 p-2 text-3xl"></i>
							<p className="text-yellow-600 md:text-3xl font-bold">
								5,000,000+
							</p>
							<p className="mt-4 md:text-xl text-yellow-600">Verified Users</p>
						</div>
						<div className="border bg-white hover:bg-gray-200 cursor-pointer text-center md:py-20 md:px-20 py-10 px-10">
							<i className="pi pi-star font-bold text-yellow-600 p-2 text-3xl"></i>
							<p className="text-yellow-600 md:text-3xl font-bold">5,000+</p>
							<p className="mt-4 md:text-xl text-yellow-600">5-Star Reviews</p>
						</div>
					</div>
				</div>

				{/* How It Works Section */}
				<div className="mt-8">
					<HowItWorks />
				</div>

				{/* Sellers Section */}
				<div className="mt-8">
					<Sellers />
				</div>
			</div>
		</>
	);
}