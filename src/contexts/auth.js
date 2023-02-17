import React, { useEffect, useState } from "react";
import { getLoggedInUser, loginApi, registerApi } from "../api/user";
import { toast } from "react-toastify";

export const AuthContext = React.createContext({
	user: null,
	setUser: (user) => {},
	showLoginForm: false,
	setShowLoginForm: (show) => {},
	login: (email, password) => {},
	logout: () => {},
});


export async function register({ email, password, name }) {
	try {
		const { data } = await registerApi(name, email, password);
		return true;
	} catch (error) {
		return false;
	}
}

export function AuthContextProvider({ children }) {
	const [user, setUser] = useState(null);
	const [showLoginForm, setShowLoginForm] = useState(false);

	function login(email, password) {
		loginApi(email, password)
			.then((response) => {
				const { token, user } = response.data.data;

				setUser(user);

				localStorage.setItem("auth-token", token);
				setShowLoginForm(false);
			})
			.catch((err) => {
				toast("Login failed", {
					type: "error",
				});
			});
	}

	function logout() {
		localStorage.removeItem("auth-token");
		window.location.reload();
	}

	useEffect(() => {
		getLoggedInUser().then((response) => {
			const user = response.data.data;

			setUser(user);
		});
	}, [showLoginForm]);

	return (
		<AuthContext.Provider
			value={{
				user,
				setUser,
				showLoginForm,
				setShowLoginForm,
				login,
				logout,
				register,
			}}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthContext;
