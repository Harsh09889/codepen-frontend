const colors = ["blue", "green", "red", "yellow"];

const RoomTopBar = ({ clients, roomId }) => {
	return (
		<div className='w-full flex flex-col px-4'>
			<h2 className='text-white text-center '>
				{`Connected to Room`}
				<span className='block'>{` ${roomId} 🟢`}</span>
			</h2>
			<div className='flex gap-4 my-4'>
				{clients.map((client) => (
					<div
						key={client.socketId}
						className='flex flex-col'>
						<div
							style={{
								background: colors[Math.floor(Math.random() * colors.length)],
							}}
							className='font-bold text-2xl px-2 rounded-sm grid place-items-center'>
							{client.username.split("-")[0].charAt(0)}
							{client.username.split("-")[1]
								? client.username.split("-")[1].charAt(0)
								: ""}
						</div>
						<h2 className='text-white'>{client.username}</h2>
					</div>
				))}
			</div>
		</div>
	);
};

export default RoomTopBar;
