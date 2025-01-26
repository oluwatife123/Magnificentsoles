import React, { useState } from "react";
import savePictureData from "../firebase/firestoreUtils";
import uploadToCloudinary from "../firebase/uploadToCloudinary";
import { auth } from "../firebase/firebaseConfig";
import Footer from "./Footer";

const UploadPicture = ({ addPicture, pictures = [], deletePicture }) => {
	const [isUploading, setIsUploading] = useState(false);
	const [price, setPrice] = useState("");
	const fileInputRef = React.createRef();

	const handleFileChange = async (e) => {
		const file = e.target.files[0];
		if (!file || !price) {
			alert("Please select a file and set a price!");
			return;
		}

		setIsUploading(true);
		try {
			const uploadedUrl = await uploadToCloudinary(file);
			const sellerId = auth.currentUser ? auth.currentUser.uid : "anonymous";

			await savePictureData(uploadedUrl, price, sellerId);

			setPrice("");
			if (fileInputRef.current) {
				fileInputRef.current.value = "";
			}

			if (addPicture) {
				addPicture(uploadedUrl, price);
			}
		} catch (err) {
			console.error("Error uploading picture:", err);
		} finally {
			setIsUploading(false);
		}
	};

	const handleFileButtonClick = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	return (
		<>
			<div className="bg-black">
				<div className=" ">
					{/* first div */}
					<div className="flex justify-center place-items-center pt-20 md:pt-0 lg:pt-0 sm:pt-0  ">
						<div className="border rounded-xl border-gray-500 w-full mx-3 md:w-[40%] px-3 py-3">
							<h2 className="md:mt-10 lg:mt-10 sm:mt-10 mb-6 md:text-[2rem] text-[1.4rem] text-center font-bold text-white">
								Upload a Picture
							</h2>
							<div className="flex justify-center place-items-center mt-5">
								<input
									type="number"
									placeholder="# Set a price for your picture "
									value={price}
									onChange={(e) => setPrice(e.target.value)}
									disabled={isUploading}
									className="mb-[10px] p-3 w-full"
								/>
							</div>
							<div>
								{/* Button  */}
								<div className="flex justify-center place-items-center">
									<button
										onClick={handleFileButtonClick}
										disabled={isUploading}
										className="py-[10px] mt-4 px-[20px] text-white rounded-xl hover:bg-white hover:text-black bg-yellow-600 cursor-pointer mb-[10px]">
										{isUploading ? "Uploading..." : "Choose a Picture"}
									</button>
								</div>

								{/* Hidden  input */}
								<input
									ref={fileInputRef}
									type="file"
									onChange={handleFileChange}
									style={{ display: "none" }}
									accept="image/*"
									disabled={isUploading}
								/>
							</div>
						</div>
					</div>

					{/* image container div */}
					<div className="">
						<h3 className="md:mt-10 mt-7 lg:mt-10 sm:mt-10 mb-6 md:text-[2rem] text-[1.4rem] text-center font-bold text-white">
							Your Uploaded Pictures
						</h3>
						<div className="grid grid-cols-2 gap-2 h-full pb-2 lg:gap-10 md:mx-3  md:py-2 md:px-3 mx-3">
							{pictures && pictures.length > 0 ? (
								pictures.map((pic) => (
									<div key={pic.id}
                                    className="border border-gray-300 px-1">
										<img
											src={pic.imageUrl}
											alt="Uploaded"
											className="w-full h-[25vh] md:h-[50vh]"
										/>
										<div className=" mt-2 flex justify-between gap-2 mb-3">
											<p className=" text-white">
												<span className="text-yellow-600 md:text-xl">
													Price:
												</span>{" "}
												<br /> #{pic.price}
											</p>
											<button
												onClick={() => deletePicture(pic.id)}
												className="border border-white bg-red-600 hover:bg-red-800 hover:text-white rounded-xl text-xm px-2 py-1 md:py-2 md:px-4 md:text-xl text-white cursor-pointer">
												Delete
											</button>
										</div>
									</div>
								))
							) : (
								<p>No pictures uploaded yet.</p>
							)}
						</div>
					</div>
				</div>
                <hr />
				<div className="">
					<Footer />
				</div>
			</div>
		</>
	);
};

export default UploadPicture;
