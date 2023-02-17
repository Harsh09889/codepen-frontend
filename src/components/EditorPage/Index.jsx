import React from "react";
import Code from "./Code";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/theme/cobalt.css";
import Header from "./Header";
import Output from "./Output";

const Index = ({ collaborate, socketRef, roomId }) => {
	return (
		<>
			<Header />
			<div className='flex max-w-[100vw]   flex-col md:flex-row justify-between bg-black'>
				<Code
					mode='xml'
					symbol={"/"}
					symbolColor='#ff3c41'
					collaborate={collaborate}
					socketRef={socketRef}
					roomId={roomId}
				/>
				<Code
					mode='css'
					symbol={"*"}
					symbolColor='#0ebeff'
					collaborate={collaborate}
					socketRef={socketRef}
					roomId={roomId}
				/>
				<Code
					mode='javascript'
					symbol={"()"}
					symbolColor='#fcd000'
					collaborate={collaborate}
					socketRef={socketRef}
					roomId={roomId}
				/>
			</div>
			<Output />
		</>
	);
};

export default Index;
