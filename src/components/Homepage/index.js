import React, { useState } from "react";
import Search from "../Search";
import Sidebar from "../Sidebar/Sidebar";

const Homepage = () => {
	const [isSidebar, setIsSidebar] = useState(false);

	return (
		<div className='flex '>
			<Sidebar
				isSidebar={isSidebar}
				setIsSidebar={setIsSidebar}
			/>
			<div className='w-full'>
				<Search isSidebar={isSidebar} />
			</div>
		</div>
	);
};

export default Homepage;
