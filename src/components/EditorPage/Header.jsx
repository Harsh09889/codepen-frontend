import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "../../api";
import { getCodepenByTitleApi, postCodepen } from "../../api/code";
import AuthContext from "../../contexts/auth";
import { CodeContext } from "../../contexts/code";

const Header = () => {
	const { codepen, dispatch } = useContext(CodeContext);
	const { user } = useContext(AuthContext);
	const [savedCodepen, setSavedCodepen] = useState(null);
	const [isAuthor, setIsAuthor] = useState(false);
	const [notUpdated, setNotUpdated] = useState(false);

	console.log(codepen?.author?._id);
	console.log(user?._id);

	useEffect(() => {
		(() => {
			if (codepen.isSaved) setSavedCodepen(codepen);

			if (!codepen.author && !codepen.isSaved) {
				setIsAuthor(true);
				return;
			}

			if (codepen?.author?._id === user?._id) {
				setIsAuthor(true);
			} else {
				setIsAuthor(false);
			}
		})();

		return () => {
			dispatch({
				payload: {
					xml: "",
					css: "",
					javascript: "",
					title: "",
					author: null,
					isSaved: false,
				},
			});
		};
	}, []);

	const checkForUpdates = () => {
		if (codepen.isSaved && isAuthor) {
			if (
				codepen.xml === savedCodepen?.xml &&
				codepen.css === savedCodepen?.css &&
				codepen.javascript === savedCodepen?.javascript
			) {
				setNotUpdated(false);
			} else {
				// console.log(true);
				setNotUpdated(true);
			}
		}
	};

	useEffect(() => {
		const timer = setInterval(() => {
			checkForUpdates();
		}, 1000);

		return () => clearInterval(timer);
	}, [codepen, savedCodepen]);

	const handleUpdateCodepen = async () => {
		const response = await axios.patch(`/code/${codepen._id}`, {
			...codepen,
			author: user._id,
		});
		console.log("HTML REsponse", response.data.data.xml);
		setSavedCodepen({
			xml: response.data.data.xml,
			css: response.data.data.css,
			javascript: response.data.data.javascript,
		});
		setNotUpdated(false);
	};

	const titleBlurHandle = (e) => {
		if (e.currentTarget.textContent === "") {
			alert("You can not leave the title as blank");
			e.currentTarget.textContent = "Untitled";
			dispatch({ payload: { title: "Untitled" } });
		}
	};

	const handleTitleChange = (e) => {
		const title = e.currentTarget.textContent;

		if (title === "Untitled") dispatch({ payload: { title: "" } });
		else dispatch({ payload: { title } });
	};

	const handlePostCodepen = async (e) => {
		if (!codepen.title) {
			toast("Change title of your Codepen!!", { type: "error" });
			return;
		}

		const { data } = await postCodepen({ ...codepen, author: user._id });
		console.log(data);
		const { xml, javascript, css, title } = data.data;
		dispatch({ payload: { xml, javascript, css, title, isSaved: true } });
		setSavedCodepen(data.data);
	};

	return (
		<>
			<ToastContainer />
			{isAuthor && notUpdated && (
				<div
					onClick={handleUpdateCodepen}
					className='p-4 font-bold text-white'>
					Click here to Save your Changes to database
				</div>
			)}
			<div className='h-16 bg-black border-b flex justify-between pr-4'>
				<div className='h-full flex'>
					<Link to={"/"}>
						<img
							className='h-full'
							src='https://www.vectorlogo.zone/logos/codepen/codepen-tile.svg'
							alt='logo'
						/>
					</Link>
					{
						<div className='flex flex-col ml-4 items-start justify-center'>
							<h1
								suppressContentEditableWarning={true}
								onBlur={titleBlurHandle}
								contentEditable={isAuthor}
								onInput={handleTitleChange}
								className='text-white font-semibold text-xl'>
								{codepen.isSaved ? codepen.title : "Untitled"}
							</h1>
							<p className='text-white opacity-80 text-sm'>
								{codepen?.author?.name
									? codepen?.author?.name
									: user
									? user.name
									: "Captain Anonymous"}
							</p>
						</div>
					}
				</div>
				{!user ? (
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
				) : codepen.isSaved ? (
					<div className='flex py-2  gap-2'>
						<button
							disabled={true}
							className=' px-3 grid place-items-center rounded-md text-center bg-[grey] '>
							Already Saved!
						</button>
					</div>
				) : (
					<div className='flex py-2  gap-2'>
						<button
							onClick={handlePostCodepen}
							className=' w-24 grid place-items-center rounded-md text-center bg-[#37d86c] hover:bg-[#248c46] hover:text-white'>
							Save
						</button>
					</div>
				)}
			</div>
		</>
	);
};

export default Header;
