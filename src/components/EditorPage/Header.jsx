import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CodeContext } from "../../contexts/code";

const Header = () => {
	const { codepen, dispatch } = useContext(CodeContext);

	console.log(codepen);

	const titleBlurHandle = (e) => {
		if (e.currentTarget.textContent === "") {
			alert("You can not leave the title as blank");
		}
		e.currentTarget.textContent = "Untitled";
		dispatch({ payload: { title: "Untitled" } });
	};

	const handleTitleChange = (e) => {
		const title = e.currentTarget.textContent;

		if (title === "Untitled") dispatch({ payload: { title: "" } });
		else dispatch({ payload: { title } });
	};

	return (
		<div className='h-16 bg-black border-b flex justify-between pr-4'>
			<div className='h-full flex'>
				<img
					className='h-full'
					src='https://www.vectorlogo.zone/logos/codepen/codepen-tile.svg'
					alt='logo'
				/>
				{
					<div className='flex flex-col ml-4 items-start justify-center'>
						<h1
							suppressContentEditableWarning={true}
							onBlur={titleBlurHandle}
							contentEditable='true'
							onInput={handleTitleChange}
							className='text-white font-semibold text-xl'>
							Untitled
						</h1>
						<p className='text-white opacity-80 text-sm'>
							{codepen?.author?.name
								? codepen.author.name
								: "Captain Anonymous"}
						</p>
					</div>
				}
			</div>
			{!codepen.author ? (
				<div className='flex py-2  gap-2'>
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
				</div>
			) : (
				<div className='flex py-2  gap-2'>
					<button
						disabled={codepen.isSaved}
						style={{
							background: codepen.isSaved ? "grey" : "",
							color: codepen.isSaved ? "black" : "",
						}}
						className=' w-24 grid place-items-center rounded-md text-center bg-[#37d86c] hover:bg-[#248c46] hover:text-white'>
						Save
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
