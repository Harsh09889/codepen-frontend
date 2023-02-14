import { createContext, useReducer } from "react";

const initialState = {
	xml: "",
	css: "",
	javascript: "",
	title: "Untitled",
	author: null,
	isSaved: true,
};

const reducer = (state, { type, payload }) => {
	return { ...state, ...payload };
};

export const CodeContext = createContext(initialState);

export default function CodeProvider({ children }) {
	const [codepen, dispatch] = useReducer(reducer, initialState);

	return (
		<CodeContext.Provider value={{ codepen, dispatch }}>
			{children}
		</CodeContext.Provider>
	);
}
