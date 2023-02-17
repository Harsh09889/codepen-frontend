import React, { useContext, useEffect, useRef, useState } from "react";
import { CodeContext } from "../../contexts/code";

const srcDoc = (html, css, js) => `

<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        ${css}
    </style>
</head>
<body>
    ${html}
</body>
<script>
    ${js}
</script>
</html>

`;
//
const Output = () => {
	const { codepen } = useContext(CodeContext);
	const ref = useRef(null);

	const [localState, setLocalState] = useState({
		html: codepen.xml,
		css: codepen.css,
		js: codepen.javascript,
	});

	useEffect(() => {
		if (ref.current) clearTimeout(ref.current);

		if (codepen.xml || codepen.css || codepen.js) {
			ref.current = setTimeout(() => {
				setLocalState({
					html: codepen.xml,
					css: codepen.css,
					js: codepen.javascript,
				});
			}, 1000);
		}
	}, [codepen]);

	return (
		<div className=' flex w-screen flex-col  bg-white h-[40vh]'>
			<iframe
				className='h-full w-full'
				title='Output'
				sandbox='allow-scripts'
				srcDoc={srcDoc(localState.html, localState.css, localState.js)}
			/>
		</div>
	);
};

export default Output;
