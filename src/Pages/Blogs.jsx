import React from "react";
import BlogsSlider from "../components/BlogsSlider";
import Menubar from "../Auth/Menubar";

export default function Blogs() {
	return (
		<>
		<Menubar />
			<div className=" flex justify-center items-center bg-black mt-4">
			<div className="">
				{/* text */}
				<div className="">
					<p className="mt-5 md:text-[2.8rem] text-white text-[1.4rem] text-center font-bold">
						BLOGS
					</p>
				</div>
				<div className="">
					<BlogsSlider />
				</div>
				</div>
				<div className=""></div>
			</div>
		</>
	);
}
