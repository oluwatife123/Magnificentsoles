import React from "react";

import { Carousel } from "primereact/carousel";
import TextSlider from "../components/TextSlider";

import feet from "../public/download.png";
import BG from "../public/image.jpg";
import B from "../public/B.jpg";
import hil from "../public/cartoon.png";
import we from "../public/soles.jpg";
import hi from "../public/polish.png";
import am from "../public/socks.png";

import lo from "../public/lotion.jpg";
import pe from "../public/predicures.jpg";
import di from "../public/dirty.jpg";
import ma from "../public/male.jpg";

import da from "../public/dancer.jpg";
import ta from "../public/tattoo.jpg";
import sf from "../public/showface.jpg";
import ny from "../public/nylon.jpg";

import f from "../public/f.jpg";
import ff from "../public/ff.jpg";
import fff from "../public/fff.jpg";
import ffff from "../public/ffff.jpg";
import SE from "../public/securitybg.jpg";
import Blogs from "./Blogs";

import MS from "../public/MSlogo.jpg";
import Asset from "../public/Asset.png";
import Footer from "../components/Footer";

export default function Sellers() {
	return (
		<>
			<div className="bg-black">
				<div className="bg-black h-[100%]">
					{/* how it works */}
					<div className="pt-5 text-white ">
						<p className="mt-10 mb-6 md:text-[2.8rem] text-[1.4rem] text-center font-bold">
							MEMBER FEATURES
						</p>
					</div>
					{/* Buttons switch */}
					<div className="flex place-items-center justify-center">
						<div className="md:w-[25%] flex  md:gap-2 border bg-white py-2 px-2 rounded-full">
							<div className="border border-white bg-yellow-600 rounded-full px-10 py-4">
								<a
									href="#"
									className="text-center text-black font-bold mt-4 lg:text-lg md:text-lg">
									SELLERS
								</a>
							</div>
							<div className=" rounded-full md:px-10 px-10 lg:px-10 py-4">
								<a
									href="#"
									className="text-center text-black font-bold mt-4 lg:text-lg md:text-lg">
									BUYERS
								</a>
							</div>
						</div>
					</div>
					{/* list */}
					<ol className="my-8 px-3 flex justify-center gap-10">
						<a href="#">
							<li className="text-white ml-5 md:ml-0 lg:text-2xl lg:m-0 font-normal md:text-2xl hover:text-yellow-600 ">
								Payouts
							</li>
						</a>
						<a href="#">
							<li className="text-white font-normal lg:text-2xl md:text-2xl hover:text-yellow-600 ">
								custom offers
							</li>
						</a>
						<a href="#">
							<li className="text-white font-normal lg:text-2xl md:text-2xl hover:text-yellow-600 ">
								uploading content
							</li>
						</a>
					</ol>
					<hr className="mt-4 h-4 w-full text-yellow-600" />

					<div className="bg-black gap-10 pb-20 md:mb-20 md:flex lg:flex justify-center place-items-center md:py-10 lg:py-10">
						<div className="md:p-4 lg:p-4 mb-2 px-4 py-6">
							<ul className="list-disc text-white list-inside">
								<li className="md:text-2xl lg:text-2xl font-medium mb-7">
									Sellers earn 90% on all sales
								</li>
								<li className="md:text-2xl lg:text-2xl font-medium mb-7">
									Weekly payouts direct to your bank account
								</li>
								<li className="md:text-2xl lg:text-2xl font-medium mb-3 mt-4">
									PCI compliant to keep your sensitive info safe
								</li>
							</ul>
						</div>
						{/* image */}
						<div className="border border-white p-2">
							<img
								src={MS}
								className="shadow-2xl px-3 md:px-0 h-[30vh]"
								alt="feets"
							/>
						</div>
					</div>
				</div>

				<hr className="mt-4 h-4 w-full text-yellow-600" />

				{/* verified model page */}
				<div className="bg-black ">
					<div className=" ">
						<p className="pt-10 mb-6 text-[1.4rem] text-white md:text-[2.8rem] text-center font-bold">
							VERIFIED MODELS
						</p>

						<div className="relative">
							{/* image */}
							<div className="flex justify-center">
								<div className="relative md:w-[80%] w-[100%] flex justify-center md:h-[80vh]">
									<img
										src={BG}
										alt="feet"
										className="w-full hover:bg-purple-400 mx-3 shadow-2xl  h-full"
									/>
									<div className="absolute inset-0 bg-black bg-opacity-30"></div>
								</div>
							</div>

							<div className="flex items-center justify-center absolute inset-0">
								<div className="">
									<p className="mt-10 mb-6 text-white text-[1.4rem] md:text-[2.8rem] text-center font-bold">
										View Millions Of Verified Models
									</p>
									{/* button */}
									<div className="flex items-center justify-center">
										<button className="border text-white hover:text-black border-white  bg-yellow-600 px-10 md:px-20 py-5 rounded-full hover:bg-white">
											<a href="#" className="font-medium ">
												VIEW ALL SELLERS
											</a>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* popular content page */}
				<div className="bg-black ">
					<div className=" ">
						<p className="pt-10 mb-6 text-[1.4rem] text-white md:text-[2.8rem] text-center font-bold">
							POPULAR CONTENT
						</p>
						<div className="relative">
							{/* image */}
							<div className="flex justify-center">
								<div className="relative w-[100%] md:w-[80%] flex justify-center md:h-[80vh]">
									<img
										src={B}
										alt="feet"
										className="w-full hover:bg-purple-400 mx-3 h-full"
									/>
									<div className="absolute inset-0 bg-black bg-opacity-30"></div>
								</div>
							</div>

							<div className="flex items-center justify-center absolute inset-0">
								<div className="">
									<p className="mt-10 mb-6 text-white text-[1.4rem] md:text-[2.8rem] text-center font-bold">
										View Millions Of foot fetish <br /> pictures and videos
									</p>
									{/* button */}
									<div className="flex items-center justify-center">
										<button className="border text-white hover:text-black border-white  bg-yellow-600 px-10 md:px-20 py-5 rounded-full hover:bg-white">
											<a href="#" className="font-medium ">
												VIEW MORE CONTENT
											</a>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<hr className="mt-4 h-4 w-full text-yellow-600" />

				{/* POPULAR CATEGORIES PAGES */}
				<div className="bg-black">
					<div className=" ">
						{/* texts */}
						<div className="">
							<p className="pt-10 md:text-[2.8rem] text-white text-[1.4rem] text-center font-bold">
								POPULAR CATEGORIES
							</p>
							<p className="pt-1 text-center text-[14px] md:text-2xl text-gray-400">
								Explore dozens of niche feet categories to find your preferred{" "}
								<br />
								content easily
							</p>
						</div>

						{/* Grids 1 */}
						<div className="grid md:grid-cols-4 grid-cols-3 gap-6 mx-10 mt-10">
							{/* A */}
							<a href="#" className="">
								<div className="border border-blue-400 hover:bg-yellow-200 h-[18vh] md:h-[40vh] rounded-2xl">
									<img
										src={hil}
										className="w-full hover:bg-purple-400 hover:opacity-30 rounded-2xl h-full"
										alt="pictures"
									/>
								</div>
								<p className="text-center font-bold mt-4  md:text-lg">
									HIGH HEELS{" "}
								</p>
							</a>
							{/* B  */}
							<a href="#" className="">
								<div className="border border-blue-400 hover:bg-yellow-200 h-[18vh] md:h-[40vh] rounded-2xl">
									<img
										src={we}
										className="w-full hover:bg-purple-400 hover:opacity-30 rounded-2xl h-full"
										alt="pictures"
									/>
								</div>
								<p className="text-center font-bold mt-4  md:text-lg">SOLES </p>
							</a>
							{/* C  */}
							<a href="#" className="">
								<div className="border border-blue-400 hover:bg-yellow-200 h-[18vh] md:h-[40vh] rounded-2xl">
									<img
										src={hi}
										className="w-full hover:bg-purple-400 hover:opacity-30 rounded-2xl h-full"
										alt="pictures"
									/>
								</div>
								<p className="text-center font-bold mt-4  md:text-lg">
									NAIL POLISH{" "}
								</p>
							</a>
							{/* D  */}
							<a href="#" className="">
								<div className="border border-blue-400 hover:bg-yellow-200 h-[18vh] md:h-[40vh] rounded-2xl">
									<img
										src={am}
										className="w-full hover:bg-purple-400 hover:opacity-30 rounded-2xl h-full"
										alt="pictures"
									/>
								</div>
								<p className="text-center font-bold mt-4  md:text-lg">SOCKS </p>
							</a>

							{/* Grids 2 */}

							{/* A */}
							<a href="#" className="">
								<div className="border border-blue-400 hover:bg-yellow-200 h-[18vh] md:h-[40vh] rounded-2xl">
									<img
										src={lo}
										className="w-full hover:bg-purple-400 hover:opacity-30 rounded-2xl h-full"
										alt="pictures"
									/>
								</div>
								<p className="text-center font-bold mt-4  md:text-lg">
									LOTION{" "}
								</p>
							</a>
							{/* B  */}
							<a href="#" className="">
								<div className="border border-blue-400 hover:bg-yellow-200 h-[18vh] md:h-[40vh] rounded-2xl">
									<img
										src={pe}
										className="w-full hover:bg-purple-400 hover:opacity-30 rounded-2xl h-full"
										alt="pictures"
									/>
								</div>
								<p className="text-center font-bold mt-4  md:text-lg">
									PEDICURE{" "}
								</p>
							</a>
							{/* C  */}
							<a href="#" className="">
								<div className="border border-blue-400 hover:bg-yellow-200 h-[18vh] md:h-[40vh] rounded-2xl">
									<img
										src={di}
										className="w-full hover:bg-purple-400 hover:opacity-30 rounded-2xl h-full"
										alt="pictures"
									/>
								</div>
								<p className="text-center font-bold mt-4  md:text-lg">
									DIRTY FEET{" "}
								</p>
							</a>
							{/* D  */}
							<a href="#" className="">
								<div className="border border-blue-400 hover:bg-yellow-200 h-[18vh] md:h-[40vh] rounded-2xl">
									<img
										src={ma}
										className="w-full hover:bg-purple-400 hover:opacity-30 rounded-2xl h-full"
										alt="pictures"
									/>
								</div>
								<p className="text-center font-bold mt-4  md:text-lg">MALE</p>
							</a>

							{/* Grids 3 */}

							{/* A */}
							<a href="#" className="">
								<div className="border border-blue-400 hover:bg-yellow-200 h-[18vh] md:h-[40vh] rounded-2xl">
									<img
										src={da}
										className="w-full hover:bg-purple-400 hover:opacity-30 rounded-2xl h-full"
										alt="pictures"
									/>
								</div>
								<p className="text-center font-bold mt-4  md:text-lg">
									DANCER{" "}
								</p>
							</a>
							{/* B  */}
							<a href="#" className="">
								<div className="border border-blue-400 hover:bg-yellow-200 h-[18vh] md:h-[40vh] rounded-2xl">
									<img
										src={ta}
										className="w-full hover:bg-purple-400 hover:opacity-30 rounded-2xl h-full"
										alt="pictures"
									/>
								</div>
								<p className="text-center font-bold mt-4  md:text-lg">
									TATTOO{" "}
								</p>
							</a>
							{/* C  */}
							<a href="#" className="">
								<div className="border border-blue-400 hover:bg-yellow-200 h-[18vh] md:h-[40vh] rounded-2xl">
									<img
										src={sf}
										className="w-full hover:bg-purple-400 hover:opacity-30 rounded-2xl h-full"
										alt="pictures"
									/>
								</div>
								<p className="text-center font-bold mt-4  md:text-lg">
									SHOWING FACE{" "}
								</p>
							</a>
							{/* D  */}
							<a href="#" className="">
								<div className="border border-blue-400 hover:bg-yellow-200 h-[18vh] md:h-[40vh] rounded-2xl">
									<img
										src={ny}
										className="w-full hover:bg-purple-400 hover:opacity-30 rounded-2xl h-full"
										alt="pictures"
									/>
								</div>
								<p className="text-center font-bold mt-4  md:text-lg">NYLON </p>
							</a>
						</div>
					</div>
					{/* button  */}
					<div className="flex items-center justify-center py-8">
						<button className="border border-white text-white hover:text-black bg-yellow-600 px-10 md:px-20 py-5 rounded-full hover:bg-white">
							<a href="#" className="font-medium ">
								VIEW MORE CATEGORIES
							</a>
						</button>
					</div>
				</div>

				<hr className="mt-4 h-4 w-full text-yellow-600" />
				{/* Free foot fetish pics pages  */}
				<div className="bg-black h-full">
					{/* texts */}
					<div className="pt-10">
						<p className="md:mt-10 text-[1.6rem] text-white md:text-[2.8rem] text-center font-bold">
							Free Foot Fetish Pics
						</p>
						<p className="pt-1 px-2 text-center text-[15px] md:text-2xl text-gray-400">
							Explore thousands of free feet pictures from ID-verified foot{" "}
							<br />
							fetish models!
						</p>
					</div>
					{/* general container for the free foot fetish */}
					<div className="mt-4  md:flex justify-center place-items-center">
						<div className=" grid grid-cols-1 md:flex">
							{/* first div  */}
							<div className=" h-full  ">
								<div className="img">
									<a href="#">
										{" "}
										<img
											src={f}
											className="rounded-3xl p-3 w-full h-[32vh]"
											alt="done"
										/>
									</a>
								</div>

								<div className="flex">
									<div className="div">
										<a href="#">
											{" "}
											<img src={ff} className="rounded-3xl p-3" alt="" />
										</a>
										<a href="#">
											{" "}
											<img src={fff} className="rounded-3xl p-3" alt="" />
										</a>
									</div>
									<div className="div">
										<a href="#">
											{" "}
											<img
												src={ffff}
												className="rounded-3xl p-3 h-full"
												alt="done"
											/>
										</a>
									</div>
								</div>
							</div>
							{/* second div  */}
							<div className=" ">
								<div className="h-[40%] ">
									<div className="flex ">
										<a href="#">
											{" "}
											<img
												src={hil}
												className="h-[32vh] rounded-3xl p-2"
												alt=""
											/>
										</a>
										<a href="#">
											<img
												src={da}
												className="h-[33vh] rounded-3xl p-2"
												alt=""
											/>
										</a>
									</div>
									<div className="">
										<a href="#">
											{" "}
											<img
												src={am}
												className=" h-[30vh] rounded-3xl p-2 w-full"
												alt=""
											/>
										</a>
									</div>
									<div className=" flex">
										<a href="#">
											{" "}
											<img
												src={ny}
												className="h-[32vh] rounded-3xl p-2"
												alt=""
											/>
										</a>
										<a href="#">
											{" "}
											<img
												src={hi}
												className="h-[32vh] rounded-3xl p-2"
												alt=""
											/>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* fetish button */}
					<div className="flex items-center justify-center py-10">
						<button className="border hover:text-black text-white  border-white bg-yellow-600 px-10 md:px-20 py-5 rounded-full hover:bg-white">
							<a href="#" className="font-medium ">
								VIEW FEET PICS
							</a>
						</button>
					</div>
				</div>

				<hr className="mt-4 h-4 w-full text-yellow-600" />
				{/* how much your feet worth */}
				<div className="bg-black">
					{/* text div */}
					<div className="">
						<p className="mt-2 pt-3 text-white md:text-[2.8rem] text-[1.4rem] text-center font-bold">
							How much your Feet Worth?
						</p>
						<div className="flex items-center justify-center">
							<p className="pt-1 my-3 mx-3 text-center md:w-[100%] lg:w-[70%] md:mx-3 text-[15px] md:text-2xl text-gray-400">
								Upload a photo of your feet, and our expert analysis, powered by
								a unique valuation system backed by millions of data points,
								will reveal how much money you could potentially make from your
								feet! Must be 18+ to submit.
							</p>
						</div>
					</div>
					{/* upload page */}
					<div className="border border-red-400 mx-40 py-24"></div>
					{/* feet worth button */}
					<div className="flex items-center justify-center py-10">
						<button className="border border-white hover:text-black text-white bg-yellow-600 px-10 md:px-20 py-5 rounded-full hover:bg-white">
							<a href="#" className="font-medium ">
								GET RESULTS
							</a>
						</button>
					</div>
				</div>

				<hr className="mt-4 h-4 w-full text-yellow-600" />

				{/* Security page */}
				<div className="">
					<div className="relative">
						{/* image */}
						<div className="flex justify-center">
							<div className="relative md:w-[100%] w-[100%] flex justify-center xl:h-[80vh] sm:h-[40vh] lg:h-[40vh] md:h-[40vh]">
								<img
									src={SE}
									alt="feet"
									className="w-full hover:bg-purple-400 shadow-2xl xl:h-[80vh] md:h-[40vh] h-full"
								/>
								<div className="absolute inset-0 bg-black bg-opacity-30"></div>
							</div>
						</div>

						<div className="flex items-center justify-center absolute inset-0">
							<div className="px-8">
								<p className="mt-10 mb-2 text-white text-[1.4rem] md:text-[2.8rem] text-left font-bold">
									IS MAGNIFICENTSOLES SAFE?
								</p>
								<p className="mt-2 mb-6 text-white md:text-[1.6rem] xl:w-[50%] lg:w-[100%] text-[13px] sm:text-[1.4rem] md:w-[100%] text-left font-bold">
									MagnificentSoles is the safest and most secure website to buy and
									sell feet content. Encrypted servers, PCI-compliant security
									and third party firewall ensures your data and card info
									remains hidden and safe from potential threats. No other
									websites to sell feet pics offer the same level of security
									and have the track record of MagnificentSoles.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* What people are saying */}
				<div className="bg-black">
					<p className="pt-10 md:text-[2.8rem] text-white text-[1.4rem] text-center font-bold">
						WHAT PEOPLE ARE SAYING
					</p>

					<div className="">
						<div className="flex items-center justify-center mt-2">
							<div className="flex gap-1">
								<i className="pi pi-star font-bold text-2xl text-yellow-800"></i>
								<p className="font-semibold text-white text-lg">Trustpilot</p>
							</div>
						</div>
						<div className="flex items-center justify-center my-2">
							<div className="flex gap-1">
								<i className="pi pi-star font-bold text-2xl bg-yellow-500 text-white"></i>
								<i className="pi pi-star font-bold text-2xl bg-yellow-500 text-white"></i>
								<i className="pi pi-star font-bold text-2xl bg-yellow-500 text-white"></i>
								<i className="pi pi-star font-bold text-2xl bg-yellow-500 text-white"></i>
								<i className="pi pi-star font-bold text-2xl bg-gray-500 text-white"></i>
							</div>
						</div>
						<div className="flex items-center justify-center my-2">
							<p className="text-[14px] text-white">
								Trust Score <span className="font-bold text-white">4.1</span>|{" "}
								<span className="underline text-white">3,575 reviews</span>{" "}
							</p>
						</div>
					</div>

					{/* slider path */}
					<div className="text-white pb-3">
						<TextSlider />
					</div>
				</div>

				{/* blogs */}
				<div>
					<Blogs />
				</div>

				{/* Ready for foot and tips */}
				<div className="md:flex lg:flex block justify-center items-center bg-black mt-7">
					{/* text */}
					<div className="flex justify-center items-center lg:justify-left">
						<div className="lg:ml-10 ">
							<p className="mt-5 mx-3  md:text-[2.8rem] lg:w-[70%] text-white text-center text-[1.4rem] lg:text-left md:text-left font-bold">
								READY FOR FOOT FETISH ADVICE AND TIPS TO BE SUCCESSFUL?
							</p>

							<div className="flex items-center justify-center lg:justify-left">
								<button className="border mt-5 border-white text-white hover:text-black bg-yellow-600 px-10 md:px-20 py-5 rounded-full hover:bg-white">
									<a href="#" className="font-medium">
										LEARN MORE
									</a>
								</button>
							</div>
						</div>
					</div>

					{/* image */}
					<div className="mx-3 lg:mr-10 mt-2">
						<img src={Asset} alt="Asset" />
					</div>
				</div>

				{/* footer */}
				<div className="">
					<Footer />
				</div>
			</div>
		</>
	);
}
