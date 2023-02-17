import React from "react";
import Search from "../Search";
function index({ children }) {
	return (
		<div className='bg-[#131417] bg-hero-pattern min-h-screen w-screen overflow-hidden flex flex-col'>
			<main className='min-h-screen'>{children}</main>
			<footer></footer>
		</div>
	);
}

export default index;
