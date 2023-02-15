import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CodeContext } from "../../contexts/code";

const CodepenCard = ({ codepen }) => {
	const { dispatch } = useContext(CodeContext);

	const navigate = useNavigate();

	const handleNavigate = (e) => {
		dispatch({ payload: { ...codepen, isSaved: true } });
		navigate("/code");
	};
	return (
		<div
			style={{ boxShadow: "rgb(0 0 0 / 50%) 0px 4px 30px" }}
			onClick={handleNavigate}
			className=' p-4 rounded-md bg-[#1e1f26] text-white cursor-pointer'>
			<h2 className='font-medium truncate w-full text-2xl'>{codepen.title}</h2>
			<p className='opacity-60'>by {codepen.author.name}</p>
		</div>
	);
};

export default CodepenCard;
