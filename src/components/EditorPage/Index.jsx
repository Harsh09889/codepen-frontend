import React from "react";
import Code from "./Code";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/theme/cobalt.css";
import Header from "./Header";
import Output from "./Output";

const Index = () => {
	return (
		<>
			<Header />
			<div className='flex w-screen justify-between bg-black'>
				<Code
					mode='xml'
					symbol={"/"}
					symbolColor='#ff3c41'
				/>
				<Code
					mode='css'
					symbol={"*"}
					symbolColor='#0ebeff'
				/>
				<Code
					mode='javascript'
					symbol={"()"}
					symbolColor='#fcd000'
				/>
			</div>
			<Output />
		</>
	);
};

export default Index;
