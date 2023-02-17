import React, { useContext, useEffect, useRef, useState } from "react";
import Codemirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "codemirror/mode/xml/xml";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";
import ACTIONS from "../../sockets/actions";
import "../../styles/index.css";
import { CodeContext } from "../../contexts/code";

const CollabEditor = ({
	mode,
	roomId,
	socketRef,
	symbol,
	symbolColor,
	editorRef,
}) => {
	const [isExpanded, setIsExpanded] = useState(false);

	useEffect(() => {
		let modeToApply;
		switch (mode) {
			case "html": {
				modeToApply = "xml";
				break;
			}
			case "css": {
				modeToApply = "css";
				break;
			}
			case "js": {
				modeToApply = "javascript";
				break;
			}
			default: {
				break;
			}
		}

		(async () => {
			editorRef.current = Codemirror.fromTextArea(
				document.getElementById(`collabEditor${mode}`),
				{
					mode: { name: modeToApply },
					theme: "dracula",
					autoCloseTags: true,
					autoCloseBrackets: true,
					lineNumbers: true,
				}
			);

			editorRef.current.on("change", (instance, changes) => {
				const { origin } = changes;
				const code = instance.getValue();
				if (origin !== "setValue") {
					socketRef.current.emit(ACTIONS.CODE_CHANGE, {
						roomId,
						code: { [mode]: code },
					});
				}
			});
		})();

		return () => {
			editorRef.current.off("change");
			editorRef.current = null;
		};
	}, []);

	useEffect(() => {
		if (socketRef.current) {
			socketRef.current.on(ACTIONS.CODE_CHANGE, ({ code }) => {
				console.log(code);
				if (code !== null) {
					if (code[mode]) {
						editorRef.current.setValue(code[mode]);
					}
				}
			});
		}
	}, [socketRef.current]);

	return (
		<>
			<div
				style={{ width: isExpanded ? "100%" : "" }}
				className={`w-full md:w-[33.3%] overflow-hidden  md:max-w-[calc(100vw-6rem)] min-w-[10px] pb-4 flex flex-col ${
					isExpanded ? "h-full" : "h-20"
				} md:h-full`}>
				<div
					className={`h-10 w-full flex justify-between items-center bg-black `}>
					<div
						className={`h-full py-2 flex items-center justify-center gap-2 px-4 text-lg w-fit  cm-s-${"material"} CodeMirror`}>
						<div
							style={{ background: symbolColor }}
							className='icon grid text-sm place-items-center w-6 rounded-md text-black bg-red-300'>
							<p>{symbol}</p>
						</div>
						<div className='Name'>
							{(() => {
								switch (mode) {
									case "xml":
										return "HTML";

									case "javascript":
										return "JS";

									default:
										return mode.toUpperCase();
								}
							})()}
						</div>
					</div>
					<div
						onClick={(e) => setIsExpanded((p) => !p)}
						className='px-2 h-full grid place-items-center bg-slate-700 cursor-pointer'>
						{isExpanded ? (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='3'
								stroke='white'
								className='w-4 h-4'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25'
								/>
							</svg>
						) : (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='2.5'
								stroke='white'
								className='w-4 h-4'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25'
								/>
							</svg>
						)}
					</div>
				</div>
				<textarea
					className='relative'
					id={`collabEditor${mode}`}></textarea>
			</div>
		</>
	);
};

export default CollabEditor;
