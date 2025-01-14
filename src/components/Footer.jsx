import React from "react";
import MS from "../public/MSlogo.jpg";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<>
			<div className="flex justify-center items-center ">
				<div>
					<div className="mt-9 py-6  text-white md:flex w-full gap-9 h-full">
						{/* first */}
						<div className="md:w-[25%] w-[80%] ml-5">
							{/* image */}
							<div className="mb-1">
								<img src={MS} className="w-24 h-14" alt="ms" />
							</div>

							<div className="">
								<p className="text-sm">
									MagnificentSoles is the most convenient website for verified users
									to buy or sell custom foot content in a safe and secure
									environment.
								</p>
							</div>

							{/* links */}
							<div className="mt-2 ">
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

                        <div className="flex mt-3 gap-8 ">
                            {/* second */}
						<div className=" mx-3">
							<p className="text-lg font-bold">Company Links</p>

							<nav className="lg:block block">
								<Link
									to="/"
									className="block text-white hover:text-yellow-600 hover:animate-pulse font-normal py-1 pl-1"
									onClick={() => setIsOpen(false)}>
									Home
								</Link>
								<Link
									to="/sellers"
									className="block text-white hover:text-yellow-600 hover:animate-pulse font-normal py-1 pl-1"
									onClick={() => setIsOpen(false)}>
									Sellers
								</Link>
								<Link
									to="/how-it-works"
									className="block text-white hover:text-yellow-600 hover:animate-pulse font-normal py-1 pl-1"
									onClick={() => setIsOpen(false)}>
									How It Works
								</Link>
								<Link
									to="/faq"
									className="block text-white hover:text-yellow-600 hover:animate-pulse font-normal py-1 pl-1"
									onClick={() => setIsOpen(false)}>
									FAQ
								</Link>
								<Link
									to="/blogs"
									className="block text-white hover:text-yellow-600 hover:animate-pulse font-normal py-1 pl-1"
									onClick={() => setIsOpen(false)}>
									Blogs
								</Link>
							</nav>
						</div>

						{/* third */}
						<div className="block">
							<p className="font-bold text-lg">Useful Links</p>
							<a
								href="#"
								className="text-white block hover:text-yellow-600 hover:animate-pulse font-normal py-1 pl-1">
								Privacy Policy
							</a>
							<a
								href="#"
								className="text-white block hover:text-yellow-600 hover:animate-pulse font-normal py-1 pl-1">
								Terms of Service
							</a>
							<a
								href="#"
								className="text-white block hover:text-yellow-600 hover:animate-pulse font-normal py-1 pl-1">
								2257 Statement
							</a>
							<a
								href="#"
								className="text-white block hover:text-yellow-600 hover:animate-pulse font-normal py-1 pl-1">
								DMCA Policy
							</a>
							<a
								href="#"
								className="text-white block hover:text-yellow-600 hover:animate-pulse font-normal py-1 pl-1">
								Referral Program Terms
							</a>
							<a
								href="#"
								className="text-white block hover:text-yellow-600 hover:animate-pulse font-normal py-1 pl-1">
								CCPA
							</a>
							<a
								href="#"
								className="text-white block hover:text-yellow-600 hover:animate-pulse font-normal py-1 pl-1">
								Buyer-Seller Agreement
							</a>
							<a
								href="#"
								className="text-white block hover:text-yellow-600 hover:animate-pulse font-normal py-1 pl-1">
								Seller Agreement
							</a>
							<a
								href="#"
								className="text-white block hover:text-yellow-600 hover:animate-pulse font-normal py-1 pl-1">
								Refund Policy
							</a>
							<a
								href="#"
								className="text-white block hover:text-yellow-600 hover:animate-pulse font-normal py-1 pl-1">
								Chargeback - Fraud Mitigation Policy
							</a>
							<a
								href="#"
								className="text-white block hover:text-yellow-600 hover:animate-pulse font-normal py-1 pl-1">
								Complaint Policy & Procedures
							</a>
						</div>

                        </div>
						

						{/* forth */}
						<div className=" mx-3">
							<p className="font-bold text-lg mb-2">Contact Info</p>
							<div className="">
								<div className="flex gap-1">
									<i className="pi pi-envelope text-white text-2xl"></i>
									<a
										href="#"
										className="text-white block hover:text-yellow-600 hover:animate-pulse font-semibold py-1 pl-1">
										Hello@magnificentsoles.com
									</a>
								</div>

								<div className="flex gap-1 mb-10">
									<i className="pi pi-home text-white text-2xl"></i>
									<p className="">Carson City,NV</p>
								</div>

								<div className=" bg-yellow-600 py-2 md:mx-0 rounded-lg">
									<div className="flex items-center justify-center mt-2">
										<div className="flex gap-1">
											<i className="pi pi-star font-bold text-2xl text-white"></i>
											<p className="font-semibold text-white text-lg">
												Trustpilot
											</p>
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
											Trust Score{" "}
											<span className="font-bold text-white">4.1</span>|{" "}
											<span className="underline text-white">
												3,575 reviews
											</span>{" "}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<p className="text-white text-center mx-3 pb-4">
						© magnificentsoles All rights reserved 2025 - Transactions will appear on
						your credit card statement as SEGPAY.COM*FLRT Inc
					</p>
				</div>
			</div>
		</>
	);
}
