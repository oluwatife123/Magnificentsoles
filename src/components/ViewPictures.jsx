import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const ViewPictures = () => {
	const [pictures, setPictures] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchPictures = async () => {
			try {
				const querySnapshot = await getDocs(collection(db, "pictures"));
				const data = querySnapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));

				console.log("Fetched Data:", data);
				setPictures(data);
			} catch (err) {
				console.error("Error fetching pictures:", err);
			} finally {
				setLoading(false);
			}
		};

		fetchPictures();
	}, []);

	const handleBuyClick = (pictureId) => {
		console.log(`Buying picture with ID: ${pictureId}`);

		alert(`You've selected the picture with ID: ${pictureId} to buy.`);
	};

	return (
		<>
			<div className="bg-black mt-10">
				
				<div className="flex justify-center place-item-center ">
					<div className="mt-12 lg:w-[87%] md:w-[87%] px-2">
						<h1 className="md:mt-10 lg:mt-10 sm:mt-10 mb-6 md:text-[2rem] text-[1.4rem] text-center font-bold text-white">
							Welcome back to our website,Happy to see you!
						</h1>

						{loading ? (
							<p className="text-white my-4">Loading pictures...</p>
						) : (
							<div
								className="grid grid-cols-2 gap-2 pb-2 lg:gap-10 md:mx-3  md:py-2 md:px-3 mx-3"
								>
								{pictures.length > 0 ? (
									pictures.map((pic) => (
										<div className="hover:border mb-2 border-gray-300 px-1" key={pic.id}>
											<img
												src={pic.imageUrl}
												alt="Uploaded"
												className="w-full h-[25vh] md:h-[50vh]"
												
												onError={(e) => (e.target.src = "fallback-image.jpg")}
											/>
											<div className=" mt-2 mb-3 flex justify-between gap-2">
												<p className=" text-white">
													<span className="text-yellow-600 md:text-xl">Price:</span> <br /> #{pic.price}
												</p>
												<button
													onClick={() => handleBuyClick(pic.id)}
													className="border border-white bg-yellow-600 hover:bg-white hover:text-black rounded-xl text-xm px-2 py-1 md:py-2 md:px-4 md:text-xl text-white cursor-pointer">
													Buy Picture
												</button>
											</div>
										</div>
									))
								) : (
									<p className="text-white">No pictures available,check your internet.</p>
								)}
							</div>
						)}
					</div>
				</div>

                {/* <div className="mt-20 ml-3 lg:ml-28 md:ml-28">
                <Link
					to="/"
					className="font-bold rounded-xl border border-white bg-yellow-600 hover:bg-white hover:text-black py-2 px-4 md:text-xl text-white cursor-pointer"
					onClick={() => setIsOpen(false)}>
					Back to home
				</Link>
                </div> */}
<hr />
				<div>
					<Footer />
				</div>
			</div>
		</>
	);
};

export default ViewPictures;
