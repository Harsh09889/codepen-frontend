import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/auth";

const Index = ({ isSidebar, search, setSearch }) => {
	const { user, logout } = useContext(AuthContext);

	return (
		<nav className={`sticky my-8 mx-4 flex gap-2 ${!isSidebar && "ml-8"}`}>
			<div className=' bg-[#252830] h-12 rounded-md flex items-center px-4 w-full'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth='2.5'
					stroke='#868ca0'
					className='w-8 h-8 mr-4'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
					/>
				</svg>
				<input
					type='search'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className='w-full outline-none bg-transparent text-[#868ca0] border-none h-full text-xl font-medium'
					placeholder='Search CodePen...'
				/>
			</div>
			{!user ? (
				<>
					<Link
						to={"/auth/login"}
						className=' w-24 grid place-items-center rounded-md text-center bg-[#37d86c] hover:bg-[#248c46] hover:text-white'>
						Sign Up
					</Link>

					<Link
						to={"/auth/login"}
						className=' w-24 grid place-items-center rounded-md text-center bg-[#5a5f73] hover:bg-[#959ebf]  text-white '>
						Login
					</Link>
				</>
			) : (
				<button
					onClick={(e) => logout()}
					className=' w-24 grid place-items-center rounded-md text-center bg-[#37d86c] hover:bg-[#248c46] hover:text-white'>
					{user?.name}
				</button>
			)}
		</nav>
	);
};

export default Index;
