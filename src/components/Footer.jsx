import React from "react";
import MS from "../public/MSlogo.jpg";

export default function Footer() {
	return (
		<>
			<div className="border border-green-400 text-white h-[50vh]">
				<div className="">
					{/* image */}
					<div className="">
						<img src={MS} className="w-[10%] h-[10vh]" alt="ms" />
					</div>

					<div className="">
						<p className="">
							FeetFinder is the most convenient website for verified users to
							buy or sell custom foot content in a safe and secure environment.
						</p>
					</div>

					{/* links */}
					<div className=" ">
						<a href="https://x.com/i/flow/login">
							<i className="pi pi-twitter p-2 rounded-full text-yellow-600 mr-1 font-semibold border border-yellow-600 hover:text-white hover:border-white"></i>
						</a>

						<a href="https://www.instagram.com/accounts/login/?hl=en">
							<i className="pi pi-instagram p-2 rounded-full text-yellow-600 mr-1 font-semibold border border-yellow-600 hover:text-white hover:border-white"></i>
						</a>
						<a href="https://www.youtube.com/">
							<i className="pi pi-youtube p-2 rounded-full text-yellow-600 mr-1 font-semibold border border-yellow-600 hover:text-white hover:border-white"></i>
						</a>
						<a href="https://www.facebook.com/">
							<i className="pi pi-facebook p-2 rounded-full text-yellow-600 mr-1 font-semibold border border-yellow-600 hover:text-white hover:border-white"></i>
						</a>
						<a href="https://www.tiktok.com/login">
							<i className="pi pi-tiktok p-2 rounded-full text-yellow-600 font-semibold border border-yellow-600 hover:text-white hover:border-white"></i>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
