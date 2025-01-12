import React from "react";
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

export default function Sellers() {
	return (
		<>
			<div className="bg-gray-300 h-[100%]">
				{/* how it works */}
				<div className="pt-5 ">
					<p className="mt-10 mb-6 text-[2.8rem] text-center font-bold">
						MEMBER FEATURES
					</p>
				</div>
				{/* Buttons switch */}
				<div className="flex place-items-center justify-center">
					<div className="md:w-[25%] flex  md:gap-2 border bg-purple-600 py-2 px-2 rounded-full">
						<div className="border border-white bg-[#ed3b59] rounded-full px-10 py-4">
							<a
								href="#"
								className="text-center text-white fonbold mt-4 text-lg">
								SELLERS
							</a>
						</div>
						<div className=" rounded-full px-10 py-4">
							<a
								href="#"
								className="text-center text-white fonbold mt-4 text-lg">
								BUYERS
							</a>
						</div>
					</div>
				</div>
				{/* list */}
				<ol className="my-8 flex justify-center gap-10">
					<a href="#">
						<li className="text-gray-700 ml-5 md:ml-0 lg:m-0 font-normal text-2xl hover:text-purple-600 ">
							Payouts
						</li>
					</a>
					<a href="#">
						<li className="text-gray-700 font-normal text-2xl hover:text-purple-600 ">
							custom offers
						</li>
					</a>
					<a href="#">
						<li className="text-gray-700 font-normal text-2xl hover:text-purple-600 ">
							uploading content
						</li>
					</a>
				</ol>
				<hr className="mt-4 h-4 w-4 text-purple-500" />

				<div className="bg-purple-600 gap-10 mb-20 flex justify-center place-items-center py-10">
					<div className="p-4 ">
						<ul className="list-disc text-white list-inside">
							<li className="text-2xl font-medium mb-7">
								Sellers earn 90% on all sales
							</li>
							<li className="text-2xl font-medium mb-7">
								Weekly payouts direct to your bank account
							</li>
							<li className="text-2xl font-medium mt-4">
								PCI compliant to keep your sensitive info safe
							</li>
						</ul>
					</div>
					{/* image */}
					<div className="">
						<img src={feet} className="shadow-2xl h-[30vh]" alt="feets" />
					</div>
				</div>
			</div>

			{/* verified model page */}
			<div className=" ">
				<div className=" ">
					<p className="mt-10 mb-6 text-[2.8rem] text-center font-bold">
						VERIFIED MODELS
					</p>
					<div className="relative">
						{/* image */}
						<div className="flex justify-center">
							<div className="relative w-[80%] flex justify-center h-[80vh]">
								<img
									src={BG}
									alt="feet"
									className="w-full hover:bg-purple-400 shadow-2xl  h-full"
								/>
								<div className="absolute inset-0 bg-black bg-opacity-30"></div>
							</div>
						</div>

						<div className="flex items-center justify-center absolute border inset-0">
							<div className="">
								<p className="mt-10 mb-6 text-white text-[2.8rem] text-center font-bold">
									View Millions Of Verified Models
								</p>
								{/* button */}
								<div className="flex items-center justify-center">
									<button className="border border-white  bg-purple-600 px-20 py-5 rounded-full hover:bg-[#ed3b59]">
										<a href="#" className="font-medium text-white">
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
			<div className=" ">
				<div className=" ">
					<p className="mt-10 mb-6 text-[2.8rem] text-center font-bold">
						POPULAR CONTENT
					</p>
					<div className="relative">
						{/* image */}
						<div className="flex justify-center">
							<div className="relative w-[80%] flex justify-center h-[80vh]">
								<img
									src={B}
									alt="feet"
									className="w-full hover:bg-purple-400  h-full"
								/>
								<div className="absolute inset-0 bg-black bg-opacity-30"></div>
							</div>
						</div>

						<div className="flex items-center justify-center absolute border inset-0">
							<div className="">
								<p className="mt-10 mb-6 text-white text-[2.8rem] text-center font-bold">
									View Millions Of foot fetish <br /> pictures and videos
								</p>
								{/* button */}
								<div className="flex items-center justify-center">
									<button className="border border-white  bg-purple-600 px-20 py-5 rounded-full hover:bg-[#ed3b59]">
										<a href="#" className="font-medium text-white">
											VIEW MORE CONTENT
										</a>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* POPULAR CATEGORIES PAGES */}
			<div className="">
				<div className=" ">
					{/* texts */}
					<div className="">
						<p className="mt-10 text-[2.8rem] text-center font-bold">
							POPULAR CATEGORIES
						</p>
						<p className="pt-1 text-center text-2xl text-gray-400">
							Explore dozens of niche feet categories to find your preferred{" "}
							<br />
							content easily
						</p>
					</div>

					{/* Grids 1 */}
					<div className="grid grid-cols-4 gap-6 mx-10 mt-10">
						{/* A */}
						<a href="#" className="">
							<div className="border border-blue-400 hover:bg-purple-600 h-[40vh] rounded-2xl">
								<img
									src={hil}
									className="w-full hover:bg-purple-400 hover:opacity-30 rounded-2xl h-full"
									alt="pictures"
								/>
							</div>
							<p className="text-center font-bold mt-4 text-lg">HIGH HEELS </p>
						</a>
						{/* B  */}
						<a href="#" className="">
							<div className="border border-blue-400 hover:bg-purple-600 h-[40vh] rounded-2xl">
								<img
									src={we}
									className="w-full hover:bg-purple-400 hover:opacity-30 rounded-2xl h-full"
									alt="pictures"
								/>
							</div>
							<p className="text-center font-bold mt-4 text-lg">SOLES </p>
						</a>
						{/* C  */}
						<a href="#" className="">
							<div className="border border-blue-400 hover:bg-purple-600 h-[40vh] rounded-2xl">
								<img
									src={hi}
									className="w-full hover:bg-purple-400 hover:opacity-30 rounded-2xl h-full"
									alt="pictures"
								/>
							</div>
							<p className="text-center font-bold mt-4 text-lg">NAIL POLISH </p>
						</a>
						{/* D  */}
						<a href="#" className="">
							<div className="border border-blue-400 hover:bg-purple-600 h-[40vh] rounded-2xl">
								<img
									src={am}
									className="w-full hover:bg-purple-400 hover:opacity-30 rounded-2xl h-full"
									alt="pictures"
								/>
							</div>
							<p className="text-center font-bold mt-4 text-lg">SOCKS </p>
						</a>
					</div>

					{/* Grids 2 */}
					<div className="grid grid-cols-4 gap-6 mx-10 my-5">
						{/* A */}
						<a href="#" className="">
							<div className="border border-blue-400 hover:bg-purple-600 h-[40vh] rounded-2xl">
								<img
									src={lo}
									className="w-full hover:bg-purple-400 hover:opacity-30 rounded-2xl h-full"
									alt="pictures"
								/>
							</div>
							<p className="text-center font-bold mt-4 text-lg">LOTION </p>
						</a>
						{/* B  */}
						<a href="#" className="">
							<div className="border border-blue-400 hover:bg-purple-600 h-[40vh] rounded-2xl">
								<img
									src={pe}
									className="w-full hover:bg-purple-400 hover:opacity-30 rounded-2xl h-full"
									alt="pictures"
								/>
							</div>
							<p className="text-center font-bold mt-4 text-lg">PEDICURE </p>
						</a>
						{/* C  */}
						<a href="#" className="">
							<div className="border border-blue-400 hover:bg-purple-600 h-[40vh] rounded-2xl">
								<img
									src={di}
									className="w-full hover:bg-purple-400 hover:opacity-30 rounded-2xl h-full"
									alt="pictures"
								/>
							</div>
							<p className="text-center font-bold mt-4 text-lg">DIRTY FEET </p>
						</a>
						{/* D  */}
						<a href="#" className="">
							<div className="border border-blue-400 hover:bg-purple-600 h-[40vh] rounded-2xl">
								<img
									src={ma}
									className="w-full hover:bg-purple-400 hover:opacity-30 rounded-2xl h-full"
									alt="pictures"
								/>
							</div>
							<p className="text-center font-bold mt-4 text-lg">MALE</p>
						</a>
					</div>

					{/* Grids 3 */}
					<div className="grid grid-cols-4 gap-6 mx-10 my-5">
						{/* A */}
						<a href="#" className="">
							<div className="border border-blue-400 hover:bg-purple-600 h-[40vh] rounded-2xl">
								<img
									src={da}
									className="w-full hover:bg-purple-400 hover:opacity-30 rounded-2xl h-full"
									alt="pictures"
								/>
							</div>
							<p className="text-center font-bold mt-4 text-lg">DANCER </p>
						</a>
						{/* B  */}
						<a href="#" className="">
							<div className="border border-blue-400 hover:bg-purple-600 h-[40vh] rounded-2xl">
								<img
									src={ta}
									className="w-full hover:bg-purple-400 hover:opacity-30 rounded-2xl h-full"
									alt="pictures"
								/>
							</div>
							<p className="text-center font-bold mt-4 text-lg">TATTOO </p>
						</a>
						{/* C  */}
						<a href="#" className="">
							<div className="border border-blue-400 hover:bg-purple-600 h-[40vh] rounded-2xl">
								<img
									src={sf}
									className="w-full hover:bg-purple-400 hover:opacity-30 rounded-2xl h-full"
									alt="pictures"
								/>
							</div>
							<p className="text-center font-bold mt-4 text-lg">
								SHOWING FACE{" "}
							</p>
						</a>
						{/* D  */}
						<a href="#" className="">
							<div className="border border-blue-400 hover:bg-purple-600 h-[40vh] rounded-2xl">
								<img
									src={ny}
									className="w-full hover:bg-purple-400 hover:opacity-30 rounded-2xl h-full"
									alt="pictures"
								/>
							</div>
							<p className="text-center font-bold mt-4 text-lg">NYLON </p>
						</a>
					</div>
				</div>

				{/* button  */}
				<div className="flex items-center justify-center my-10">
					<button className="border border-white  bg-purple-600 px-20 py-5 rounded-full hover:bg-[#ed3b59]">
						<a href="#" className="font-medium text-white">
							VIEW MORE CATEGORIES
						</a>
					</button>
				</div>
			</div>

			{/* Free foot fetish pics pages  */}
			<div className="bg-gray-300 h-full">
				{/* texts */}
				<div className="pt-10">
					<p className="mt-10 text-[2.8rem] text-center font-bold">
						Free Foot Fetish Pics
					</p>
					<p className="pt-1 text-center text-2xl text-gray-400">
						Explore thousands of free feet pictures from ID-verified foot <br />
						fetish models!
					</p>
				</div>
				{/* general container for the free foot fetish */}
				<div className="mt-4 flex justify-center place-items-center">
					<div className=" flex">
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
										<img src={da} className="h-[33vh] rounded-3xl p-2" alt="" />
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
										<img src={ny} className="h-[32vh] rounded-3xl p-2" alt="" />
									</a>
									<a href="#">
										{" "}
										<img src={hi} className="h-[32vh] rounded-3xl p-2" alt="" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* fetish button */}
                <div className="flex items-center justify-center py-10">
					<button className="border border-white bg-purple-600 px-20 py-5 rounded-full hover:bg-[#ed3b59]">
						<a href="#" className="font-medium text-white">
							VIEW FEET PICS
						</a>
					</button>
				</div>
			</div>

            {/* how much your feet worth */}
            <div className="">

            </div>
		</>
	);
}
