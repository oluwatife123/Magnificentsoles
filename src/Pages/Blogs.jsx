import React from "react";
import BlogsSlider from "../components/BlogsSlider";

export default function Blogs() {
	return (
		<>
			<div className="border flex justify-center items-center bg-gray-200 mt-4">
			<div className="">
				{/* text */}
				<div className="">
					<p className="mt-10 md:text-[2.8rem] text-[1.4rem] text-center font-bold">
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
