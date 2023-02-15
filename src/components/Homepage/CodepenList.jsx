import React from "react";
import CodepenCard from "./CodepenCard";

const CodepenList = ({ codepens }) => {
	return (
		<div className='px-8 pr-4 flex flex-col gap-4'>
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
