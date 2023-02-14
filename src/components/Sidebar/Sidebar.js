import React from "react";

const Sidebar = ({ isSidebar, setIsSidebar }) => {
	return (
		<div
			className={` ${
				isSidebar ? "absolute md:relative left-0" : "absolute -left-[188px]"
			}  h-screen w-[188px] z-10 group ${
				!isSidebar &&
				`before:bg-[#868ca0] before:content-[""] before:w-4 before:absolute  before:h-full before:-right-4`
			}  bg-[#1e1f26]`}>
			<div
				onClick={(e) => setIsSidebar((p) => !p)}
				className='h-8 w-8 absolute cursor-pointer grid place-items-center font-bold top-10 -right-8 z-10 bg-white opacity-20 group-hover:opacity-100 group-transition-opacity duration-500'>
				{isSidebar ? "<" : ">"}
			</div>

			<div className='p-4'>
				<svg
					viewBox='0 0 138 26'
					fill='none'
					stroke='#fff'
					stroke-width='2.3'
					stroke-linecap='round'
					stroke-linejoin='round'
					title='CodePen'>
					<path d='M15 8a7 7 0 1 0 0 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0 11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 0 1 0 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 0 0 0-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6'></path>
				</svg>
				<p className='mt-4 font-mono text-xs text-[#868ca0]'>
					Try Our Free Editor
				</p>
				<button className='h-16 w-full mt-4 rounded-lg border-4 bg-black text-white'>
					Start Coding
				</button>
			</div>
			<ul>
				<li className='ml-4 mb-2 text-white'>Search Pens</li>
				<li className='ml-4 mb-2 text-white'>Challenges</li>
				<li className='ml-4 mb-2 text-white'>Spark</li>
			</ul>
		</div>
	);
};

export default Sidebar;
