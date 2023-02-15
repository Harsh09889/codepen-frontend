import React from "react";
import CodepenCard from "./CodepenCard";

const CodepenList = ({ codepens }) => {
	return (
		<div
			style={{
				gridTemplateColumns: "repeat(auto-fill, minmax(15rem,1fr))",
			}}
			className='md:w-4/5 mx-auto px-8 pr-4 grid gap-4 place-content-center'>
			{codepens.map((codepen) => (
				<CodepenCard
					codepen={codepen}
					key={codepen._id}
				/>
			))}
		</div>
	);
};

export default CodepenList;
