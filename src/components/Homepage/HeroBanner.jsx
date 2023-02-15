import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/auth";

const HeroBanner = () => {
	const { user } = useContext(AuthContext);

	return (
		<div className='flex flex-col md:flex-row  text-white my-16 mx-4'>
			<div className='flex flex-col items-end md:w-1/2'>
				<div className='flex justify-end'>
					<Link to={"/"}>
						<img
							className='w-16 mr-4'
							src='https://www.vectorlogo.zone/logos/codepen/codepen-tile.svg'
							alt='logo'
						/>
					</Link>
					<h2 className='text-2xl md:text-[45px] md:leading-[50px] font-extrabold w-2/3'>
						The best place to build, test, and discover front-end code.
					</h2>
				</div>
				<p className='w-4/5 text-lg text-[#c7c9d3] mt-4  leading-6'>
					CodePen is a social development environment for front-end designers
					and developers. Build and deploy a website, show off your work, build
					test cases to learn and debug, and find inspiration.
				</p>
				<div className='w-4/5 my-8'>
					<Link
						to={"/auth/login"}
						style={{ display: !user ? "grid" : "none" }}
						className=' p-2 text-black w-fit grid place-items-center rounded-md  text-center bg-[#37d86c] hover:bg-[#248c46] hover:text-white'>
						Sign Up for Free
					</Link>
				</div>
			</div>
			<div className='md:w-1/2 grid place-items-center'>
				<div className=' mt-16 md:mt-0 w-4/5'>
					<div
						style={{
							background:
								"linear-gradient(109.61deg,#4c4f5a 4.26%,#202125 84.84%)",
						}}
						className='w-full md:w-[90%] h-[410px] rounded-lg bg-white relative'>
						<div
							style={{ boxShadow: "0 4px 30px rgb(0 0 0 / 50%)" }}
							className='bg-[#1d1e22] md:w-[300px] md:h-[140px] right-[20px] -top-5  absolute rounded-lg shadow-lg'>
							<div className='flex h-8  justify-between items-center w-full'>
								<div className='flex items-center'>
									<svg
										width='16'
										height='16'
										fill='none'
										className='m-2'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M15 6.675l-1.8-.6c-.2-.1-.3-.3-.2-.4l.9-1.7c.6-1.2-.7-2.5-1.9-1.9l-1.7.9c-.1.1-.3 0-.4-.2l-.6-1.8c-.4-1.3-2.2-1.3-2.6 0l-.6 1.8c-.1.2-.3.3-.4.2l-1.7-.9c-1.2-.6-2.5.7-1.9 1.9l.9 1.7c.1.1 0 .3-.2.4l-1.8.6c-1.3.4-1.3 2.3 0 2.7l1.8.6c.2 0 .3.2.2.3l-.9 1.7c-.6 1.2.7 2.5 1.9 1.9l1.7-.9c.2-.1.4 0 .4.2l.6 1.8c.4 1.3 2.3 1.3 2.7 0l.6-1.8c.1-.2.3-.3.4-.2l1.7.9c1.2.6 2.5-.7 1.9-1.9l-1-1.7c-.1-.2 0-.4.2-.4l1.8-.6c1.3-.4 1.3-2.2 0-2.6zm-7 3.7c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z'
											fill='#4C4F5A'></path>
									</svg>
									<p className='text-sm tracking-widest  text-[#c5c8d4] font-bold'>
										HTML
									</p>
								</div>

								<svg
									width='16'
									height='8'
									fill='none'
									className='mr-2'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M8.709 7.651l6.161-5.622c.241-.22.383-.517.383-.84 0-.323-.142-.62-.383-.84A1.361 1.361 0 0 0 13.95 0c-.354 0-.68.13-.921.349l-5.27 4.808L2.492.349A1.361 1.361 0 0 0 1.57 0C1.215 0 .89.13.648.336.38.569.253.879.253 1.189c0 .297.127.595.368.84 1.615 1.486 5.807 5.325 6.09 5.596l.03.026c.509.465 1.458.465 1.968 0z'
										fill='#4C4F5A'></path>
								</svg>
							</div>
							<img
								src='/code1.png'
								alt=''
								className='object-contain w-full'
							/>
						</div>
						<div
							style={{ boxShadow: "0 4px 30px rgb(0 0 0 / 50%)" }}
							className='bg-[#1d1e22] md:w-[300px] md:h-[140px] -right-8 top-[130px]  absolute rounded-lg shadow-lg'>
							<div className='flex h-8  justify-between items-center w-full'>
								<div className='flex items-center'>
									<svg
										width='16'
										height='16'
										fill='none'
										className='m-2'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M15 6.675l-1.8-.6c-.2-.1-.3-.3-.2-.4l.9-1.7c.6-1.2-.7-2.5-1.9-1.9l-1.7.9c-.1.1-.3 0-.4-.2l-.6-1.8c-.4-1.3-2.2-1.3-2.6 0l-.6 1.8c-.1.2-.3.3-.4.2l-1.7-.9c-1.2-.6-2.5.7-1.9 1.9l.9 1.7c.1.1 0 .3-.2.4l-1.8.6c-1.3.4-1.3 2.3 0 2.7l1.8.6c.2 0 .3.2.2.3l-.9 1.7c-.6 1.2.7 2.5 1.9 1.9l1.7-.9c.2-.1.4 0 .4.2l.6 1.8c.4 1.3 2.3 1.3 2.7 0l.6-1.8c.1-.2.3-.3.4-.2l1.7.9c1.2.6 2.5-.7 1.9-1.9l-1-1.7c-.1-.2 0-.4.2-.4l1.8-.6c1.3-.4 1.3-2.2 0-2.6zm-7 3.7c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z'
											fill='#4C4F5A'></path>
									</svg>
									<p className='text-sm tracking-widest  text-[#c5c8d4] font-bold'>
										SCSS
									</p>
								</div>
								<svg
									width='16'
									height='8'
									fill='none'
									className='mr-2'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M8.709 7.651l6.161-5.622c.241-.22.383-.517.383-.84 0-.323-.142-.62-.383-.84A1.361 1.361 0 0 0 13.95 0c-.354 0-.68.13-.921.349l-5.27 4.808L2.492.349A1.361 1.361 0 0 0 1.57 0C1.215 0 .89.13.648.336.38.569.253.879.253 1.189c0 .297.127.595.368.84 1.615 1.486 5.807 5.325 6.09 5.596l.03.026c.509.465 1.458.465 1.968 0z'
										fill='#4C4F5A'></path>
								</svg>
							</div>
							<img
								src='/code2.png'
								alt=''
								className='object-contain w-full'
							/>
						</div>
						<div
							style={{ boxShadow: "0 4px 30px rgb(0 0 0 / 50%)" }}
							className='bg-[#1d1e22] md:w-[300px] md:h-[140px] right-[40px] top-[280px]  absolute rounded-lg shadow-lg'>
							<div className='flex h-8  justify-between items-center w-full'>
								<div className='flex items-center'>
									<svg
										width='16'
										height='16'
										fill='none'
										className='m-2'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M15 6.675l-1.8-.6c-.2-.1-.3-.3-.2-.4l.9-1.7c.6-1.2-.7-2.5-1.9-1.9l-1.7.9c-.1.1-.3 0-.4-.2l-.6-1.8c-.4-1.3-2.2-1.3-2.6 0l-.6 1.8c-.1.2-.3.3-.4.2l-1.7-.9c-1.2-.6-2.5.7-1.9 1.9l.9 1.7c.1.1 0 .3-.2.4l-1.8.6c-1.3.4-1.3 2.3 0 2.7l1.8.6c.2 0 .3.2.2.3l-.9 1.7c-.6 1.2.7 2.5 1.9 1.9l1.7-.9c.2-.1.4 0 .4.2l.6 1.8c.4 1.3 2.3 1.3 2.7 0l.6-1.8c.1-.2.3-.3.4-.2l1.7.9c1.2.6 2.5-.7 1.9-1.9l-1-1.7c-.1-.2 0-.4.2-.4l1.8-.6c1.3-.4 1.3-2.2 0-2.6zm-7 3.7c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z'
											fill='#4C4F5A'></path>
									</svg>
									<p className='text-sm tracking-widest  text-[#c5c8d4] font-bold'>
										JS
									</p>
								</div>
								<svg
									width='16'
									height='8'
									fill='none'
									className='mr-2'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M8.709 7.651l6.161-5.622c.241-.22.383-.517.383-.84 0-.323-.142-.62-.383-.84A1.361 1.361 0 0 0 13.95 0c-.354 0-.68.13-.921.349l-5.27 4.808L2.492.349A1.361 1.361 0 0 0 1.57 0C1.215 0 .89.13.648.336.38.569.253.879.253 1.189c0 .297.127.595.368.84 1.615 1.486 5.807 5.325 6.09 5.596l.03.026c.509.465 1.458.465 1.968 0z'
										fill='#4C4F5A'></path>
								</svg>
							</div>
							<img
								src='/code3.png'
								alt=''
								className='object-contain w-full'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;
