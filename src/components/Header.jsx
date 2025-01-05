import React from "react";
import Menubar from "../Menu/menubar";
import SignIn from "../Auth/SignIn";
import Login from "../Auth/Login";

export default function Header() {
	return (
		<>
			<div className=" flex gap-10 bg-purple-600">
				{/* LOGO */}
				

				{/* menu container */}
				<div className="">
					<Menubar />
				</div>

				{/* search bar */}
				<div className=""></div>

				{/* SignIn and Login container */}

				
			</div>
		</>
	);
}
