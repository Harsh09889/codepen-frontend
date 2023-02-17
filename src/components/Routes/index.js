import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import React, { useContext } from "react";
import Homepage from "../Homepage";
import Login from "../Auth/Login";
import AuthContext from "../../contexts/auth";
import Editor from "../EditorPage/Index";
import Register from "../Auth/Register";
import Github from "../Auth/Github/Index";
import Collaborate from "../Collaborate/Collaborate.jsx";
import Room from "../Collaborate/Room";

const IfLoggedIn = ({ children }) => {
	const { user } = useContext(AuthContext);
	return user ? <Outlet /> : <Navigate to={"/auth/login"} />;
};

const IfLoggedOut = ({ children }) => {
	const { user } = useContext(AuthContext);
	return !user ? <Outlet /> : <Navigate to={"/"} />;
};

const AllRoutes = () => {
	return (
		<div>
			<Routes>
				<Route
					path='/'
					element={<Homepage />}
				/>
				<Route
					path='/auth'
					element={<IfLoggedOut />}>
					<Route
						path='login'
						element={<Login />}
					/>
					<Route
						path='github-signin'
						element={<Github />}
					/>
					<Route
						path='register'
						element={<Register />}
					/>
				</Route>
				<Route
					path='/code'
					element={<Editor />}
				/>
				<Route
					path='/'
					element={<IfLoggedIn />}>
					<Route
						path='/collaborate'
						element={<Collaborate />}
					/>
					<Route
						path='/collaborate/:roomId'
						element={<Room />}
					/>
				</Route>
			</Routes>
		</div>
	);
};

export default AllRoutes;
