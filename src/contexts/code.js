import { createContext, useContext, useEffect, useReducer } from "react";
import AuthContext from "./auth";

const initialState = {
	xml: "",
	css: "",
	javascript: "",
	title: "",
	author: null,
	isSaved: false,
};

const reducer = (state, { type, payload }) => {
	return { ...state, ...payload };
};

export const CodeContext = createContext(initialState);

export default function CodeProvider({ children }) {
	const [codepen, dispatch] = useReducer(reducer, initialState);
	const { user } = useContext(AuthContext);

	useEffect(() => {
		if (user) dispatch({ payload: { author: user } });
		else dispatch({ payload: { author: null } });
	}, [user]);

	return (
		<CodeContext.Provider value={{ codepen, dispatch }}>
			{children}
		</CodeContext.Provider>
	);
}
