import React from "react";
import img1 from "../public/banner.png";
import img2 from "../public/homebanner.png";
import HowItWorks from "./HowItWorks";
import Sellers from "./Sellers";

export default function HomePage() {
	return (
		<>
			<div className="w-[100%] overflow-x-hidden ">
				<div className="bg-purple-600 lg:w-[100%] md:w-[100%] md:gap-20 mb:flex pt-6 pb-4 ">
					<div className="md:ml-10 lg:ml-10 ml-9 lg:w-[40%] md:w-[40%] border md:text-left">
						<div className="text-white ">
							<p className="md:text-[2.2rem] text-[1.5rem] font-bold">
								View, Buy & Sell Feet Pics
							</p>
							<p className="md:text-[1.6rem] text-[1rem] mt-4">
								FeetFinder is the safest, largest, and easiest website to view,
								buy and sell feet content. With millions of users and over 5,000
								five-star reviews, FeetFinder is the best website for anyone
								interested in buying or selling feet content.
							</p>
						</div>
						{/* buttons */}
						<div className="flex gap-4 w-[100%] mt-5">
							<button className="px-4 py-3 w-full md:w-[50%] bg-pink-600 hover:shadow-xl rounded-full">
								<p className="text-white font-bold text-xl">
									View/Buy Feet Pics
								</p>
							</button>

							<button className="px-4 py-3 w-full md:w-[50%] bg-pink-600 hover:shadow-xl rounded-full">
								<p className="text-white font-bold text-xl">Sell Feet Price</p>
							</button>
						</div>
						{/* signin */}
						<div className="mt-4">
							<p className="text-white text-lg">
								Already have an account?{" "}
								<a href="#" className="underline">
									{" "}
									SIGN IN
								</a>
							</p>
						</div>
					</div>
					{/* images */}
					<div className="w-[60%] gap-10 mb:flex">
						<div className="w-[35%] ">
							<img
								src={img1}
								alt="Banner"
								className="w-full h-[80vh] hidden md:block lg:block rounded-3xl"
							/>
						</div>
						<div className="w-[35%]">
							<img
								src={img2}
								alt="homebanner"
								className="w-full h-[80vh] hidden md:block lg:block mt-20 rounded-3xl"
							/>
						</div>
					</div>
				</div>
				{/* the flex pages */}
				<div className=" ">
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-white">
						<div className="border hover:bg-gray-200 cursor-pointer border-l-gray-200 text-center md:py-20 md:px-20 py-10 px-10">
							<img src="" alt="" />
							<p className="text-purple-700 md:text-3xl font-bold">10,000,000+</p>
							<p className=" mt-4 text-xl">Feet Pics Sold</p>
						</div>
						<div className="border hover:bg-gray-200 cursor-pointer border-l-gray-200 text-center md:py-20 md:px-20 py-10 px-10">
							<img src="" alt="" />
							<p className="text-purple-700 md:text-3xl font-bold">$80,000,000+</p>
							<p className=" mt-4 text-xl">Money spent</p>
						</div>
						<div className="border hover:bg-gray-200 cursor-pointer border-l-gray-200 text-center md:py-20 md:px-20 py-10 px-10">
							<img src="" alt="" />
							<p className="text-purple-700 md:text-3xl font-bold">5,000,000+</p>
							<p className=" mt-4 text-xl">Verified User</p>
						</div>
						<div className="border hover:bg-gray-200 cursor-pointer border-l-gray-200 text-center md:py-20 md:px-20 py-10 px-10">
							<img src="" alt="" />
							<p className="text-purple-700 md:text-3xl font-bold">5000+</p>
							<p className=" mt-4 text-xl">5-Star Reviews</p>
						</div>
					</div>
				</div>
			</div>

			{/* second page */}
			<div className="">
				<HowItWorks />
			</div>
            {/* third */}
            <div className="">
				<Sellers />
			</div>

            <div>
                
            </div>
		</>
	);
}
