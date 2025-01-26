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
			<div className="bg-black">
				
				<div className="flex justify-center place-item-center ">
					<div className="mt-32 w-[87%]">
						<h1 className="md:mt-10 lg:mt-10 sm:mt-10 mb-6 md:text-[2.8rem] text-[1.4rem] text-center font-bold text-white">
							Welcome back customer,Happy to see you!
						</h1>

						{loading ? (
							<p className="text-white">Loading pictures...</p>
						) : (
							<div
								className="border border-red-600"
								style={{
									display: "grid",
									gridTemplateColumns: "repeat(3, 1fr)",
									gap: "15px",
								}}>
								{pictures.length > 0 ? (
									pictures.map((pic) => (
										<div className="border gap-10" key={pic.id}>
											<img
												src={pic.imageUrl}
												alt="Uploaded"
												className="w-full"
												style={{ maxWidth: "100%" }}
												onError={(e) => (e.target.src = "fallback-image.jpg")}
											/>
											<div className=" mt-3 flex justify-between">
												<p className="mt-2 text-white">
													<span className="text-red-600">Price:</span> #
													{pic.price}
												</p>
												<button
													onClick={() => handleBuyClick(pic.id)}
													className="bg-[green] text-white hover:bg-green-600 rounded-lg py-[10px] px-[20px] cursor-pointer">
													Buy Picture
												</button>
											</div>
										</div>
									))
								) : (
									<p className="text-white">No pictures available.</p>
								)}
							</div>
						)}
					</div>
				</div>

                <div>
                <Link
					to="/"
					className="font-bold mt-10 rounded-xl border border-white py-2 px-4 md:text-xl text-white"
					onClick={() => setIsOpen(false)}>
					Back to home
				</Link>
                </div>

				<div>
					<Footer />
				</div>
			</div>
		</>
	);
};

export default ViewPictures;
