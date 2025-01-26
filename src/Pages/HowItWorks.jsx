import React from "react";
import youtube from "../public/youtube.jpg"
import Menubar from "../Auth/Menubar";

export default function HowItWorks() {
	return (
		<>
		<Menubar />
			<div className="bg-black">
				<p className="md:mt-10 lg:mt-10 lg:text-[2.8rem] pt-8 md:text-[2.8rem] text-[1.4rem] text-center font-bold text-white">HOW IT WORKS</p>
				{/* how it works attribute */}
				<div className=" ">
					<div className=" md:h-[50vh] lg:h-[100vh] sm:h-[50vh] h-[37vh] px-3 flex justify-center place-items-center">
						<div className="relative md:w-[80%] w-[100%]">
							{/* Image container */}
							<span className="box-border justify-center items-center w-full block absolute inset-0">
								<img
									alt="How It Works Image"
									src={youtube}
									decoding="async"
									className="absolute lg:h-[90vh] md:h-[40vh] w-[100%] rounded-2xl inset-0 box-border m-auto block"
								/>
							</span>

							{/* Icon container */}
							<p className="relative flex justify-center items-center mt-4">
								<span>
									<a href="https://www.youtube.com/watch?v=yrMGDy7a7wY" className="hover:cursor-pointer">
									<i>
										<svg
											width="100"
											height="100"
											viewBox="0 0 100 100"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className="block">
											{/* Red circle */}
											<circle cx="50" cy="50" r="50" className="fill-red-500" />
											{/* Play path */}
											<path
												d="M59.6682 49.5965L49.0005 55.6888V43.5042L59.6682 49.5965Z"
												className="stroke-white stroke-[18px] stroke-linecap-square"
											/>
										</svg>
									</i>
									</a>
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}