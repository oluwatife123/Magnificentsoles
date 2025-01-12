import React from "react";
import Menubar from "../Auth/Menubar";
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
