import React, { useContext, useEffect, useRef, useState } from "react";
import {
	Navigate,
	useLocation,
	useNavigate,
	useParams,
} from "react-router-dom";
import { toast } from "react-toastify";
import { CodeContext } from "../../contexts/code";
import ACTIONS from "../../sockets/actions";
import { initSocket } from "../../sockets/socket";
import Header from "../EditorPage/Header";
import Editor from "../EditorPage/Index";
import CollabEditor from "./CollabEditor";
import RoomTopBar from "./RoomTopBar";

const Room = () => {
	const { roomId } = useParams();
	const socketRef = useRef(null);
	const htmlEditorRef = useRef(null);
	const cssEditorRef = useRef(null);
	const jsEditorRef = useRef(null);
	const [code, setCode] = useState({
		html: "",
		css: "",
		js: "",
	});
	const [domCode, setDomCode] = useState({
		html: "",
		css: "",
		js: "",
	});
	const timeoutRef = useRef(null);

	const location = useLocation();
	const navigate = useNavigate();
	const [clients, setClients] = useState([]);

	useEffect(() => {
		(async () => {
			socketRef.current = await initSocket();
			socketRef.current.on("connect_error", (err) => handleError(err));
			socketRef.current.on("connect_failed", (err) => handleError(err));

			function handleError(e) {
				console.log("Socket Error", e);
				toast.error("Socket connection Failed, Try again later");
				navigate("/");
			}

			socketRef.current.emit(ACTIONS.JOIN, {
				roomId,
				username: location.state?.username,
			});

			// Listening for joined event
			socketRef.current.on(
				ACTIONS.JOINED,
				({ clients, username, socketId }) => {
					if (username !== location.state?.username) {
						toast.success(`${username} joined the room.`);
						console.log(`${username} joined the room.`);
					}
					setClients(clients);
				}
			);

			//Listening for disconnected event
			socketRef.current.on(ACTIONS.DISCONNECTED, ({ socketId, username }) => {
				toast.success(`${username} left the room.`);

				setClients((prev) => {
					return prev.filter((client) => client.socketId !== socketId);
				});
			});
		})();

		return () => {
			socketRef.current.off(ACTIONS.JOINED);
			socketRef.current.off(ACTIONS.DISCONNECTED);
			socketRef.current.disconnect();
		};
	}, []);

	useEffect(() => {
		if (htmlEditorRef.current) {
			htmlEditorRef.current.on("change", (instance, changes) => {
				setCode((p) => ({
					css: cssEditorRef.current.getValue(),
					html: htmlEditorRef.current.getValue(),
					js: jsEditorRef.current.getValue(),
				}));
			});
		}
		if (cssEditorRef.current) {
			cssEditorRef.current.on("change", (instance, changes) => {
				setCode((p) => ({
					css: cssEditorRef.current.getValue(),
					html: htmlEditorRef.current.getValue(),
					js: jsEditorRef.current.getValue(),
				}));
			});
		}
		if (jsEditorRef.current) {
			jsEditorRef.current.on("change", (instance, changes) => {
				setCode((p) => ({
					css: cssEditorRef.current.getValue(),
					html: htmlEditorRef.current.getValue(),
					js: jsEditorRef.current.getValue(),
				}));
			});
		}
	}, [htmlEditorRef.current, cssEditorRef.current, jsEditorRef.current]);

	useEffect(() => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		timeoutRef.current = setTimeout(() => {
			setDomCode(code);
		}, 1000);
	}, [code]);

	if (navigate.state) return <Navigate to={"/"} />;

	return (
		<>
			<RoomTopBar
				clients={clients}
				roomId={roomId}
			/>
			<Header />
			<div className='flex max-w-[100vw]   flex-col md:flex-row justify-between bg-black'>
				<CollabEditor
					mode='html'
					roomId={roomId}
					socketRef={socketRef}
					symbol={"/"}
					symbolColor='red'
					editorRef={htmlEditorRef}
				/>
				<CollabEditor
					mode='css'
					roomId={roomId}
					socketRef={socketRef}
					symbol={"/"}
					symbolColor='red'
					editorRef={cssEditorRef}
				/>
				<CollabEditor
					mode='js'
					roomId={roomId}
					socketRef={socketRef}
					symbol={"/"}
					symbolColor='red'
					editorRef={jsEditorRef}
				/>
			</div>
			<iframe
				className='bg-white w-full h-full'
				title='outputCollab'
				srcDoc={`<html>
					<head>
						<style>
							${domCode.css}
						</style>
					</head/>
					<body>
						${domCode.html}
					</body>
					<script>
						${domCode.js}
					</script>
				</html>`}
				sandbox='allow-scripts'
			/>
		</>
	);
};

export default Room;
