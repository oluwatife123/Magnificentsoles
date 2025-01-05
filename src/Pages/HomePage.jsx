import React from "react";

export default function HomePage() {
	return (
		<>
			<div className="bg-purple-600 w-[100%] h-[100vh] pt-6">
				<div className="ml-10 w-[40%] ">
					<div className="text-white ">
						<p className="text-[2.2rem] font-bold">
							View, Buy & Sell Feet Pics
						</p>
						<p className="text-[1.6rem] mt-4">
							FeetFinder is the safest, largest, and easiest website to view,
							buy and sell feet content. With millions of users and over 5,000
							five-star reviews, FeetFinder is the best website for anyone
							interested in buying or selling feet content.
						</p>
					</div>
					{/* buttons */}
					<div className="flex gap-4 w-[100%] mt-5">
						<button className="px-4 py-3 w-[50%] bg-pink-600 rounded-full">
							<p className="text-white font-bold text-xl">View/Buy Feet Pics</p>
						</button>

                        <button className="px-4 py-3 w-[50%] bg-pink-600 rounded-full">
							<p className="text-white font-bold text-xl">Sell Feet Price</p>
						</button>
					</div>
                    {/* signin */}
                    <div className="mt-4">
                        <p className="text-white text-lg">Already have an account? <a href="#" className="underline"> SIGN IN</a></p>
                    </div>
				</div>
                {/* images */}

                <div className="">
                    <p>here</p>
                </div>
			</div>
		</>
	);
}
