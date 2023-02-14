import React, { useContext, useRef } from "react";
import axios from "../../api";
import AuthContext from "../../contexts/auth";

const Login = () => {
	const emailRef = useRef(null);
	const pwdRef = useRef(null);
	const { login } = useContext(AuthContext);

	const handleLogin = (e) => {
		e.preventDefault();

		try {
			login(emailRef.current.value, pwdRef.current.value);
		} catch (error) {}
	};

	return (
		<div className='pt-8 min-h-screen h-full items-center flex flex-col md:flex-row   justify-end px-24'>
			<div className='flex flex-col mr-8 '>
				<svg
					viewBox='0 0 138 26'
					fill='none'
					stroke='#fff'
					strokeWidth='2.3'
					strokeLinecap='round'
					strokeLinejoin='round'
					title='CodePen'
					className='opacity-50 w-1/2 mx-auto md:mx-0'>
					<path d='M15 8a7 7 0 1 0 0 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0 11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 0 1 0 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 0 0 0-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6'></path>
				</svg>
				<h1 className='text-[4.5rem] text-center md:text-left text-white font-bold'>
					Log In!
				</h1>
				<form
					onSubmit={handleLogin}
					className='flex flex-col w-[90%] md:w-full  mx-auto gap-4 mt-8'>
					<input
						ref={emailRef}
						className='h-12 p-4 rounded-lg border-none outline-none'
						type='email'
						name='email'
						placeholder='Enter Your Email..'
					/>
					<input
						ref={pwdRef}
						className='h-12 p-4 rounded-lg border-none outline-none'
						type='password'
						name='password'
						placeholder='Enter Your Password..'
					/>

					<input
						className='h-12 p-4 rounded-md grid place-items-center text-center bg-[#37d86c] hover:bg-[#248c46] hover:text-white border-none outline-none'
						type='submit'
						value={"Login"}
					/>
				</form>
			</div>
			<div className='flex flex-col ml-8 w-1/2 '>
				<button className='w-48 bg-[#57606a] py-4 text-white rounded-md'>
					Login via Github
				</button>
			</div>
		</div>
	);
};

export default Login;
