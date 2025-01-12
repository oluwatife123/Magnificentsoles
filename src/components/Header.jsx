import React from "react";
import Menubar from "../Menu/menubar";
import SignIn from "../Auth/SignUp";
import Login from "../Auth/Login";

export default function Header() {
	return (
		<>
			<div className="">

				{/* menu container */}
				<div className="">
					<Menubar />
				</div>
				
			</div>
		</>
	);
}
