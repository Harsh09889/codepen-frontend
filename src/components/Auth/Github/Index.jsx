import React, { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "../../../api";
import AuthContext from "../../../contexts/auth";

const Index = () => {
	const [q, setQ] = useSearchParams();
	const code = q.get("code");
	const { setUser } = useContext(AuthContext);

	useEffect(() => {
		(async () => {
			const { data } = await axios.get(`/auth/github/${code}`);
			const { token, user } = data.data;

			setUser(user);
			localStorage.setItem("auth-token", token);
		})();
	}, []);

	return <div>Loading your profile</div>;
};

export default Index;
