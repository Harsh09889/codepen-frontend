import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../api";
import AuthContext from "../../contexts/auth";
import Search from "../Search";
import Sidebar from "../Sidebar/Sidebar";
import CodepenList from "./CodepenList";
import HeroBanner from "./HeroBanner";
import "../../styles/loading.css";

const Homepage = () => {
	const [isSidebar, setIsSidebar] = useState(false);
	const [codepens, setCodepens] = useState([]);
	const [search, setSearch] = useState("");
	const [searchItems, setSearchItems] = useState([]);
	const timeRef = useRef(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		(async () => {
			setLoading(true);
			const { data } = await axios.get("/code");
			setCodepens(data.data);
			setLoading(false);
		})();
	}, []);

	useEffect(() => {
		if (!search) setSearchItems([]);
		else {
			if (timeRef.current) clearTimeout(timeRef.current);
			timeRef.current = setTimeout(() => {
				const arr = codepens.filter((codepen) =>
					codepen.title.toLowerCase().includes(search.toLowerCase())
				);
				setSearchItems(arr);
			}, 1000);
		}

		return () => clearTimeout(timeRef.current);
	}, [search]);

	return (
		<div className='flex h-screen '>
			<Sidebar
				isSidebar={isSidebar}
				setIsSidebar={setIsSidebar}
			/>
			<div className='w-full overflow-y-scroll'>
				<Search
					search={search}
					setSearch={setSearch}
					isSidebar={isSidebar}
				/>

				<HeroBanner />

				{loading ? (
					<div className='loader mx-auto mt-16'></div>
				) : (
					<CodepenList codepens={searchItems.length ? searchItems : codepens} />
				)}
			</div>
		</div>
	);
};

export default Homepage;
