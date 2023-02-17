import { io } from "socket.io-client";

export const initSocket = async () => {
	const options = {
		"force new connection": true,
		withCredentials: true,
		reconnectionAttempt: "Infinity",
		timeout: 10000,
		transports: ["websocket"],
	};

	return io(process.env.REACT_APP_API_SOCKET_URL, options);
};
