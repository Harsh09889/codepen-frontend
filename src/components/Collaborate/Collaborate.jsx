import React, { useContext, useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/auth";
import { Link } from "react-router-dom";

const Collaborate = () => {
	const [roomId, setRoomId] = useState("");
	const [username, setUsername] = useState("");
	const { user } = useContext(AuthContext);
	const navigate = useNavigate();
	const usernameRef = useRef(null);

	useEffect(() => {
		if (user) {
			setUsername(user.name.toLowerCase().split(" ").join("-"));
			usernameRef.current.readOnly = true;
		}
	}, [user]);

	const createNewRoomId = () => {
		const id = uuid();
		setRoomId(id);
		toast.success("New Room ID created Successfully");
	};

	function joinRoom(e) {
		if (!roomId || !username)
			return toast.error("Both Room ID and Useraname are required");

		navigate(`/collaborate/${roomId}`, {
			state: { username },
		});
	}

	return (
		<div className='h-screen flex items-center justify-center'>
			<div className='bg-black rounded-lg  text-white p-8 gap-8 flex flex-col'>
				<h2 className='text-4xl my-4 font-extrabold'>
					<Link to={"/"}>Codepen</Link> Collab
				</h2>

				<div className='flex flex-col'>
					<label
						htmlFor='roomId'
						className='text-lg'>
						Paste Your Room Id
					</label>
					<input
						type='text'
						id='roomId'
						className='w-96 py-4 px-2 text-black rounded-md  '
						placeholder='Room Id'
						value={roomId}
						onChange={(e) => setRoomId(e.target.value)}
					/>
				</div>
				<input
					type='text'
					id='username'
					className='w-96 text-black py-4 px-2 rounded-md'
					ref={usernameRef}
					placeholder='Username'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<button
					onClick={joinRoom}
					className='py-3 px-4 text-white bg-green-400 text-xl rounded-lg'>
					Join
				</button>
				<p className='mt-4'>
					If you do not have a Room Id,{" "}
					<button
						onClick={createNewRoomId}
						className='text-blue-600'>
						create one!
					</button>
				</p>
			</div>
		</div>
	);
};

export default Collaborate;
