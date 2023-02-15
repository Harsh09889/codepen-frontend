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
			onClick={handleNavigate}
			className='border p-4 rounded-md bg-black text-white cursor-pointer'>
			<h2 className='font-medium text-2xl'>{codepen.title}</h2>
			<p>{codepen.author.name}</p>
		</div>
	);
};

export default CodepenCard;
