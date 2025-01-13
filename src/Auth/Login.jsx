import React, { useState } from "react";
import MS from "../public/MSlogo.jpg";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import app from "../../firebase/firebaseConfig"; // Import the initialized Firebase app

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		const auth = getAuth(app); // Pass the initialized app
		try {
			await signInWithEmailAndPassword(auth, email, password);

			// Show a green toast for successful login
			toast.success("Login successful!", {
				position: "top-center",
				autoClose: 3000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				style: { backgroundColor: "#4CAF50", color: "#fff" }, // Green background
			});

			setTimeout(() => navigate("/"), 3000); // Delay navigation to allow the toast to show
		} catch (error) {
			// Show a red toast for failed login
			toast.error("Login failed: " + error.message, {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				style: { backgroundColor: "#f44336", color: "#fff" }, // Red background
			});
		}
	};

	return (
		<div className="">
			<div className="mt-20">
				<img src={MS} alt="img" />
			</div>

			<div className="flex items-center justify-center md:min-h-screen bg-black">
				<ToastContainer />
				<div className="w-full max-w-md p-6 bg-white mx-3 rounded-lg shadow-lg">
					<h2 className="text-3xl text-center font-bold text-gray-800">
						Login
					</h2>
					<form onSubmit={handleLogin} className="mt-8 space-y-4">
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
							Log In
						</button>
					</form>
					<div className="mt-4 text-center">
						<span className="text-sm text-gray-600">
							Don't have an account?{" "}
						</span>
						<button
							className="text-blue-500 hover:underline"
							onClick={() => navigate("/signup")}>
							Sign up
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
