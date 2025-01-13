import React, { useState } from "react";
import MS from "../public/MSlogo.jpg";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../../firebase/firebaseConfig"; // Import the initialized Firebase app

const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleSignUp = async (e) => {
		e.preventDefault();
		const auth = getAuth(app); // Pass the initialized app
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			navigate("/");
		} catch (error) {
			setError("Sign up failed: " + error.message);
		}
	};

	return (
		<div className="">
			<div className="mt-20">
				<img src={MS} alt="img" />
			</div>

			<div className="flex items-center justify-center md:min-h-screen bg-black">
				<div className="w-full max-w-md p-6 bg-white mx-3 rounded-lg shadow-lg">
					<h2 className="text-3xl text-center font-bold text-gray-800">
						Sign Up
					</h2>
					{error && <p className="text-red-500 text-center mb-4">{error}</p>}
					<form onSubmit={handleSignUp} className="mt-8 space-y-4">
						<div>
							<label htmlFor="email" className="block text-gray-600">
								Email
							</label>
							<input
								type="email"
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
								required
								placeholder="Your email"
							/>
						</div>
						<div>
							<label htmlFor="password" className="block text-gray-600">
								Password
							</label>
							<input
								type="password"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
								required
								placeholder="Your password"
							/>
						</div>
						<button
							type="submit"
							className="w-full py-2 border border-yellow-600 bg-yellow-600 text-purple-60 rounded-md hover:text-black hover:bg-white">
							Sign Up
						</button>
					</form>
					<div className="mt-4 text-center">
						<span className="text-sm text-gray-600">
							Already have an account?{" "}
						</span>
						<button
							className="text-blue-500 hover:underline"
							onClick={() => navigate("/login")}>
							Login
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
